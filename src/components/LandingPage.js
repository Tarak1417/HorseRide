import React from 'react';
import { Link } from 'react-router-dom';
import thunderImage from '../images/dark.jpeg';
import lightningImage from '../images/light.jpeg';
import stormImage from '../images/speed.jpeg';
import breezeImage from '../images/thunderstorm.jpeg';

const horses = [
  { id: 1, name: 'Thunder', image: thunderImage, normalPrice: 50, offerPrice: 40, starRating: 4.5 },
  { id: 2, name: 'Lightning', image: lightningImage, normalPrice: 55, offerPrice: 45, starRating: 4.2 },
  { id: 3, name: 'Storm', image: stormImage, normalPrice: 60, offerPrice: 50, starRating: 4.8 },
  { id: 4, name: 'Breeze', image: breezeImage, normalPrice: 45, offerPrice: 35, starRating: 4.7 },
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
            <p className="horse-price">
              <span className="normal-price">${horse.normalPrice}</span>
              <span className="offer-price">${horse.offerPrice}</span>
            </p>
            <div className="star-rating">
              {[...Array(Math.round(horse.starRating))].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
              <span className="rating-number">{horse.starRating.toFixed(1)}</span>
            </div>
            <Link
              to={{
                pathname: "/book",
                state: { horse: horse.id } // Pass the horse id as state
              }}
              className="book-link" // Added for styling purposes
            >
              <button className="book-button">Book Now for {horse.name}</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default LandingPage;
