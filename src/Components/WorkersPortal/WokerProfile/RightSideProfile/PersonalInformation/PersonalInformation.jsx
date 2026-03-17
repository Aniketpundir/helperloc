import React from 'react';
import './PersonalInformation.css';
import { useSelector } from "react-redux";

const PersonalInformation = () => {

    const { workerProfile } = useSelector((s) => s.auth);

    return (
        <>
            <div className="info-card">
                <h2>Personal Information</h2>
                <div className="info-grid">
                    <div className="info-item">
                        <div className="info-label">Full Name</div>
                        <div className="info-value">{workerProfile?.workerId?.name || "—"}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Date of Birth</div>
                        <div className="info-value">{workerProfile?.dob || "—"}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Email</div>
                        <div className="info-value">{workerProfile?.workerId?.email || "—"}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Phone Number</div>
                        <div className="info-value">{workerProfile?.workerId?.phone || "—"}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Full Address</div>
                        <div className="info-value">{workerProfile?.address
                            ? `${workerProfile.address.street}, ${workerProfile.address.city}, ${workerProfile.address.state}, ${workerProfile.address.zipCode}`
                            : "—"}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInformation;