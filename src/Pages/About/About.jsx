import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/CustomerPortal/About_Section/Header/Header';
import Our_Mission from '../../Components/CustomerPortal/About_Section/Our_Mission/Our_Mission';
import About_Features from '../../Components/CustomerPortal/About_Section/About_Features/About_Features';
import Our_Vision from '../../Components/CustomerPortal/About_Section/Our_Vision/Our_Vision';
import Timeline from '../../Components/CustomerPortal/About_Section/Milestones/Timeline';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us – HelperLoc | Trusted Home Services Platform India</title>
                <meta name="description" content="HelperLoc ke baare mein jaano — hamara mission hai Pure India mein ghar ke har kaam ke liye trusted aur trained helpers provide karna. Fast, Affordable, Reliable." />
                <meta name="keywords" content="about helperloc, home services platform india, trusted helpers india, labour booking app" />
                <link rel="canonical" href="https://helperloc.com/about" />
                <meta property="og:title" content="About Us – HelperLoc | Trusted Home Services Platform India" />
                <meta property="og:description" content="Jaano HelperLoc ka mission aur vision — Pure India mein trusted home services provide karna." />
                <meta property="og:url" content="https://helperloc.com/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header />
            <Our_Mission />
            <About_Features />
            {/* <Timeline /> */}
            <Our_Vision />
        </>
    )
}

export default About