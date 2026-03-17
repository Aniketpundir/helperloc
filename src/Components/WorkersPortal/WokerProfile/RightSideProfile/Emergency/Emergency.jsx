import React from 'react'
import { StoreContext } from '../../../../../Context/StoreContext'
import { useSelector } from "react-redux";

const Emergency = () => {
    const { workerProfile } = useSelector((s) => s.auth);

    return (
        <div className="info-card">
            <h2>Emergency Information</h2>
            <div className="info-grid">
                <div className="info-item">
                    <div className="info-label">Emergency Contact Number</div>
                    <div className="info-value">{workerProfile?.emergencyInfo?.contact || "—"}
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-label">Emergency Person Name</div>
                    <div className="info-value">{workerProfile?.emergencyInfo?.name || "—"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergency