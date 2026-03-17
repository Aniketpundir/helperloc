import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../../../assets/101.jpg";
import "./AddWorkersDetails.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchWorkerPrimaryInfo } from "../../../redux/slices/workersProfileSlice";
import { fetchLocation } from "../../../redux/slices/locationSlice";

const AddWorkersDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { workerToken } = useSelector((s) => s.auth);
    const { district, state, pinCode } = useSelector((s) => s.location);
    const { workerSignUp } = useSelector((s) => s.workerProfile);

    useEffect(() => {
        if (workerToken) dispatch(fetchWorkerPrimaryInfo(workerToken));
        dispatch(fetchLocation());
    }, [workerToken, dispatch]);

    const [Data, setData] = useState({
        fullName: "",
        fName: "",
        dob: "",
        gender: "",
        profilePhoto: null,
        mobile: "",
        email: "",
        bio: "",

        state: "",
        city: "",
        street: "",
        zipCode: "",

        workCategory: "",
        skills: [],
        skillInput: "",
        experience: "",

        workingHr: "",
        weekends: false,
        rate: "",
        hrRate: "",

        emergencyContact: "",
        reference: "",
    });

    useEffect(() => {

        if (!workerSignUp?.worker) return;

        setData((prev) => ({
            ...prev,
            fullName: workerSignUp.worker.name || "",
            mobile: workerSignUp.worker.phone || "",
            email: workerSignUp.worker.email || "",
            profilePhoto: workerSignUp.worker.avatar?.image || null,
        }));

    }, [workerSignUp]);

    useEffect(() => {

        setData((prev) => ({
            ...prev,
            state: state || "",
            city: district || "",
            zipCode: pinCode || "",
        }));

    }, [state, district, pinCode]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const workerSkill = [
        "Plumbing", "Electrical", "Painting", "Carpentry",
        "Masonry", "Welding", "Mechanic", "Gardening"
    ];

    const handleAddSkill = () => {
        if (Data.skillInput && !Data.skills.includes(Data.skillInput)) {
            setData((prev) => ({
                ...prev,
                skills: [...prev.skills, Data.skillInput],
                skillInput: "",
            }));
        }
    };

    const removeSkill = (skill) => {
        setData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skill),
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "https://e-labour-backend.onrender.com/api/workers/worker/info",
                Data,
                { headers: { token: workerToken } }
            );

            console.log("✅ Submit:", res.data);

            if (res.data.success) {
                alert("Worker Details added successfully");
                navigate("/worker-profile/submission-success");
            }

        } catch (error) {
            console.error("❌ Submit Error:", error);
        }
    };

    return (
        <div className="profile-container">

            <h2>Worker Full Profile</h2>
            <p className="subtitle">Please fill in the details below to verify your profile.</p>

            <form onSubmit={handleSubmit}>

                <section className="profile-section">

                    <h3>1. Personal Information</h3>

                    <div className="form-grid">

                        <div className="worker-profile-photo">
                            <label>Profile Photo *</label>
                            <img src={Data.profilePhoto || image} alt="Profile" />
                        </div>

                        <div className="form-group">
                            <label>Full Name *</label>
                            <input value={Data.fullName} readOnly />
                        </div>

                        <div className="form-group">
                            <label>Father’s Name *</label>
                            <input name="fName" value={Data.fName} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Date of Birth *</label>
                            <input type="date" name="dob" value={Data.dob} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Gender *</label>
                            <select name="gender" value={Data.gender} onChange={handleChange} required>
                                <option value="">Select</option>
                                <option>male</option>
                                <option>female</option>
                                <option>other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Mobile *</label>
                            <input value={Data.mobile} readOnly />
                        </div>

                        <div className="form-group">
                            <label>Email *</label>
                            <input value={Data.email} readOnly />
                        </div>

                        <div className="form-group">
                            <label>Bio *</label>
                            <textarea name="bio" value={Data.bio} onChange={handleChange} />
                        </div>

                    </div>

                </section>

                <section className="profile-section">

                    <h3>2. Full Address</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>State *</label>
                            <input value={Data.state} readOnly />
                        </div>

                        <div className="form-group">
                            <label>City *</label>
                            <input value={Data.city} readOnly />
                        </div>

                        <div className="form-group">
                            <label>Locality *</label>
                            <input name="street" value={Data.street} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Pin Code *</label>
                            <input value={Data.zipCode} readOnly />
                        </div>

                    </div>

                </section>

                <section className="profile-section">

                    <h3>3. Professional Details</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Work Category *</label>
                            <select name="workCategory" value={Data.workCategory} onChange={handleChange}>
                                <option value="">Select</option>
                                <option>Chowk Laborers</option>
                                <option>Plumber</option>
                                <option>Electrician</option>
                                <option>Painter</option>
                                <option>Carpenter</option>
                                <option>Gardening</option>
                            </select>
                        </div>

                        <div className="form-group selected-skills">
                            <label>Skills *</label>

                            <div className="skills-list">
                                {Data.skills.map((skill, i) => (
                                    <span key={i} className="worker-skill-tag">
                                        {skill}
                                        <button type="button" onClick={() => removeSkill(skill)}>×</button>
                                    </span>
                                ))}
                            </div>

                            <select name="skillInput" value={Data.skillInput} onChange={handleChange}>
                                <option value="">-- Select Skill --</option>
                                {workerSkill.map((s, i) => <option key={i}>{s}</option>)}
                            </select>

                            <button type="button" className="add-skill-btn" onClick={handleAddSkill}>
                                Add Skill
                            </button>
                        </div>

                        <div className="form-group">
                            <label>Experience *</label>
                            <input name="experience" value={Data.experience} onChange={handleChange} />
                        </div>

                    </div>

                </section>

                <section className="profile-section">

                    <h3>4. Availability & Work Preference</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Working Hours *</label>
                            <input name="workingHr" value={Data.workingHr} onChange={handleChange} />
                        </div>

                        <div className="form-group available-checkbox">
                            <label>Available on weekends *</label>
                            <input type="checkbox" name="weekends" checked={Data.weekends} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Expected Rate *</label>
                            <input name="rate" value={Data.rate} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Hourly Charges *</label>
                            <input name="hrRate" value={Data.hrRate} onChange={handleChange} />
                        </div>

                    </div>

                </section>

                <section className="profile-section">

                    <h3>5. Emergency & References</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Emergency Contact</label>
                            <input name="emergencyContact" value={Data.emergencyContact} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Reference Name</label>
                            <input name="reference" value={Data.reference} onChange={handleChange} />
                        </div>

                    </div>

                </section>

                <div className="btn-group">
                    <button type="submit" className="btn submit">Submit Profile</button>
                </div>

            </form>

        </div>
    );
};

export default AddWorkersDetails;