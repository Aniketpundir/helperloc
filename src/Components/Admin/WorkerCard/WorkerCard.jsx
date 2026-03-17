import { useState } from "react";
import "./WorkerCard.css";

function WorkerCard({ worker }) {
    const [status, setStatus] = useState(worker.status);

    const generateReferral = () => {
        alert("Referral Generated!");
    };

    const badgeClass = `admin-status-badge admin-status-${status.toLowerCase()}`;

    return (
        <div className="admin-card">

            {/* Header — avatar + name + status */}
            <div className="admin-card-header">
                <img src={worker.image} alt="worker" className="admin-worker-img" />
                <div className="admin-card-header-info">
                    <div className="admin-details">
                        <h3>{worker.name}</h3>
                    </div>
                    <span className={badgeClass}>{status}</span>
                </div>
            </div>

            {/* Info rows */}
            <div className="admin-details">
                <p>
                    <strong>Category</strong>
                    <span>{worker.mobile}</span>
                </p>
                <p>
                    <strong>Mobile</strong>
                    <span>{worker.mobile}</span>
                </p>
                <p>
                    <strong>Email</strong>
                    <span>{worker.email}</span>
                </p>
                <p className="admin-code-row">
                    <strong>Ref. Code</strong>
                    <span>{worker.referralCode}</span>
                </p>
                <p>
                    <strong>Ref. Name</strong>
                    <span>{worker.referralName}</span>
                </p>
                <p>
                    <strong>Ref. Count</strong>
                    <span>{worker.referralName}</span>
                </p>
            </div>

            {/* Actions */}
            <div className="admin-actions">
                <div className="ref">
                    <button onClick={generateReferral}>Generate Referral</button>
                    <button onClick={generateReferral}>Disable Referral</button>
                </div>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Pending</option>
                    <option>Verify</option>
                    <option>Rejected</option>
                </select>
            </div>

        </div >
    );
}

export default WorkerCard;