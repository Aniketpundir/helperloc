import React, { useState, useEffect } from 'react'
import "./JobDashboard.css";
import { useNavigate } from 'react-router-dom';

const jobsData = [
    {
        job: 'Dog Walking',
        time: '10:00 AM - 11:00 AM',
        customer: 'Emily Harper',
        status: 'Confirmed',
    },
    {
        job: 'House Cleaning',
        time: '01:00 PM - 03:00 PM',
        customer: 'Liam Bennett',
        status: 'Pending',
    },
    {
        job: 'Grocery Shopping',
        time: '04:00 PM - 05:00 PM',
        customer: 'Olivia Turner',
        status: 'Cancelled',
    },
];


const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case 'confirmed':
            return 'status-confirmed';
        case 'pending':
            return 'status-pending';
        case 'cancelled':
            return 'status-cancelled';
        default:
            return '';
    }
};

const JobDashboard = () => {
    const [filter, setFilter] = useState("All");
    const Navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("workerToken")

        if (!token) {
            Navigate("/workers-login")
        } else {
            Navigate("/worker-profile/Dashboard")
        }
    }, [])


    return (
        <div className="job-list-container">
            <div className="job-list-header">
                <div className="header-item job-col">JOB</div>
                <div className="header-item customer-col">CUSTOMER</div>
                <div className="header-item status-col">STATUS</div>
            </div>
            <div className="filter-row">
                <label>Filter: </label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
            {jobsData.map((jobItem, index) => (
                <div className="job-list-row" key={index}>
                    <div className="row-item job-col">
                        <div className="job-title">{jobItem.job}</div>
                        <div className="job-time">{jobItem.time}</div>
                    </div>
                    <div className="row-item customer-col">{jobItem.customer}</div>
                    <div className="row-item status-col">
                        <span className={`status-pill ${getStatusClass(jobItem.status)}`}>
                            {jobItem.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobDashboard