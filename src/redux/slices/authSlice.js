import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e-labour-backend.onrender.com/";

// const URL = "http://localhost:5000/"

/* ======================================================
   LOGIN CUSTOMER
====================================================== */

export const loginCustomer = createAsyncThunk(
    "auth/loginCustomer",
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(`${URL}api/users/login`, data);

            if (!res.data.success) {
                return rejectWithValue(res.data.message);
            }

            const token = res.data.token;

            dispatch(fetchCustomerProfile(token));

            return token;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

/* ======================================================
   LOGIN WORKER
====================================================== */

export const loginWorker = createAsyncThunk(
    "auth/loginWorker",
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(`${URL}api/users/login`, data);
            console.log(res)

            if (!res.data.success) {
                return rejectWithValue(res.data.message);
            }

            const token = res.data.token;

            dispatch(fetchWorkerProfile(token));

            return token;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

/* ======================================================
   REGISTER CUSTOMER
====================================================== */

export const registerCustomer = createAsyncThunk(
    "auth/registerCustomer",
    async (formData, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(`${URL}api/users/register`, formData);

            if (!res.data.success) {
                return rejectWithValue(res.data.message);
            }

            const token = res.data.token;

            dispatch(fetchCustomerProfile(token));

            return token;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

/* ======================================================
   REGISTER WORKER
====================================================== */

export const registerWorker = createAsyncThunk(
    "auth/registerWorker",
    async (formData, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post(`${URL}api/users/register`, formData);

            if (!res.data.success) {
                return rejectWithValue(res.data.message);
            }

            const token = res.data.token;

            dispatch(fetchWorkerProfile(token));

            return token;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

/* ======================================================
   FETCH CUSTOMER PROFILE
====================================================== */

export const fetchCustomerProfile = createAsyncThunk(
    "auth/fetchCustomerProfile",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/users/mydetails`, {
                headers: { token },
            });

            return res.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

/* ======================================================
   FETCH WORKER PROFILE
====================================================== */

export const fetchWorkerProfile = createAsyncThunk(
    "auth/fetchWorkerProfile",
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${URL}api/workers/mydetails`, {
                headers: { token },
            });

            return res.data.worker;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

/* ======================================================
   SLICE
====================================================== */

const authSlice = createSlice({
    name: "auth",

    initialState: {
        customerToken: localStorage.getItem("customerToken") || null,
        workerToken: localStorage.getItem("workerToken") || null,

        customerProfile: null,
        workerProfile: null,

        loading: false,
        error: null,
    },

    reducers: {
        logoutCustomer: (state) => {
            state.customerToken = null;
            state.customerProfile = null;
            localStorage.removeItem("customerToken");
        },

        logoutWorker: (state) => {
            state.workerToken = null;
            state.workerProfile = null;
            localStorage.removeItem("workerToken");
        },

        clearError: (state) => {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            /* ================= LOGIN CUSTOMER ================= */

            .addCase(loginCustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.customerToken = action.payload;
                localStorage.setItem("customerToken", action.payload);
            })

            .addCase(loginCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ================= LOGIN WORKER ================= */

            .addCase(loginWorker.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loginWorker.fulfilled, (state, action) => {
                state.loading = false;
                state.workerToken = action.payload;
                localStorage.setItem("workerToken", action.payload);
            })

            .addCase(loginWorker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ================= REGISTER CUSTOMER ================= */

            .addCase(registerCustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(registerCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.customerToken = action.payload;
                localStorage.setItem("customerToken", action.payload);
            })

            .addCase(registerCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ================= REGISTER WORKER ================= */

            .addCase(registerWorker.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(registerWorker.fulfilled, (state, action) => {
                state.loading = false;
                state.workerToken = action.payload;
                localStorage.setItem("workerToken", action.payload);
            })

            .addCase(registerWorker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* ================= PROFILE CUSTOMER ================= */

            .addCase(fetchCustomerProfile.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchCustomerProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.customerProfile = action.payload;
            })

            .addCase(fetchCustomerProfile.rejected, (state) => {
                state.loading = false;
            })

            /* ================= PROFILE WORKER ================= */

            .addCase(fetchWorkerProfile.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchWorkerProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.workerProfile = action.payload;
            })

            .addCase(fetchWorkerProfile.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { logoutCustomer, logoutWorker, clearError } = authSlice.actions;
export default authSlice.reducer;