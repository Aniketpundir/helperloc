import React from "react";
import "./WorkerAbout.css";
import { useSelector } from "react-redux";

const WorkerAbout = () => {

    const { workerDetails, loading } = useSelector((s) => s.workers);

    /* ================= STATES ================= */

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

    if (!workerDetails) return null;

    /* ================= UI ================= */

    return (
        <div data-aos="fade-up" className="about-card">
            <h3 data-aos="fade-up" className="about-title">About Me</h3>

            <p data-aos="fade-up" className="about-text">
                {workerDetails?.worker?.bio || "No description available"}
            </p>
        </div>
    );
};

export default WorkerAbout;