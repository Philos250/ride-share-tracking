// Map.js

import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import Header from './Header';
import './Map.css';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const routeDetails = [
  { name: "Nyabugogo", coordinates: { lat: -1.939826787816454, lng: 30.0445426438232 } },
  { name: "Stop A", coordinates: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
  { name: "Stop B", coordinates: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
  { name: "Stop C", coordinates: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
  { name: "Stop D", coordinates: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
  { name: "Stop E", coordinates: { lat: -1.9487480402200394, lng: 30.126596781356923 } },
  { name: "Kimironko", coordinates: { lat: -1.9365670876910166, lng: 30.13020167024439 } }
];

// This function calculates distance between two coordinates in km
const calculateDistance = (start, end) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadius = 6371; // Radius of the earth in km

  const dLat = toRad(end.lat - start.lat);
  const dLng = toRad(end.lng - start.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(start.lat)) * Math.cos(toRad(end.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c; // Distance in km
  return distance;
};

// Function to determine the next stop based on the driver's current position
const getNextStopIndex = (currentPositionIndex) => {
  return (currentPositionIndex + 1) % routeDetails.length; // Move to the next position in a loop
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const [driverPosition, setDriverPosition] = useState(0); // Initialize with Nyabugogo index
  const [eta, setEta] = useState({ distance: 0, time: 0 }); // State to hold ETA information

  // Defining constant average speed in km/h
  const averageSpeedKmH = 40;

  useEffect(() => {
    const getNextStopInfo = (currentPositionIndex) => {
      const nextStopIndex = getNextStopIndex(currentPositionIndex);
      const distance = calculateDistance(routeDetails[currentPositionIndex].coordinates, routeDetails[nextStopIndex].coordinates);
      const time = distance / averageSpeedKmH * 60; // Time in minutes
      setEta({
        distance: distance.toFixed(2),
        time: Math.ceil(time),
      });
    };

    const intervalId = setInterval(() => {
      setDriverPosition(prevPositionIndex => {
        const newPositionIndex = getNextStopIndex(prevPositionIndex);
        getNextStopInfo(newPositionIndex);
        return newPositionIndex;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const nextStop = routeDetails[driverPosition];

  return isLoaded ? (
    <>
      <Header distance={eta.distance} time={eta.time} nextStop={nextStop} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={nextStop.coordinates}
        zoom={15}
      >
        {routeDetails.map(({ name, coordinates }, idx) => (
          <Marker key={idx} position={coordinates} />
        ))}

        <Polyline
          path={routeDetails.map(detail => detail.coordinates)}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 2,
          }}
        />

        <Marker
          position={nextStop.coordinates}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: "#1a73e8",
            fillOpacity: 1,
            scale: 7,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          }}
        />
      </GoogleMap>

      {/* Display ETA information in your header or elsewhere */}
      {/* <div className="eta-display">
        Distance to next stop: {eta.distance} km
        <br />
        Estimated time of arrival: {eta.time} minutes
      </div> */}
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);