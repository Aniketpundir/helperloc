import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import addressReducer from "./slices/addressSlice";
import workerReducer from "./slices/workerSlice";
import locationReducer from "./slices/locationSlice";
import workersReducer from "./slices/workersSlice";
import bookingsReducer from "./slices/bookingsSlice";
import workersProfileReducer from "./slices/workersProfileSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        address: addressReducer,
        worker: workerReducer,
        workers: workersReducer,
        location: locationReducer,
        bookings: bookingsReducer,
        workerProfile: workersProfileReducer,
    },
});