import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async'
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import "./ListedWorkers.css";
import WorkerCard from "../Worker_Card/WorkerCard";
import { useParams } from "react-router-dom";
import LocationMap from "../../../LocationMap/LocationMap";

import { useDispatch, useSelector } from "react-redux";
import { fetchWorkersList } from "../../../../redux/slices/workersSlice";
import { fetchLocation } from "../../../../redux/slices/locationSlice";

import { useNavigate } from "react-router-dom";

const ListedWorkers = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const { title } = useParams();

    const [isOpen, setIsOpen] = useState(false);

    const { workers, loading } = useSelector((s) => s.workers);
    const { district, pinCode, state } = useSelector((s) => s.location);

    useEffect(() => {
        dispatch(fetchWorkersList(title));
        dispatch(fetchLocation());
    }, [title, dispatch]);

    const customerToken = localStorage.getItem("customerToken");

    useEffect(() => {
        if (!customerToken) {
            Navigate("/customer-login");
        } else {
            Navigate("/Service-Categories/Listed-Workers/:title")
        }
    }, [customerToken, Navigate]);

    // SEO ke liye title capitalize karo
    const formattedTitle = title
        ? title.charAt(0).toUpperCase() + title.slice(1)
        : "Service";

    return (
        <>
            <Helmet>
                <title>{formattedTitle} Near Me – Book Trusted {formattedTitle} in India | HelperLoc</title>
                <meta name="description" content={`HelperLoc par trusted aur trained ${formattedTitle} book karo. Apne area mein best ${formattedTitle} dhundho — Fast booking, Affordable rates. Pure India mein available.`} />
                <meta name="keywords" content={`${formattedTitle} near me, ${formattedTitle} india, ${formattedTitle} book karo, ghar ke liye ${formattedTitle}, helperloc ${formattedTitle}`} />
                <link rel="canonical" href={`https://helperloc.com/service-categories/listed-workers/${title}`} />
                <meta property="og:title" content={`${formattedTitle} Near Me – Book Trusted ${formattedTitle} | HelperLoc`} />
                <meta property="og:description" content={`Apne area mein trusted ${formattedTitle} book karo — Fast, Affordable, Reliable. HelperLoc par abhi book karo.`} />
                <meta property="og:url" content={`https://helperloc.com/service-categories/listed-workers/${title}`} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="ListedWorker">
                <h3>To confirm your location, check the surrounding area on the map.</h3>
                <div className="location">
                    <div className="location-text">
                        <p>State:-- <span>[ {state} ]</span></p>
                        <p>District name:-- <span>[ {district} ]</span></p>
                        <p>Pin Code:-- <span>[ {pinCode} ]</span></p>
                    </div>
                    <LocationMap />
                </div>

                <div className="ListedWorker-text">
                    <h1>Find a {formattedTitle}</h1>
                    <p>Browse our network of trusted professionals.</p>
                </div>

                <div className="ListedWorker-filter">
                    <select
                        defaultValue=""
                        onClick={() => setIsOpen(!isOpen)}
                        className="category-select"
                    >
                        <option value="" disabled>Category</option>
                        <option value="plumber">Plumber</option>
                        <option value="electrician">Electrician</option>
                        <option value="painter">Painter</option>
                    </select>
                    {isOpen ? (
                        <FaCaretUp className="caret-icon" />
                    ) : (
                        <FaCaretDown className="caret-icon" />
                    )}
                </div>

                <div className="ListedWorker-card">
                    {loading ? (
                        <p>Loading workers...</p>
                    ) : workers.length > 0 ? (
                        workers.map((items, index) => (
                            <div key={index} className="ListedWorkrs-card-list">
                                <WorkerCard
                                    image={items.workerId?.avatar?.image}
                                    name={items.workerId?.name}
                                    service={items.workCategory}
                                    daily_wages={items.rate}
                                    id={items.workerId._id}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No workers found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListedWorkers;