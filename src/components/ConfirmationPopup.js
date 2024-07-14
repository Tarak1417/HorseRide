// src/components/ConfirmationPopup.js
import React from 'react';
import { motion } from 'framer-motion';

const ConfirmationPopup = ({ bookingDetails, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="confirmation-popup"
    >
      <div className="confirmation-container">
        <button onClick={onClose}>Close</button>
        <h2>Booking Confirmed</h2>
        <p>Thank you, {bookingDetails.name}!</p>
        <p>You have booked Horse {bookingDetails.horseId}.</p>
        <p>Address: {bookingDetails.address}</p>
        <p>Check your email for a calendar invite.</p>
      </div>
    </motion.div>
  );
};

export default ConfirmationPopup;
