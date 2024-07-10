import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Breeze' },
];

const BookingForm = () => {
  const [horse, setHorse] = useState(horses[0].id);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(date instanceof Date) || isNaN(date)) {
      console.error('Invalid date:', date);
      return;
    }
    navigate('/confirmation', { state: { horse, date, name, email, phone, address } });
  };

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setDate(date);
    } else {
      console.error('Invalid date:', date);
    }
  };

  return (
    <div className="booking-form">
      <h1 className="form-title">Book Your Ride</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Horse:
          <select
            value={horse}
            onChange={(e) => setHorse(e.target.value)}
            className="form-input"
          >
            {horses.map((horse) => (
              <option key={horse.id} value={horse.id}>
                {horse.name}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Date and Time:
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            showTimeSelect
            timeIntervals={60}
            minTime={new Date().setHours(15, 0)}
            maxTime={new Date().setHours(23, 0)}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
