import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import TrackLocation from './TrackLocation';

const Booking = () => {
  const location = useLocation();
  const { horse, date, name } = location.state || {};

  if (!horse || !date || !name) {
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
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you, {name}, for booking a ride with {horseName}.</p>
      <p>Your ride is scheduled for {formattedDate}.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>

      <TrackLocation/>
    </div>
  );
};

export default Booking;
