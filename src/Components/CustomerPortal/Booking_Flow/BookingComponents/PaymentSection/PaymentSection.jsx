import React from "react";
import "./PaymentSection.css";

const PaymentSection = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <>
            <h2>Payment Details</h2>

            <label>
                <input
                    type="radio"
                    checked={paymentMethod === "offline"}
                    onChange={() => setPaymentMethod("offline")}
                />
                Cash on Delivery
            </label>
        </>
    );
};

export default PaymentSection;