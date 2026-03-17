// WhyChooseUs.jsx
import React from 'react';
import cleaningImg from '../../../../assets/cleaning.jpg'; // apni image ka path yahan lagao
import { MdOutlineVerified, MdOutlineSupportAgent } from 'react-icons/md';
import { BsClockHistory, BsWallet2 } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';
import './WhyChooseUs.css';

const features = [
    {
        icon: MdOutlineVerified,
        title: 'Verified Professionals',
        desc: 'Background checked & skilled helpers.',
        bgColor: '#eef0ff',
        iconColor: '#3b5bdb',
    },
    {
        icon: BsWallet2,
        title: 'Transparent Pricing',
        desc: 'No hidden costs, fixed hourly rates.',
        bgColor: '#e6fbee',
        iconColor: '#2f9e44',
    },
    {
        icon: BsClockHistory,
        title: 'Same-day Service',
        desc: 'Book for now or schedule for later.',
        bgColor: '#fff4e6',
        iconColor: '#e8590c',
    },
    {
        icon: RiSecurePaymentLine,
        title: 'Safe Payments',
        desc: 'Escrow based secure payment system.',
        bgColor: '#f3e8ff',
        iconColor: '#9c36b5',
    },
    {
        icon: AiOutlineStar,
        title: 'Ratings & Reviews',
        desc: 'Real feedback from real customers.',
        bgColor: '#fff9e0',
        iconColor: '#f59f00',
    },
    {
        icon: MdOutlineSupportAgent,
        title: '24/7 Support',
        desc: 'We are here to help you anytime.',
        bgColor: '#ffe8f0',
        iconColor: '#c2255c',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-section">
            {/* Left Side */}
            <div className="why-left">
                <h2 className="why-heading">Why choose HelperLoc?</h2>
                <p className="why-subtext">
                    We bring the best local professionals to your doorstep, ensuring
                    quality, safety, and convenience.
                </p>

                <div className="why-features-grid">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div className="why-feature-item" key={feature.title}>
                                <div
                                    className="why-icon-wrapper"
                                    style={{ backgroundColor: feature.bgColor }}
                                >
                                    <Icon size={22} color={feature.iconColor} />
                                </div>
                                <div className="why-feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="why-right">
                <img src={cleaningImg} alt="Professional cleaner" className="why-image" />
            </div>
        </section>
    );
};

export default WhyChooseUs;