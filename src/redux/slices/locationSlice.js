import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocation = createAsyncThunk(
    "location/fetch",
    async (_, { rejectWithValue }) => {
        try {
            return await new Promise((resolve, reject) => {

                navigator.geolocation.getCurrentPosition(

                    async (pos) => {
                        const latitude = pos.coords.latitude;
                        const longitude = pos.coords.longitude;

                        const res = await axios(
                            `https://api.opencagedata.com/geocode/v1/json?key=416911d3a90940a6ba7ba4f7aaaa402e&q=${latitude},${longitude}`
                        );

                        const data = res.data.results[0]?.components || {};

                        resolve({
                            latitude,
                            longitude,
                            district: data.state_district || "",
                            state: data.state || "",
                            pinCode: data.postcode || "",
                        });
                    },

                    (err) => reject(err)
                );
            });
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const locationSlice = createSlice({
    name: "location",

    initialState: {
        latitude: null,
        longitude: null,
        district: "",
        state: "",
        pinCode: "",
    },

    extraReducers: (builder) => {
        builder.addCase(fetchLocation.fulfilled, (state, action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
            state.district = action.payload.district;
            state.state = action.payload.state;
            state.pinCode = action.payload.pinCode;
        });
    },
});

export default locationSlice.reducer;