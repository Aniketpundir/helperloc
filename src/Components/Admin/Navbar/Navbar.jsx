import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState("New Worker");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);


    const handleClick = (name) => {
        setActiveItem(name);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className={`admin-navbar ${scrolled ? "admin-navbar--scrolled" : ""}`}>
            <div className="admin-navbar__container">

                {/* Logo */}
                <div className="admin-navbar__brand">
                    <span className="admin-navbar__brand-icon">⚙</span>
                    <span className="admin-navbar__brand-text">Admin Panel</span>
                </div>

                {/* Desktop Links */}
                <div className="admin-navbar__links">
                    <NavLink
                        to="/admin-dashboard"
                        className={`admin-navbar__link ${activeItem === "New Worker" ? "admin-navbar__link--active" : " "}`}

                        onClick={() => handleClick("New Worker")}
                    >
                        <span className="admin-navbar__link-icon">➕</span>
                        New Worker
                    </NavLink>

                    <NavLink
                        to="/admin-dashboard/verify-worker"
                        className={`admin-navbar__link ${activeItem === "Verify" ? "admin-navbar__link--active" : " "}`}

                        onClick={() => handleClick("Verify")}
                    >
                        <span className="admin-navbar__link-icon">✔</span>
                        Verify
                    </NavLink>

                    <NavLink
                        to="/admin-dashboard/rejected-worker"
                        className={`admin-navbar__link ${activeItem === "Rejected" ? "admin-navbar__link--active" : " "}`}

                        onClick={() => handleClick("Rejected")}
                    >
                        <span className="admin-navbar__link-icon">✖</span>
                        Rejected
                    </NavLink>
                </div>

                {/* Hamburger (mobile) */}
                <button
                    className={`admin-navbar__hamburger ${menuOpen ? "admin-navbar__hamburger--open" : ""}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`admin-navbar__drawer ${menuOpen ? "admin-navbar__drawer--open" : ""}`}>
                <NavLink
                    to="/admin-dashboard"
                    className={`admin-navbar__link ${activeItem === "New Worker" ? "admin-navbar__link--active" : " "}`}
                    onClick={() => { closeMenu(), handleClick("New Worker") }}
                >
                    <span className="admin-navbar__link-icon">➕</span> New Worker
                </NavLink>

                <NavLink
                    to="/admin-dashboard/verify-worker"
                    className={`admin-navbar__link ${activeItem === "Verify" ? "admin-navbar__link--active" : " "}`}
                    onClick={() => { closeMenu(), handleClick("Verify") }}
                >
                    <span className="admin-navbar__link-icon">✔</span> Verify
                </NavLink>

                <NavLink
                    to="/admin-dashboard/rejected-worker"
                    className={`admin-navbar__link ${activeItem === "Rejected" ? "admin-navbar__link--active" : " "}`}
                    onClick={() => { closeMenu(), handleClick("Rejected") }}
                >
                    <span className="admin-navbar__link-icon">✖</span> Rejected
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;