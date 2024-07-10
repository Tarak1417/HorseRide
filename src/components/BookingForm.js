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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { horse, date, name } });
  };

  return (
    <div>
      <h1>Book Your Ride</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Horse:
          <select value={horse} onChange={(e) => setHorse(e.target.value)}>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.id}>
                {horse.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date and Time:
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
            timeIntervals={60}
            minTime={new Date().setHours(15, 0)}
            maxTime={new Date().setHours(23, 0)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
