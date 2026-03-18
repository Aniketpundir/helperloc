import React, { useEffect } from 'react'
import "./SubmissionSuccess.css"
import { useNavigate } from 'react-router-dom'

const SubmissionSuccess = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    useEffect(() => {
        const token = localStorage.getItem("workerToken")

        if (!token) {
            Navigate("/workers-login")
        } else {
            Navigate("/worker-profile/submission-success")
        }
    }, [])

    return (
        <div className="success-container">
            <div className="success-icon">✔</div>
            <h1 className="success-title">Profile Submitted Successfully!</h1>
            <p className="success-subtitle">
                Thank you for submitting your profile. Our team will review it shortly,
                and you'll receive a notification once it's approved.
            </p>
            <button onClick={() => { Navigate("/worker-profile"), handleClick(), window.location.reload() }} className="dashboard-btn">Go to Dashboard</button>
            <div className="next-steps">
                <h2>What's Next?</h2>
                <ul>
                    <li>
                        <span className="icon">🛡️</span>
                        <p>
                            <strong>Verification</strong> – We're reviewing your submitted
                            documents. This usually takes 1–2 business days.
                        </p>
                    </li>
                    <li>
                        <span className="icon">🔔</span>
                        <p>
                            <strong>Stay Updated</strong> – We'll send an email to your
                            registered address once your profile is live.
                        </p>
                    </li>
                    <li>
                        <span className="icon">🔍</span>
                        <p>
                            <strong>Explore Opportunities</strong> – In the meantime, feel
                            free to browse available jobs and prepare your applications.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubmissionSuccess