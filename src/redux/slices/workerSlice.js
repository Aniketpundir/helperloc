import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-labour-backend.onrender.com/";

export const fetchWorkerDetails = createAsyncThunk(
    "worker/details",
    async ({ token, id }, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/workers/${id}`, {
                headers: { token },
            });

            return res.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const workerSlice = createSlice({
    name: "worker",
    initialState: {
        workerDetails: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWorkerDetails.fulfilled, (state, action) => {
            state.workerDetails = action.payload;
        });
    },
});

export default workerSlice.reducer;