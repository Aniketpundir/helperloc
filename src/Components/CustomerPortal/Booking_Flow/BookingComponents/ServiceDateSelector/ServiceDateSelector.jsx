import React from "react";
import "./ServiceDateSelector.css";

const ServiceDateSelector = ({ serviceDate, setServiceDate, workerDetails }) => {
    const today = new Date();
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) => {
        return date.toISOString().split("T")[0];
    };

    const bookedDates =
        workerDetails?.scheduledDate?.map((d) =>
            new Date(d).toLocaleDateString("en-CA")
        ) || [];

    const isBooked = (date) => bookedDates.includes(formatDate(date));

    return (
        <>
            <h2>When would you like your service?</h2>

            <div className="button-group">
                {[today, tomorrow, dayAfterTomorrow].map((d, i) => (
                    <button
                        key={i}
                        className={`date-btn ${serviceDate === formatDate(d) ? "selected" : ""
                            } ${isBooked(d) ? "booked" : ""}`}
                        onClick={() => setServiceDate(formatDate(d))}
                        disabled={isBooked(d)}
                    >
                        {i === 0 ? "Today" : i === 1 ? "Tomorrow" : "Day After"} <br />
                        {formatDate(d)}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ServiceDateSelector;