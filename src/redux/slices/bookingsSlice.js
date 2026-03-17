import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_LINK = "https://e-labour-backend.onrender.com/";

/* ================= UPCOMING ================= */

export const fetchUpcomingBookings = createAsyncThunk(
    "bookings/fetchUpcoming",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token },
                params: { q: "upcoming" },
            });

            console.log("✅ Upcoming Bookings:", res.data.bookings);

            return res.data.bookings;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= COMPLETED ================= */

export const fetchPastBookings = createAsyncThunk(
    "bookings/fetchPast",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token },
                params: { q: "completed" },
            });

            return res.data.bookings;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

/* ================= JOB REQUEST ================= */

export const fetchJobRequest = createAsyncThunk(
    "bookings/jobRequest",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token },
                params: { q: "pending" },
            });

            console.log("✅ Job Requests:", res.data.bookings);

            return res.data.bookings || [];
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const bookingsSlice = createSlice({
    name: "bookings",

    initialState: {
        bookingWorkerList: [],
        pastBookingWorkerList: [],
        jobRequest: [],
        loading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder

            /* ===== UPCOMING ===== */

            .addCase(fetchUpcomingBookings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchUpcomingBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookingWorkerList = action.payload;
            })

            .addCase(fetchUpcomingBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ===== PAST ===== */

            .addCase(fetchPastBookings.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchPastBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.pastBookingWorkerList = action.payload;
            })

            .addCase(fetchPastBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ===== JOB REQUEST ===== */

            .addCase(fetchJobRequest.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchJobRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.jobRequest = action.payload;
            })

            .addCase(fetchJobRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bookingsSlice.reducer;