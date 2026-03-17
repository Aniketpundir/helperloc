import React, { useState, useEffect } from "react";
import "./BookWorkers.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

/* REDUX */
import {
    fetchAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setSelectedAddress,
} from "../../../../redux/slices/addressSlice";

import { fetchWorkerDetails } from "../../../../redux/slices/workerSlice";
import { fetchLocation } from "../../../../redux/slices/locationSlice";

/* COMPONENT */
import AddressSection from "../BookingComponents/AddressSection/AddressSection";

const BookWorkers = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { title, id } = useParams();

    /* ================= REDUX STATE ================= */

    const { customerToken } = useSelector((s) => s.auth);
    const { addresses, loading, selectedAddress } = useSelector(
        (s) => s.address
    );
    const { workerDetails } = useSelector((s) => s.worker);
    const { district, state, pinCode } = useSelector((s) => s.location);

    /* ================= STATES ================= */

    const [paymentMethod, setPaymentMethod] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [serviceDate, setServiceDate] = useState("");

    const [newAddress, setNewAddress] = useState({
        name: "",
        phone: "",
        street: "",
        city: "",
        zipCode: "",
        state: "",
    });

    /* ================= FETCH ================= */

    useEffect(() => {
        if (!customerToken) return;

        dispatch(fetchAddresses(customerToken));
        dispatch(fetchWorkerDetails({ token: customerToken, id }));
        dispatch(fetchLocation());
    }, [customerToken, id, dispatch]);

    /* ================= AUTO FILL ================= */

    useEffect(() => {
        setNewAddress((prev) => ({
            ...prev,
            city: prev.city || district || "",
            zipCode: prev.zipCode || pinCode || "",
            state: prev.state || state || "",
        }));
    }, [district, state, pinCode]);

    /* ================= INPUT ================= */

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /* ================= ADD / UPDATE ================= */

    const handleAddAddress = async (e) => {
        e.preventDefault();

        if (editMode) {
            await dispatch(
                updateAddress({ token: customerToken, id: editId, data: newAddress })
            );
            toast.success("Address Updated");
        } else {
            await dispatch(
                addAddress({ token: customerToken, data: newAddress })
            );
            toast.success("Address Added");
        }

        dispatch(fetchAddresses(customerToken));

        setShowForm(false);
        setEditMode(false);
        setEditId(null);

        setNewAddress({
            name: "",
            phone: "",
            street: "",
            city: "",
            zipCode: "",
            state: "",
        });
    };

    /* ================= EDIT ================= */

    const handleEdit = (addr) => {
        setNewAddress(addr);
        setEditMode(true);
        setEditId(addr._id);
        setShowForm(true);
    };

    /* ================= DELETE ================= */

    const handleDelete = async (id) => {
        await dispatch(deleteAddress({ token: customerToken, id }));
        toast.error("Address Deleted");
    };

    /* ================= BOOKING ================= */

    const handleBooking = async () => {
        if (!selectedAddress) return alert("Please select address!");
        if (!paymentMethod) return alert("Select payment method!");
        if (!serviceDate) return alert("Select date!");

        try {
            await axios.post(
                "https://e-labour-backend.onrender.com/api/bookings/new",
                {
                    workerId: id,
                    amount: workerDetails?.worker?.rate,
                    serviceType: title,
                    scheduledDate: serviceDate,
                    addressId: selectedAddress,
                    method: paymentMethod,
                },
                { headers: { token: customerToken } }
            );

            toast.success("Worker Booked Successfully");

            Navigate(
                `/Service-Categories/Listed-Workers/${title}/Worker-Details/${id}/Booking-Section/Booking-Conformation`
            );
        } catch (err) {
            console.log(err);
        }
    };

    /* ================= DATE ================= */

    const today = new Date();
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) => date.toISOString().split("T")[0];

    const bookedDates =
        workerDetails?.scheduledDate?.map((d) =>
            new Date(d).toLocaleDateString("en-CA")
        ) || [];

    const isBooked = (date) => bookedDates.includes(formatDate(date));

    /* ================= UI ================= */

    return (
        <div className="checkout-container">
            <div className="checkout-box">

                {/* WORKER */}
                <div className="worker-profiles">
                    <img
                        src={workerDetails?.worker?.workerId?.avatar?.image}
                        alt="Worker"
                        className="worker-avatar"
                    />

                    <div className="worker-info">
                        <h3>{workerDetails?.worker?.workerId?.name}</h3>
                        <p className="worker-job">{workerDetails?.worker?.workCategory}</p>
                        <p className="worker-id">
                            Worker ID: {workerDetails?.worker?.workerId?._id}
                        </p>
                    </div>
                </div>

                {/* DATE */}
                <h2>When would you like your service?</h2>

                <div className="button-group">
                    {[today, tomorrow, dayAfterTomorrow].map((d, i) => (
                        <button
                            key={i}
                            className={`date-btn ${serviceDate === formatDate(d) ? "selected" : ""
                                } ${isBooked(d) ? "booked" : ""}`}
                            onClick={() => setServiceDate(formatDate(d))}
                            disabled={isBooked(d)}
                        >
                            {i === 0 ? "Today" : i === 1 ? "Tomorrow" : "Day After"}
                            <br />
                            {formatDate(d)}
                        </button>
                    ))}
                </div>

                {/* ADDRESS */}

                <AddressSection
                    addresses={addresses}
                    loadingAddr={loading}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={(id) => dispatch(setSelectedAddress(id))}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    showForm={showForm}
                    setShowForm={setShowForm}
                    newAddress={newAddress}
                    handleChange={handleChange}
                    handleAddAddress={handleAddAddress}
                    editMode={editMode}
                />

                {/* PAYMENT */}

                <h2>Payment Details</h2>

                <label>
                    <input
                        type="radio"
                        checked={paymentMethod === "offline"}
                        onChange={() => setPaymentMethod("offline")}
                    />
                    Cash on Delivery
                </label>

                <button onClick={handleBooking} className="pay-btn">
                    Book Now
                </button>

            </div>
        </div>
    );
};

export default BookWorkers;