import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WorkersSignup.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerWorker } from "../../../redux/slices/authSlice";

import ImageCropper from "../../ImageCrop/ImageCropper";
import { getCroppedImg } from "../../ImageCrop/cropImage";

import { BiShow, BiHide } from "react-icons/bi";

const WorkersSignup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((s) => s.auth);

    const [checkbox, setCheckbox] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        password: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("workerToken")

        if (!token) {
            navigate("/workers-signup")
        } else {
            navigate("/worker-profile")
        }
    }, [])

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showCropper, setShowCropper] = useState(false);

    useEffect(() => {
        if (error) toast.error(error);
    }, [error]);

    const handleChange = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setImage(URL.createObjectURL(selected));
            setShowCropper(true);
        }
    };

    const handleCropDone = async (area) => {
        const cropped = await getCroppedImg(image, area);
        setCroppedImage(cropped);
        setShowCropper(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!checkbox) return toast.error("Accept Terms");

        const formData = new FormData();
        formData.append("name", data.fullName);
        formData.append("email", data.email);
        formData.append("phone", data.mobileNumber);
        formData.append("password", data.password);
        formData.append("role", "worker");

        if (file) formData.append("image", file);

        const res = await dispatch(registerWorker(formData));

        if (res.meta.requestStatus === "fulfilled")
            navigate("/worker-profile/add-workers-details");
    };

    return (
        <div className="WorkersSignup">
            <div className="WorkersSignup-form">

                <h2>Create Worker Account</h2>

                <p className="login-link">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/workers-login")}>Login</span>
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="profile-image">
                        {croppedImage ? (
                            <img src={croppedImage} alt="" />
                        ) : (
                            <div className="dummy-img" />
                        )}
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>

                    <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
                    <input name="email" placeholder="Email" onChange={handleChange} required />
                    <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />

                    <div className="input-field1">
                        <input
                            name="password"
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            onChange={handleChange}
                            required
                            className="password-input"
                        />
                        <p onClick={() => setShowPassword(!showPassword)} className="hide-show">
                            {showPassword ? <BiShow /> : <BiHide />}
                        </p>
                    </div>

                    <label>
                        <input type="checkbox" onChange={() => setCheckbox(!checkbox)} />
                        Accept Terms
                    </label>

                    <button disabled={loading}>
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                </form>
            </div>

            {showCropper && <ImageCropper image={image} onCropDone={handleCropDone} />}
        </div>
    );
};

export default WorkersSignup;