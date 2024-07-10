import React, { useState } from 'react';

const TrackLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const handleTrackLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="location-container">
      <button onClick={handleTrackLocation} className="track-button">
        Track My Location
      </button>
      {location.latitude && location.longitude && (
        <div className="location-info">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TrackLocation;
