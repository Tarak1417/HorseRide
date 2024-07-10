import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const { horse, date, name, address, image } = location.state || {};

  if (!horse || !date || !name || !address || !image) {
    return <p>No booking details found.</p>;
  }

  const horseNames = {
    1: 'Thunder',
    2: 'Lightning',
    3: 'Storm',
    4: 'Breeze',
  };

  const horseName = horseNames[horse];
  const formattedDate = new Date(date).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className="booking">
      <h1>Booking Confirmed!</h1>
      <p className="booking-info">Thank you, {name}, for booking a ride with {horseName}.</p>
      <p className="booking-info">Your ride is scheduled for {formattedDate}.</p>
      <p className="booking-info">Your address: {address}</p>
      <img src={image} alt={horseName} className="horse-image" />
      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Booking;
