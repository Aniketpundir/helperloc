import React from 'react'
import HeroSection from '../../Components/CustomerPortal/Home_Section/Hero_Section/HeroSection';
import TopCategories from '../../Components/CustomerPortal/Home_Section/Service/TopCategories/TopCategories';
import HowItWork from "../../Components/CustomerPortal/Home_Section/HowItWork/HowItWork"
import FeatureHighlights from '../../Components/CustomerPortal/Home_Section/FeatureHighlights/FeatureHighlights';
import WhyChooseUs from '../../Components/CustomerPortal/Home_Section/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <HeroSection />
            <TopCategories />
            <HowItWork />
            <WhyChooseUs />
            <FeatureHighlights />
        </>
    )
}

export default Home