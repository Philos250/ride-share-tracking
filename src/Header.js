// Header.js
import React from 'react';
import './Header.css';

const Header = ({ distance, time, nextStop }) => {
  return (
    <>
      <div className='header'>
        <h2>Startup</h2>
      </div>
      <div className="route-title">
        <h2>Nyabugogo – Kimironko</h2>
      </div>
      <div className="highlights">
        <div className="highlight-item">
          <p><span>Next stop:</span> {nextStop.name}</p>
          <p><span>Coordinates:</span> ({nextStop.coordinates.lat}, {nextStop.coordinates.lng})</p>
        </div>
        <div className="highlight-item">
          <p><span>Distance:</span> {distance} km</p>
          <p><span>Time:</span> {time} minutes</p>
        </div>
      </div>
    </>
  );
};

export default Header;
