import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-labour-backend.onrender.com/";

/* ================= FETCH ================= */

export const fetchAddresses = createAsyncThunk(
    "address/fetch",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/addresses/user`, {
                headers: { token },
            });

            return res.data?.addresses || res.data?.data || [];
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= ADD ================= */

export const addAddress = createAsyncThunk(
    "address/add",
    async ({ token, data }, { rejectWithValue }) => {
        try {
            await axios.post(`${URL}api/addresses`, data, {
                headers: { token },
            });
            return true;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= UPDATE ================= */

export const updateAddress = createAsyncThunk(
    "address/update",
    async ({ token, id, data }, { rejectWithValue }) => {
        try {
            await axios.patch(`${URL}api/addresses/${id}`, data, {
                headers: { token },
            });
            return true;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= DELETE ================= */

export const deleteAddress = createAsyncThunk(
    "address/delete",
    async ({ token, id }, { rejectWithValue }) => {
        try {
            await axios.delete(`${URL}api/addresses/${id}`, {
                headers: { token },
            });
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const addressSlice = createSlice({
    name: "address",

    initialState: {
        addresses: [],
        loading: false,
        selectedAddress: null,
    },

    reducers: {
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchAddresses.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.loading = false;
                state.addresses = action.payload;
                if (action.payload.length > 0) {
                    state.selectedAddress = action.payload[0]._id;
                }
            })

            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.addresses = state.addresses.filter(
                    (a) => a._id !== action.payload
                );
            });
    },
});

export const { setSelectedAddress } = addressSlice.actions;
export default addressSlice.reducer;