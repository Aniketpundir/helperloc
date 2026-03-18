import React, { useEffect } from "react";
import "./WorkersDetails.css";
import WorkerDetailHeader from "../WorkerDetailHeader/WorkerDetailHeader";
import WorkerAbout from "../WorkerAbout/WorkerAbout";
import WorkerSkillls from "../WorkerSkillls/WorkerSkillls";
import WorkerReview from "../WorkerReview/WorkerReview";
import WorkerAvaiable from "../WorkerAvaiable/WorkerAvaiable";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorker } from "../../../../../redux/slices/workersSlice";

import { useNavigate } from "react-router-dom";

const WorkersDetails = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const token = localStorage.getItem("customerToken");

    useEffect(() => {
        if (!token) {
            Navigate("/customer-login");
        } else {
            Navigate("/Service-Categories/Listed-Workers/:title")
        }
    }, [token, Navigate]);

    useEffect(() => {
        if (id && token) {
            dispatch(fetchSingleWorker({ id, token }));
        }
    }, [id, token, dispatch]);

    return (
        <>
            <WorkerDetailHeader />

            <div className="worker-detail">
                <div className="worker-detail-left">
                    <WorkerAbout />
                    <WorkerSkillls />
                    <WorkerReview />
                </div>

                <div className="worker-detail-right">
                    <WorkerAvaiable />
                </div>
            </div>
        </>
    );
};

export default WorkersDetails;