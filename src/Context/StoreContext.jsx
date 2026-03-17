import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
    // Backend URL
    const URL_LINK = "https://e-labour-backend.onrender.com/";

    // const URL_LINK = "http://localhost:5000/"

    // ================== TOKENS ==================
    const [workerToken, setWorkerToken] = useState(localStorage.getItem("workerToken") || null);
    const [customerToken, setCustomerToken] = useState(localStorage.getItem("customerToken") || null);

    // Worker Sign Up data

    const [workerSignUp, setWorkerSignUp] = useState([]);

    useEffect(() => {
        if (!workerToken) { return };

        const signUpDetails = async () => {
            let newUrl = URL_LINK;
            newUrl += "api/workers/worker/primary-info";
            try {

                const res = await axios.get(newUrl, { headers: { token: workerToken } })

                setWorkerSignUp(res.data);

            } catch (e) {
                console.log(e);
            }
        }

        signUpDetails();
    }, [workerToken])


    // ================== BOOKINGS ==================
    const [bookingWorkerList, setBookingWorkerList] = useState([]);

    const [jobRequest, setJobRequest] = useState([]);

    const bookingWorkersList = async () => {
        if (!customerToken) return;
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token: customerToken },
                params: { q: "upcoming" },
            });
            setBookingWorkerList(res.data.bookings);
        } catch (error) {
            console.error("Error fetching upcoming bookings:", error.response?.data || error.message);
        }
    };

    const [pastBookingWorkerList, setPastBookingWorkerList] = useState([]);
    const pastBookingWorkersList = async () => {
        if (!customerToken) return;
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token: customerToken },
                params: { q: "completed" },
            });
            setPastBookingWorkerList(res.data.bookings);
        } catch (error) {
            console.error("Error fetching past bookings:", error.response?.data || error.message);
        }
    };

    const jobRequestForWorker = async () => {
        if (!workerToken) return;
        try {
            const res = await axios.get(`${URL_LINK}api/bookings/`, {
                headers: { token: workerToken },
                params: { q: "pending" },
            });
            setJobRequest(res.data.bookings || []);
        } catch (error) {
            console.error("Error fetching job requests:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (customerToken) {
            bookingWorkersList();
            pastBookingWorkersList();
        }
    }, [customerToken]);

    useEffect(() => {
        if (workerToken) {
            jobRequestForWorker();
        }
    }, [workerToken]);

    // ================== CONTEXT VALUE ==================
    const contextValue = {
        URL_LINK,

        // Tokens
        workerToken,
        setWorkerToken,
        customerToken,
        setCustomerToken,

        // Bookings
        bookingWorkerList,
        pastBookingWorkerList,
        jobRequest,

        // worker signup details
        workerSignUp,
        setWorkerSignUp,

        //
        bookingWorkersList,
        pastBookingWorkersList,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
