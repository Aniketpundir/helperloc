import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-labour-backend.onrender.com/";

/* ================= FETCH LIST ================= */

export const fetchWorkersList = createAsyncThunk(
    "workers/list",
    async (workCategory, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/workers`, {
                params: { workCategory },
            });

            return res.data.workers;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= FETCH SINGLE ================= */

export const fetchSingleWorker = createAsyncThunk(
    "workers/single",
    async ({ id, token }, { rejectWithValue }) => {
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

const workersSlice = createSlice({
    name: "workers",

    initialState: {
        workers: [],
        workerDetails: null,   // 👈 ADD
        loading: false,
    },

    extraReducers: (builder) => {
        builder

            /* ===== LIST ===== */

            .addCase(fetchWorkersList.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchWorkersList.fulfilled, (state, action) => {
                state.loading = false;
                state.workers = action.payload;
            })

            .addCase(fetchWorkersList.rejected, (state) => {
                state.loading = false;
            })

            /* ===== SINGLE ===== */

            .addCase(fetchSingleWorker.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchSingleWorker.fulfilled, (state, action) => {
                state.loading = false;
                state.workerDetails = action.payload;
            })

            .addCase(fetchSingleWorker.rejected, (state) => {
                if (!state.workerDetails) {
                    state.loading = true;
                }
            });
    },
});

export default workersSlice.reducer;