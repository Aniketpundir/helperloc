import React from 'react'
import "./WorkerSkillls.css"
import { useSelector } from "react-redux";

const WorkerSkillls = () => {

    const { workerDetails, loading } = useSelector((s) => s.workers);

    /* ================= STATES ================= */

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

    if (!workerDetails) return null;

    // Ensure it's always an array
    const skills = workerDetails?.worker?.skills || [];

    return (
        <div data-aos="fade-up" className="skills-card">
            <h3 data-aos="fade-up" className="skills-title">Skills</h3>
            <div data-aos="fade-up" className="skills-list">
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <span data-aos="fade-up" key={index} className="skill-badge">
                            {skill}
                        </span>
                    ))
                ) : (
                    <p className="no-skills">No skills available</p> // optional fallback
                )}
            </div>
        </div>
    );
}

export default WorkerSkillls