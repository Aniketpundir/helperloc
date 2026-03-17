import React, { useState } from "react";
import "./WorkerAvaiable.css";
import { useSelector } from "react-redux";

const WorkerAvaiable = () => {

    /* ================= REDUX DATA ================= */

    const { workerDetails } = useSelector((s) => s.workers);

    const [bookingDate, setBookingDate] = useState("");

    /* ================= DATE LOGIC ================= */

    const today = new Date();
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) => {
        const d = String(date.getDate()).padStart(2, "0");
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const y = date.getFullYear();
        return `${y}-${m}-${d}`;
    };

    /* ================= BOOKED DATES ================= */

    const bookedDates =
        workerDetails?.scheduledDate?.map((d) =>
            new Date(d).toLocaleDateString("en-CA")
        ) || [];

    const isBooked = (date) => bookedDates.includes(formatDate(date));

    /* ================= SAFE ================= */

    if (!workerDetails) return null;

    /* ================= UI ================= */

    return (
        <div data-aos="fade-up" className="Availablity">

            <div data-aos="fade-up" className="Availablity-containt">

                <h3>Availability</h3>
                <hr />

                <ul>

                    <li
                        onClick={() => !isBooked(today) && setBookingDate(formatDate(today))}
                        className={`statuss ${isBooked(today) ? "unavailablity" : "availablity"} ${bookingDate === formatDate(today) ? "selected" : ""}`}
                    >
                        Today: {formatDate(today)}
                    </li>

                    <hr />

                    <li
                        onClick={() =>
                            !isBooked(tomorrow) && setBookingDate(formatDate(tomorrow))
                        }
                        className={`statuss ${isBooked(tomorrow) ? "unavailablity" : "availablity"} ${bookingDate === formatDate(tomorrow) ? "selected" : ""}`}
                    >
                        Tomorrow: {formatDate(tomorrow)}
                    </li>

                    <hr />

                    <li
                        onClick={() =>
                            !isBooked(dayAfterTomorrow) &&
                            setBookingDate(formatDate(dayAfterTomorrow))
                        }
                        className={`statuss ${isBooked(dayAfterTomorrow) ? "unavailablity" : "availablity"} ${bookingDate === formatDate(dayAfterTomorrow) ? "selected" : ""}`}
                    >
                        Day After: {formatDate(dayAfterTomorrow)}
                    </li>

                    <hr />

                </ul>
            </div>
        </div>
    );
};

export default WorkerAvaiable;