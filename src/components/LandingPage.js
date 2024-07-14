import React from 'react';

// Import horse images
import thunderImage from '../images/dark.jpeg';
import lightningImage from '../images/light.jpeg';
import stormImage from '../images/speed.jpeg';
import breezeImage from '../images/thunderstorm.jpeg';

const horses = [
  { id: 1, name: 'Thunder', image: thunderImage, actualPrice: 100, discountPrice: 80 },
  { id: 2, name: 'Lightning', image: lightningImage, actualPrice: 120, discountPrice: 90 },
  { id: 3, name: 'Storm', image: stormImage, actualPrice: 150, discountPrice: 120 },
  { id: 4, name: 'Breeze', image: breezeImage, actualPrice: 200, discountPrice: 160 },
];

const LandingPage = ({ onBookNow }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to Horse Ride Booking</h1>
      <div className="horse-list">
        {horses.map(horse => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} />
            <h2>{horse.name}</h2>
            <p className="actual-price">Actual Price: ${horse.actualPrice}</p>
            <p className="discount-price">Discount Price: ${horse.discountPrice}</p>
            <button onClick={() => onBookNow(horse.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
