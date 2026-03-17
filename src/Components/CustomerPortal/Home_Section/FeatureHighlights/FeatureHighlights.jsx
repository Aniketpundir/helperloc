// FeatureHighlights.jsx
import React from 'react';
import './FeatureHighlights.css';
import { PiUserCheckLight } from 'react-icons/pi';
import { MdOutlineVerified } from 'react-icons/md';
import { BsLock } from 'react-icons/bs';
import { MdOutlineSupportAgent } from 'react-icons/md';

const features = [
    {
        id: 1,
        icon: PiUserCheckLight,
        title: 'Aadhaar Verified',
        desc: 'Every helper is ID verified via Aadhaar.',
    },
    {
        id: 2,
        icon: MdOutlineVerified,
        title: 'Police Verification',
        desc: 'Background checked for your safety.',
    },
    {
        id: 3,
        icon: BsLock,
        title: 'Secure Escrow',
        desc: 'Payment released only after job completion.',
    },
    {
        id: 4,
        icon: MdOutlineSupportAgent,
        title: '24/7 Support',
        desc: 'Emergency response and helpline.',
    },
];

const FeatureHighlights = () => {
    return (
        <section className="fh-section">
            <div className="fh-header">
                <h2 className="fh-title">Your safety is our priority</h2>
                <p className="fh-subtitle">Built-in trust and protection for every task</p>
            </div>
            <div className="fh-grid">
                {features.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div className="fh-card" key={item.id}>
                            <div className="fh-icon-wrapper">
                                <Icon size={30} color="#22c55e" />
                            </div>
                            <h3 className="fh-card-title">{item.title}</h3>
                            <p className="fh-card-desc">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeatureHighlights;