import React from 'react';
import Map from './Map';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="map-container">
      {/* Header is removed here */}
      <Map />
      <Footer />
    </div>
  );
}

export default App;