import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/CustomerPortal/How_It_Works_Section/Header/Header';
import How_Work from '../../Components/CustomerPortal/How_It_Works_Section/How_Work/How_Work';

const HowItWorkrs = () => {
    return (
        <>
            <Helmet>
                <title>How It Works – HelperLoc | Ghar Ka Helper Book Karne Ka Aasan Tarika</title>
                <meta name="description" content="HelperLoc pe helper book karna bahut aasan hai — sirf 3 steps mein. Service choose karo, helper select karo, aur booking confirm karo. Pure India mein available." />
                <meta name="keywords" content="how to book helper india, ghar ka kaam book kaise kare, helperloc kaise kaam karta hai, home service booking steps india" />
                <link rel="canonical" href="https://helperloc.com/how-it-works" />
                <meta property="og:title" content="How It Works – HelperLoc | 3 Steps Mein Helper Book Karo" />
                <meta property="og:description" content="Sirf 3 steps mein ghar ka helper book karo. Fast, Easy aur Trusted — Pure India mein." />
                <meta property="og:url" content="https://helperloc.com/how-it-works" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Header />
            <How_Work />
        </>
    )
}

export default HowItWorkrs