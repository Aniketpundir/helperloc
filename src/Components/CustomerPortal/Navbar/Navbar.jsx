import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.jpg";
import profileImg from "../../../assets/profile_img.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { StoreContext } from "../../../Context/StoreContext";

import {
    fetchCustomerProfile,
    fetchWorkerProfile,
} from "../../../redux/slices/authSlice";

import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

    const { workerToken, setCustomerToken, customerToken, setWorkerToken } = useContext(StoreContext);

    const [showMenu, setShowMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [hideWorkerPanel, setHideWorkerPanel] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { customerProfile, workerProfile } = useSelector((s) => s.auth);

    useEffect(() => {

        if (customerToken) dispatch(fetchCustomerProfile(customerToken));
        if (workerToken) dispatch(fetchWorkerProfile(workerToken));

    }, [customerToken, workerToken]);

    useEffect(() => {

        const path = location.pathname;

        if (path === "/") setActiveItem("Home");
        else if (path === "/howItWorks") setActiveItem("How it works");
        else if (path === "/about") setActiveItem("About");
        else if (path === "/contact") setActiveItem("Contact");
        else if (path === "/worker-profile") setActiveItem("Profile");
        else if (path === "/worker-profile/Dashboard") setActiveItem("Dashboard");
        else if (path === "/worker-profile/Job-Request") setActiveItem("Job Request");
        else if (path === "/worker-profile/Rating&Reviews") setActiveItem("Rating & Reviews");
        else setActiveItem("");

    }, [location]);

    useEffect(() => {

        const path = location.pathname;

        if (
            path === "/worker-profile" ||
            path === "/worker-profile/Dashboard" ||
            path === "/worker-profile/Job-Request" ||
            path === "/worker-profile/Rating&Reviews" ||
            path === "/worker-profile/add-workers-details" ||
            path === "/worker-profile/submission-success"
        ) {
            setHideWorkerPanel(true);
        } else {
            setHideWorkerPanel(false);
        }

    }, [location]);

    useEffect(() => {
        if (workerToken) navigate("/worker-profile");
    }, [workerToken]);

    const handleClick = (name) => {
        setActiveItem(name);
        setShowMenu(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleProfileMenu = () => setShowProfileMenu((prev) => !prev);
    const toggleHamburger = () => setShowMenu((prev) => !prev);

    return (
        <div className="navbar-container">

            <div className="hamburger-icon" onClick={toggleHamburger}>
                {showMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            <div className={`side-drawer ${showMenu ? "show" : ""}`}>

                <div className="drawer-logo">
                    <img src={logo} alt="logo" />
                </div>

                {!hideWorkerPanel ? (

                    <ul>

                        <Link to="/">
                            <li onClick={() => handleClick("Home")}>
                                Home
                            </li>
                        </Link>

                        <Link to="/howItWorks">
                            <li onClick={() => handleClick("How it works")}>
                                How it works
                            </li>
                        </Link>

                        <Link to="/about">
                            <li onClick={() => handleClick("About")}>
                                About
                            </li>
                        </Link>

                        <Link to="/contact">
                            <li onClick={() => handleClick("Contact")}>
                                Contact
                            </li>
                        </Link>

                    </ul>

                ) : (

                    <ul>
                        <Link to="/worker-profile">
                            <li onClick={() => handleClick("Profile")}>
                                Profile
                            </li>
                        </Link>

                        <Link to="/worker-profile/Dashboard">
                            <li onClick={() => handleClick("Dashboard")}>
                                Dashboard
                            </li>
                        </Link>

                        <Link to="/worker-profile/Job-Request">
                            <li onClick={() => handleClick("Job Request")}>
                                Job Request
                            </li>
                        </Link>

                        <Link to="/worker-profile/Rating&Reviews">
                            <li onClick={() => handleClick("Rating & Reviews")}>
                                Rating & Reviews
                            </li>
                        </Link>

                    </ul>

                )}

            </div>

            {showMenu && <div className="overlay" onClick={() => setShowMenu(false)}></div>}

            <div className="navbar-left">
                <img src={logo} alt="Logo" />
                <h3>E - Labour</h3>
            </div>

            <div className="navbar-middle">

                {!hideWorkerPanel ? (

                    <ul>

                        <Link to="/">
                            <li className={`button ${activeItem === "Home" ? "clicked" : ""}`} onClick={() => handleClick("Home")}>
                                Home
                            </li>
                        </Link>

                        <Link to="/howItWorks">
                            <li className={`button ${activeItem === "How it works" ? "clicked" : ""}`} onClick={() => handleClick("How it works")}>
                                How it works
                            </li>
                        </Link>

                        <Link to="/about">
                            <li className={`button ${activeItem === "About" ? "clicked" : ""}`} onClick={() => handleClick("About")}>
                                About</li>
                        </Link>

                        <Link to="/contact">
                            <li className={`button ${activeItem === "Contact" ? "clicked" : ""}`} onClick={() => handleClick("Contact")}>
                                Contact
                            </li>
                        </Link>

                    </ul>

                ) : (

                    <ul>

                        <Link to="/worker-profile">
                            <li className={`button ${activeItem === "Profile" ? "clicked" : ""}`} onClick={() => handleClick("Profile")}>
                                Profile
                            </li>
                        </Link>

                        <Link to="/worker-profile/Dashboard">
                            <li className={`button ${activeItem === "Dashboard" ? "clicked" : ""}`} onClick={() => handleClick("Dashboard")}
                            >Dashboard
                            </li>
                        </Link>

                        <Link to="/worker-profile/Job-Request">
                            <li className={`button ${activeItem === "Job Request" ? "clicked" : ""}`} onClick={() => handleClick("Job Request")}>
                                Job Request
                            </li>
                        </Link>

                        <Link to="/worker-profile/Rating&Reviews">
                            <li className={`button ${activeItem === "Rating & Reviews" ? "clicked" : ""}`} onClick={() => handleClick("Rating & Reviews")}>
                                Rating & Reviews
                            </li>
                        </Link>

                    </ul>

                )}

            </div>

            {/* ================= RIGHT ================= */}

            <div className="navbar-right">

                {!workerToken && !customerToken ? (

                    <button onClick={() => navigate("/landing-page")}>Sign Up</button>

                ) : customerToken ? (

                    <div className="profile-section">

                        <img
                            src={customerProfile?.customer?.avatar?.image || profileImg}
                            alt="Profile"
                            onClick={toggleProfileMenu}
                        />

                        {showProfileMenu && (
                            <div className="profile-menu">
                                <ul>

                                    <Link to="/Customer-Profile">
                                        <li>
                                            Your Profile
                                        </li>
                                    </Link>

                                    <Link to="/Current-Booking">
                                        <li>
                                            Current Booking & Details
                                        </li>
                                    </Link>

                                    <Link to="/Past-Booking">
                                        <li>
                                            Past Jobs / History
                                        </li>
                                    </Link>

                                    <Link to="/Support-Section">
                                        <li>
                                            Support & Help Section
                                        </li>
                                    </Link>

                                    <li onClick={() => {
                                        localStorage.removeItem("customerToken");
                                        setCustomerToken("");
                                        navigate("/");
                                    }}>Logout</li>

                                </ul>
                            </div>
                        )}

                    </div>

                ) : workerToken ? (

                    <div className="worker-image-logout">

                        <button onClick={() => {
                            localStorage.removeItem("workerToken");
                            setWorkerToken("");
                            navigate("/");
                        }}>Logout</button>

                        <div className="profile-section">
                            <img src={workerProfile?.workerId?.avatar?.image || profileImg} alt="Profile" />
                        </div>

                    </div>

                ) : null}

            </div>

        </div>
    );
};

export default Navbar;