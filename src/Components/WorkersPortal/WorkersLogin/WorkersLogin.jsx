import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WorkersLogin.css";
import workersLoginImg from "../../../assets/workers_login_img.png";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginWorker } from "../../../redux/slices/authSlice";

const WorkersLogin = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.auth || {});

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("workerToken")

        if (!token) {
            Navigate("/workers-login")
        } else {
            Navigate("/worker-profile")
        }
    }, [])



    const [data, setData] = useState({
        email: "",
        password: "",
        role: "worker",
    });

    useEffect(() => {
        if (error) toast.error(error);
    }, [error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await dispatch(loginWorker(data));

        if (res.meta.requestStatus === "fulfilled") {
            Navigate("/worker-profile");
            window.location.reload();
        }
    };

    return (
        <div className="WorkerLogin">
            <div className="WorkerLogin-content">

                <div className="WorkerLogin-text-form">
                    <h1>Worker Login</h1>
                    <h5>Welcome back! Please login to your account</h5>

                    <form onSubmit={handleLogin}>
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />

                        <div className="input-field1">
                            <input
                                placeholder="Enter Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                                className="password-input"
                            />

                            <p
                                onClick={() => setShowPassword(!showPassword)}
                                className="hide-show"
                            >
                                {showPassword ? <BiShow /> : <BiHide />}
                            </p>
                        </div>

                        <button className="login-button" disabled={loading}>
                            {loading ? "Logging..." : "Login as Worker"}
                        </button>

                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => Navigate("/workers-signup")}>
                                Sign up here
                            </span>
                        </p>
                    </form>
                </div>

                <div className="WorkerLogin-img">
                    <img src={workersLoginImg} alt="Worker Login" />
                </div>
            </div>
        </div>
    );
};

export default WorkersLogin;