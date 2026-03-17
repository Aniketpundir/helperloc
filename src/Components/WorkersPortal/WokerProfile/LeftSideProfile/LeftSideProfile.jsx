import React from 'react';
import "./LeftSideProfile.css";
import { MdOutlineVerified } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";


const LeftSideProfile = () => {

    const { workerProfile } = useSelector((s) => s.auth);

    return (
        <div className='left-side-profile-container'>
            <div className='worker-left-side-details'>
                <div className='name-and-image-container'>
                    <div className='worker-profile-image'>
                        <img
                            src={
                                workerProfile?.workerId?.avatar?.image || "https://via.placeholder.com/150"
                            }
                            alt='Worker Profile Image'
                        />
                    </div>
                    <div className='worker-name'>
                        <p>{workerProfile?.workCategory || "."}</p>
                        <p>Experience: {workerProfile?.experience || "."} years</p>
                        <p>Rate: {workerProfile?.rate || "."}/Day</p>
                        <p>Timing: {workerProfile?.workingHr || "."}</p>
                        <span><MdOutlineVerified /> verified</span>
                    </div>
                    <button><CiEdit /> Profile</button>
                </div>
                <div className='worker-about'>
                    <h3>About</h3>
                    <p>{workerProfile?.bio || "."}</p>
                </div>
            </div>
        </div>
    );
}

export default LeftSideProfile;
