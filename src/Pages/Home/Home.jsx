import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../Components/CustomerPortal/Home_Section/Hero_Section/HeroSection';
import TopCategories from '../../Components/CustomerPortal/Home_Section/Service/TopCategories/TopCategories';
import HowItWork from "../../Components/CustomerPortal/Home_Section/HowItWork/HowItWork"
import FeatureHighlights from '../../Components/CustomerPortal/Home_Section/FeatureHighlights/FeatureHighlights';
import WhyChooseUs from '../../Components/CustomerPortal/Home_Section/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>HelperLoc – Ghar Ke Har Kaam Ke Liye Helper Book Karo | India</title>
                <meta name="description" content="HelperLoc par ghar ke har kaam ke liye trusted helpers book karo. Plumber, Electrician, Maid, Carpenter, Painter aur bahut kuch — Pure India mein available. Abhi book karo!" />
                <meta name="keywords" content="home services india, ghar ka kaam, helper book karo, plumber near me, electrician near me, maid service, carpenter india, HelperLoc" />
                <link rel="canonical" href="https://helperloc.com/" />
                <meta property="og:title" content="HelperLoc – Ghar Ke Har Kaam Ke Liye Helper Book Karo" />
                <meta property="og:description" content="Plumber, Electrician, Maid, Carpenter aur bahut kuch — Pure India mein trusted helpers abhi book karo." />
                <meta property="og:url" content="https://helperloc.com/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <HeroSection />
            <TopCategories />
            <HowItWork />
            <WhyChooseUs />
            <FeatureHighlights />
        </>
    )
}

export default Home