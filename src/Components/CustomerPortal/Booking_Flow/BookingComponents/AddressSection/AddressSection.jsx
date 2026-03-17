import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import "./AddressSection.css";

const AddressSection = ({
    addresses,
    loadingAddr,
    selectedAddress,
    setSelectedAddress,
    handleEdit,
    handleDelete,
    showForm,
    setShowForm,
    newAddress,
    handleChange,
    handleAddAddress,
    editMode,
}) => {

    if (loadingAddr) return <p>Loading addresses...</p>;

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <>
            <h2>Address</h2>

            {!showForm ? (
                <>

                    {/* ===== ADDRESS LIST ===== */}

                    {addresses.length === 0 && <p>No address added</p>}

                    {addresses.map((addr) => (
                        <div key={addr._id} className="saved-address-box">

                            <label>
                                <input
                                    type="radio"
                                    checked={selectedAddress === addr._id}
                                    onChange={() => setSelectedAddress(addr._id)}
                                />

                                <div>
                                    <p><b>{addr.name}</b> ({addr.phone})</p>
                                    <p>{addr.street}, {addr.city}</p>
                                    <p>{addr.state} - {addr.zipCode}</p>
                                </div>
                            </label>

                            <div className="row">
                                <button onClick={() => handleEdit(addr)} className="edit-address">
                                    <CiEdit />
                                </button>

                                <button onClick={() => handleDelete(addr._id)} className="edit-address">
                                    <MdDelete />
                                </button>
                            </div>

                        </div>
                    ))}

                    {/* ===== ADD BUTTON ===== */}

                    <button
                        className="pay-btn"
                        disabled={addresses.length >= 3}
                        onClick={() => setShowForm(true)}
                    >
                        {addresses.length >= 3 ? "Max 3 Address Allowed" : "➕ Add New Address"}
                    </button>

                </>
            ) : (

                /* ===== FORM ===== */

                <form className="form-section" onSubmit={handleAddAddress}>

                    <input
                        name="name"
                        placeholder="Full Name"
                        value={newAddress.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        value={newAddress.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="street"
                        placeholder="Street / Landmark"
                        value={newAddress.street}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="city"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="zipCode"
                        placeholder="Pin Code"
                        value={newAddress.zipCode}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="state"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={handleChange}
                        required
                    />

                    {/* ===== BUTTONS ===== */}

                    <div className="row">

                        <button type="submit" className="pay-btn">
                            {editMode ? "Update" : "Save"}
                        </button>

                        <button
                            type="button"
                            className="pay-btn cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            )}
        </>
    );
};

export default AddressSection;