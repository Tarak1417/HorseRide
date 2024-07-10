import React from 'react';
import { Link } from 'react-router-dom';

const horses = [
  { id: 1, name: 'Thunder', image: 'thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'lightning.jpg' },
  { id: 3, name: 'Storm', image: 'storm.jpg' },
  { id: 4, name: 'Breeze', image: 'breeze.jpg' },
];

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Horse Ride Booking</h1>
      <div className="Horse-Conatianer">
      <div className="horse-list">
        {horses.map((horse) => (
          <div key={horse.id} className="horse-card">
            <img src={horse.image} alt={horse.name} />
            <h2>{horse.name}</h2>
            <Link to="/book">
        <button>Book Now</button>
      </Link>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
