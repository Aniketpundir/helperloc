import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-labour-backend.onrender.com/";

/* ================= FETCH PRIMARY INFO ================= */

export const fetchWorkerPrimaryInfo = createAsyncThunk(
    "workerProfile/fetchPrimaryInfo",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/workers/worker/primary-info`, {
                headers: { token },
            });

            console.log("✅ Primary Info:", res.data); // console response

            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const workersProfileSlice = createSlice({
    name: "workerProfile",

    initialState: {
        workerSignUp: null,
        loading: false,
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchWorkerPrimaryInfo.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchWorkerPrimaryInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.workerSignUp = action.payload;
            })

            .addCase(fetchWorkerPrimaryInfo.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default workersProfileSlice.reducer;