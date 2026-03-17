import React from "react";
import "./WorkerProfileCard.css";

const WorkerProfileCard = ({ workerDetails }) => {
    return (
        <div className="worker-profiles">
            <img
                src={workerDetails?.worker?.workerId?.avatar?.image}
                alt="Worker"
                className="worker-avatar"
            />
            <div className="worker-info">
                <h3>{workerDetails?.worker?.workerId?.name}</h3>
                <p className="worker-job">{workerDetails?.worker?.workCategory}</p>
                <p className="worker-id">
                    Worker ID: {workerDetails?.worker?.workerId?._id}
                </p>
            </div>
        </div>
    );
};

export default WorkerProfileCard;