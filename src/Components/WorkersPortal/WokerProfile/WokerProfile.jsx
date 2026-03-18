import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./WorkerProfile.css";
import LeftSideProfile from './LeftSideProfile/LeftSideProfile'
import RightSideProfile from './RightSideProfile/RightSideProfile';

const WokerProfile = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("workerToken")

        if (!token) {
            Navigate("/workers-login")
        } else {
            Navigate("/worker-profile")
        }
    }, [])

    return (
        <div className='worker-profile'>
            <LeftSideProfile />
            <RightSideProfile />
        </div>
    )
}

export default WokerProfile