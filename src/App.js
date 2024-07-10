import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import Booking from './components/Booking';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/confirmation" element={<Booking />} />
        
      </Routes>
    </Router>
  );
};

export default App;
