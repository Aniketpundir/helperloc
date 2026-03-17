import React from "react";
import "./WorkerDetailHeader.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import profileImg from "../../../../../assets/profile_img.png";

const WorkerDetailHeader = () => {

    const { workerDetails, loading } = useSelector((s) => s.workers);

    const { title, id } = useParams();
    const navigate = useNavigate();

    if (loading && !workerDetails)
        return <p style={{ textAlign: "center" }}>Loading...</p>;

    if (!workerDetails) return null;

    const handleClick = () => {
        navigate(`/Service-Categories/Listed-Workers/${title}/Worker-Details/${id}/Booking-Section`);
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="worker-card">

            <img
                src={workerDetails?.worker?.workerId?.avatar?.image || profileImg}
                alt="Worker"
                className="worker-image"
            />

            <div className="worker-info">

                <h3 className="worker-name">
                    {workerDetails?.worker?.workerId?.name}
                </h3>

                <p className="worker-details">
                    {workerDetails?.worker?.workCategory} · {workerDetails?.worker?.experience} years
                </p>

                <p className="worker-details" style={{ fontWeight: 600 }}>
                    ₹{workerDetails?.worker?.rate}/Day
                </p>

                <span>₹{workerDetails?.worker?.hrRate}/H</span>

                <div className="verified">
                    <FaCheckCircle className="verified-icon" />
                    <span>Verified</span>
                </div>

            </div>

            <button onClick={() => { handleClick(); handleScrollTop(); }} className="book-button">
                Book Worker
            </button>

        </div>
    );
};

export default WorkerDetailHeader;  