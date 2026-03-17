import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";
import profileImg from "../../../../assets/101.jpg";

import AddressSection from "../../Booking_Flow/BookingComponents/AddressSection/AddressSection";

import { fetchCustomerProfile } from "../../../../redux/slices/authSlice";
import {
    fetchAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setSelectedAddress,
} from "../../../../redux/slices/addressSlice";

import { useDispatch, useSelector } from "react-redux";

const CustomerProfile = () => {

    const dispatch = useDispatch();

    const { customerProfile, customerToken, loading } = useSelector((s) => s.auth);

    const {
        addresses,
        loading: loadingAddr,
        selectedAddress,
    } = useSelector((s) => s.address);

    /* ================= LOCAL STATES ================= */

    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const [newAddress, setNewAddress] = useState({
        name: "",
        phone: "",
        street: "",
        city: "",
        zipCode: "",
        state: "",
    });

    /* ================= FETCH PROFILE + ADDRESS ================= */

    useEffect(() => {
        if (customerToken) {
            dispatch(fetchCustomerProfile(customerToken));
            dispatch(fetchAddresses(customerToken));
        }
    }, [customerToken, dispatch]);

    /* ================= HANDLERS ================= */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddAddress = (e) => {
        e.preventDefault();

        if (editMode) {
            dispatch(updateAddress({ token: customerToken, id: editId, data: newAddress }));
        } else {
            dispatch(addAddress({ token: customerToken, data: newAddress }));
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

    const handleEdit = (addr) => {
        setNewAddress(addr);
        setEditMode(true);
        setEditId(addr._id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteAddress({ token: customerToken, id }));
    };

    /* ================= SAFE DATA ================= */

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (!customerProfile) return null;

    const user = customerProfile?.customer || {};

    return (
        <div className="customer-profile">

            <div className="customer-profile-container">

                <h1>Your Profile</h1>

                <div className="customer-profile-content">

                    {/* LEFT */}

                    <div className="customer-image-section">
                        <div className="customer-image-name">

                            <img src={user?.avatar?.image || profileImg} alt="Customer" />

                            <h3>{user?.name}</h3>
                            <p>{user?.email}</p>
                            <p>{user?.phone}</p>

                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="customer-profile-address">

                        <AddressSection
                            addresses={addresses}
                            loadingAddr={loadingAddr}
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

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CustomerProfile;