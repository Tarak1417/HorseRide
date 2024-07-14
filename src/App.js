import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';
import './App.css'; // Import your CSS file

const App = () => {
  const [currentHorseId, setCurrentHorseId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookNow = (horseId) => {
    setCurrentHorseId(horseId);
  };

  const handleFormSubmit = (details) => {
    setBookingDetails({ ...details, horseId: currentHorseId });
    setCurrentHorseId(null);
  };

  const handleClosePopup = () => {
    setBookingDetails(null);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/landing">Landing</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage onBookNow={handleBookNow} />} />
        </Routes>
        {currentHorseId && (
          <BookingForm horseId={currentHorseId} onSubmit={handleFormSubmit} onClose={() => setCurrentHorseId(null)} />
        )}
        {bookingDetails && (
          <ConfirmationPopup bookingDetails={bookingDetails} onClose={handleClosePopup} />
        )}
      </div>
    </Router>
  );
};

export default App;
