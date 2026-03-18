import React, { useState, useEffect } from "react";
import "./CurrentBooking.css";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingBookings } from "../../../../redux/slices/bookingsSlice";
import { useNavigate } from "react-router-dom";

const URL_LINK = "https://e-labour-backend.onrender.com/";

const CurrentBooking = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const customerToken = localStorage.getItem("customerToken");

    useEffect(() => {
        if (!customerToken) {
            Navigate("/customer-login");
        } else {
            Navigate("/Customer-Profile")
        }
    }, [customerToken, Navigate]);

    const { bookingWorkerList } = useSelector((s) => s.bookings);

    const [selectedWorker, setSelectedWorker] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openCancelFor, setOpenCancelFor] = useState(null);
    const [openRatingFor, setOpenRatingFor] = useState(null);

    const workers = bookingWorkerList || [];
    const isMobile = windowWidth <= 650;

    useEffect(() => {
        if (!customerToken) return;
        dispatch(fetchUpcomingBookings(customerToken));
    }, [customerToken]);

    useEffect(() => {
        if (workers.length > 0 && !selectedWorker) setSelectedWorker(workers[0]);
    }, [workers, selectedWorker]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const CancelForm = ({ bookingId, onClose }) => {
        const [reason, setReason] = useState("");
        const [otherReason, setOtherReason] = useState("");

        const handleConfirm = async () => {
            const cancelReason = reason === "Other" ? otherReason : reason;
            if (!cancelReason) return alert("Please select or enter a reason!");

            try {
                const res = await axios.patch(
                    `${URL_LINK}api/bookings/${bookingId}/cancel`,
                    { reason: cancelReason },
                    { headers: { token: customerToken } }
                );

                alert("Booking cancelled successfully!");
                onClose();
                dispatch(fetchUpcomingBookings(customerToken));

            } catch (error) {
                console.error(error);
                alert("Error cancelling booking.");
            }
        };

        return (
            <div className="cancel-section">
                <p><strong>Why are you cancelling?</strong></p>

                {["Changed my mind", "Found another worker", "Too expensive", "Other"].map((item) => (
                    <label key={item}>
                        <input
                            type="radio"
                            value={item}
                            checked={reason === item}
                            onChange={(e) => setReason(e.target.value)}
                        />{" "}
                        {item}
                    </label>
                ))}

                {reason === "Other" && (
                    <textarea
                        placeholder="Specify..."
                        value={otherReason}
                        onChange={(e) => setOtherReason(e.target.value)}
                    />
                )}

                <div className="cancel-actions">
                    <button onClick={handleConfirm} className="confirm-btn">
                        Confirm
                    </button>
                    <button onClick={onClose} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        );
    };

    const RatingForm = ({ workerId, bookingId, onClose }) => {
        const [rating, setRating] = useState(0);
        const [feedback, setFeedback] = useState("");

        const handleSubmit = async () => {
            if (rating === 0) return alert("Please select a rating!");

            try {
                const res = await axios.post(
                    `${URL_LINK}api/reviews/${bookingId}`,
                    { bookingId: workerId, rating, review: feedback },
                    { headers: { token: customerToken } }
                );

                console.log("✅ Rating Response:", res.data);

                alert("Thanks for your feedback!");
                onClose();

            } catch (error) {
                console.error(error);
                alert("Error submitting rating.");
            }
        };

        return (
            <div className="rating-section">
                <p><strong>Rate your experience</strong></p>

                <div className="rating-circles">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className={`circle ${rating === num ? "selected" : ""}`}
                            onClick={() => setRating(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>

                <textarea
                    placeholder="Write feedback..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />

                <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        );
    };

    const approvalHandle = async (bookingId) => {

        try {
            const res = await axios.patch(
                `${URL_LINK}api/bookings/${bookingId}/update`,
                {},
                { headers: { token: customerToken }, params: { q: "completed" } }
            );

            console.log("✅ Complete Response:", res.data);

        } catch (error) {
            alert(error);
        }
    };

    const BookingDetails = ({ worker }) => (
        <div className="details-body">
            <p><strong>Booking Code</strong>: {worker.bookingCode}</p>
            <p><strong>Location</strong>: {worker.location.street}, {worker.location.city}</p>
            <p><strong>Date & Time</strong>: {new Date(worker.scheduledDate).toLocaleString()}</p>
            <p><strong>Amount</strong>: {worker.payment.amount}/Day</p>
            <p><strong>Payment</strong>: ({worker.payment.method}, {worker.payment.status})</p>
            <p><strong>Status</strong>: {worker.status}</p>

            <div className="button-container">
                {openRatingFor === worker._id ? (
                    <RatingForm
                        workerId={worker._id}
                        bookingId={worker.workerId._id}
                        onClose={() => setOpenRatingFor(null)}
                    />
                ) : (
                    <button
                        onClick={() => { approvalHandle(worker._id); setOpenRatingFor(worker._id); }}
                        className="cancel-btn1"
                    >
                        Work Complete
                    </button>
                )}

                {openCancelFor === worker._id ? (
                    <CancelForm bookingId={worker._id} onClose={() => setOpenCancelFor(null)} />
                ) : (
                    <button
                        onClick={() => setOpenCancelFor(worker._id)}
                        className="cancel-btn"
                    >
                        Cancel Booking
                    </button>
                )}
            </div>
        </div>
    );

    if (workers.length === 0) return <p>No bookings available.</p>;

    return (
        <div className="container">
            <div className="left-panel">
                <h2>My Bookings</h2>
                <p className="subtitle">View and manage your upcoming service bookings.</p>

                {workers.map((worker) => (
                    <div key={worker._id}>
                        <div
                            className={`card ${selectedWorker?._id === worker._id ? "active" : ""}`}
                            onClick={() => setSelectedWorker(worker)}
                        >
                            <div className="card-left">
                                <img
                                    src={worker.workerId?.avatar?.image}
                                    alt={worker.workerId?.name}
                                    className="avatar"
                                />
                                <div className="card-info">
                                    <strong>{worker.workerId?.name}</strong>
                                    <p>{worker.serviceType}</p>
                                    <small>Scheduled: {new Date(worker.scheduledDate).toLocaleString()}</small>
                                </div>
                            </div>
                        </div>

                        {isMobile && selectedWorker?._id === worker._id && (
                            <BookingDetails worker={worker} />
                        )}
                    </div>
                ))}
            </div>

            {!isMobile && selectedWorker && (
                <div className="right-panel">
                    <div className="profile-header">
                        <img
                            src={selectedWorker.workerId?.avatar?.image}
                            alt={selectedWorker.workerId?.name}
                            className="profile-avatar"
                        />
                        <div>
                            <h2>{selectedWorker.workerId?.name}</h2>
                            <p>{selectedWorker.serviceType}</p>
                            <p className="experience">Phone: {selectedWorker.workerId?.phone}</p>
                        </div>
                        <button
                            className="call-btn"
                            onClick={() => (window.location.href = `tel:${selectedWorker.workerId?.phone}`)}
                        >
                            <FaPhone /> Call
                        </button>
                    </div>
                    <BookingDetails worker={selectedWorker} />
                </div>
            )}
        </div>
    );
};

export default CurrentBooking;