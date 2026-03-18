import React, { useState } from 'react'
import "./HeroSection.css"

const HeroSection = () => {
    const [task, setTask] = useState('')
    const [location, setLocation] = useState('')

    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1 className="hero-heading">
                    Get Things Done, <br />Effortlessly
                </h1>
                <p className="hero-subtext">
                    Book reliable local professionals for cleaning, repairs, moving, delivery, and other daily tasks — trusted, affordable, and hassle-free.
                </p>

                <div className="hero-form">
                    <div className="input-group">
                        <span className="input-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="What do you need help with?"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth="2">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Enter your location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>

                    <button className="hero-btn">Find Taskers</button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80"
                        alt="Professional helping with home tasks"
                        className="hero-image"
                    />
                    <div className="image-badge">
                        <span className="badge-icon">✅</span>
                        <div>
                            <p className="badge-title">Trusted Professionals</p>
                            <p className="badge-sub">Background verified taskers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection