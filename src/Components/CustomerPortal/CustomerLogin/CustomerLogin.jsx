import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerLogin.css";
import customerLoginImg from "../../../assets/customer_login_img.png";
import { BiShow, BiHide } from "react-icons/bi";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../../../redux/slices/authSlice";

const CustomerLogin = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error } = useSelector((state) => state.auth || {});

    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: "",
        role: "customer",
    });

    useEffect(() => {
        if (error) toast.error(error);
    }, [error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await dispatch(loginCustomer(data));

        if (res.meta.requestStatus === "fulfilled") {
            Navigate("/");
            window.location.reload();
        }
    };

    return (
        <div className="CustomerLogin">
            <div className="CustomerLogin-content">

                <div className="CustomerLogin-text-form">
                    <h1>Customer Login</h1>
                    <h5>Welcome back! Please login to your account</h5>

                    <form onSubmit={handleSubmit}>
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
                            {loading ? "Logging..." : "Login as Customer"}
                        </button>

                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => Navigate("/customer-signup")}>
                                Sign up here
                            </span>
                        </p>
                    </form>
                </div>

                <div className="CustomerLogin-img">
                    <img src={customerLoginImg} alt="Customer Login" />
                </div>

            </div>
        </div>
    );
};

export default CustomerLogin;