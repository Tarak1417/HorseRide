import React from 'react';
import { Link } from 'react-router-dom';
import thunderImage from '../images/thunder.jpg';
import lightningImage from '../images/lightning.jpg';
import stormImage from '../images/storm.jpg';
import breezeImage from '../images/breeze.jpg';

const horses = [
  { id: 1, name: 'Thunder', image: thunderImage },
  { id: 2, name: 'Lightning', image: lightningImage },
  { id: 3, name: 'Storm', image: stormImage },
  { id: 4, name: 'Breeze', image: breezeImage },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to Horse Ride Booking</h1>
      <div className="horse-container">
        {horses.map((horse) => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} className="horse-image" />
            <h2 className="horse-name">{horse.name}</h2>
            <Link to="/book">
              <button className="book-button">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
