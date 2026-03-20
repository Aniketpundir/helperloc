import React, { useState } from 'react'
import "./Contact.css"
import { Helmet } from 'react-helmet-async'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const social = [
    { id: "1", icon: <FaInstagram />, social_name: "Instagram", href: "#" },
    { id: "2", icon: <CiFacebook />, social_name: "Facebook", href: "#" },
    { id: "3", icon: <FiTwitter />, social_name: "Twitter", href: "#" },
    { id: "4", icon: <AiOutlineYoutube />, social_name: "Youtube", href: "#" },
]

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        messege: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", data);
    }

    const contactDetails = [
        {
            id: "1",
            title: "Address",
            description: "123 Innovation Drive, Tech City, CA 90210",
            icon: <IoLocationOutline />,
        },
        {
            id: "2",
            title: "Phone Number",
            description: "+1 (555) 123-45678",
            icon: <MdOutlineLocalPhone />,
        },
        {
            id: "3",
            title: "Email Address",
            description: "support@helperLoc.com",
            icon: <MdOutlineEmail />,
        },
    ]

    return (
        <>
            <Helmet>
                <title>Contact Us – HelperLoc | Ghar Ke Kaam Ke Liye Helper Book Karo</title>
                <meta name="description" content="HelperLoc se contact karo — koi bhi sawaal ho, hum yahan hain. Email, phone ya form ke zariye hamse judiye. Pure India mein home services available." />
                <meta name="keywords" content="contact helperloc, helperloc support, home services helpline india, helper booking contact" />
                <link rel="canonical" href="https://helperloc.com/contact" />
                <meta property="og:title" content="Contact Us – HelperLoc" />
                <meta property="og:description" content="Koi bhi sawaal ho toh HelperLoc se contact karo. Hum 24/7 available hain." />
                <meta property="og:url" content="https://helperloc.com/contact" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className='contact-page'>

                <div className='contact-hero'>
                    <div className='hero-overlay'>
                        <p className='hero-eyebrow'>Contact Us</p>
                        <h1 className='hero-title'>Get In Touch</h1>
                        <div className='hero-divider'></div>
                        <p className='hero-sub'>Have questions? We are here to help.</p>
                    </div>
                </div>

                <div className='contact-wrapper'>
                    <div className='contact-container'>

                        <div data-aos="fade-up" className='contact-left'>
                            <h2 className='section-label'>Send a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label className='form-label'>Your Name</label>
                                    <input type='text' value={data.name} name='name' onChange={handleChange} placeholder='Arjun' required />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Email Address</label>
                                    <input type='email' value={data.email} name='email' onChange={handleChange} placeholder='arjun@example.com' required />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Mobile Number</label>
                                    <input type='text' value={data.mobile} name='mobile' onChange={handleChange} placeholder='+91 1234567890' required />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Message</label>
                                    <textarea rows={6} placeholder='Write your message here...' value={data.messege} name='messege' onChange={handleChange} required></textarea>
                                </div>
                                <button type='submit' className='submit-btn'>Send Message</button>
                            </form>
                        </div>

                        <div data-aos="fade-up" className='contact-right'>

                            <div className='detail-card'>
                                <h2 className='section-label'>Contact Details</h2>
                                {contactDetails.map((item) => (
                                    <div key={item.id} className='detail-row'>
                                        <div className='detail-icon'>{item.icon}</div>
                                        <div className='detail-text'>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='social-card'>
                                <h2 className='section-label'>Follow Us</h2>
                                <div className='social-grid'>
                                    {social.map((item) => (
                                        <a key={item.id} href={item.href} className='social-item' target="_blank" rel="noreferrer">
                                            <span className='social-icon'>{item.icon}</span>
                                            <span className='social-name'>{item.social_name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact