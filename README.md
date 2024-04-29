# Real-time Ride-Share Tracking
## Project Description
Real-time Ride-Share Tracking is a web application designed to assist drivers and passengers of a transportation agency in Kigali, facilitating real-time navigation and coordination. The application dynamically displays the driver's current location on a route from Nyabugogo to Kimironko, marking five intermediate stops and estimating the time of arrival (ETA) to each upcoming stop using the Google Maps API.

# Features

**Interactive Map:** Displays the entire route with geographically marked stops from Nyabugogo to Kimironko.
**Real-Time Location Tracking:** Tracks and displays the real-time location of the driver along the predefined route.
**Dynamic ETA Calculation:** Calculates and updates the ETA for each stop, assuming a constant average speed.

# Technology Stack

**- Front-end:** React.js for building the user interface.
**- APIs:** Google Maps API for mapping, routing functionalities, and real-time location tracking.

# Setup Instructions

### 1. Clone the Repository:

git clone [https://github.com/your-username/ride-share-tracking.git](https://github.com/Philos250/ride-share-tracking.git)
cd ride-share-tracking

### 2. Install Dependencies:

npm install

### 3. Set Environment Variables:
Rename .env.local to .env and update it with your Google Maps API key.

REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Running the Application

### 1. Start the Development Server:

npm start

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

# Testing

- Ensure your application is functioning correctly by checking if all endpoints are responsive and if the UI aligns with the Figma design provided.

# Contributing

- Contributions are welcome! Please read the contributing guidelines on how to propose bugfixes, improvements, and scalability features.

# Notes

- The application’s UI should closely match the provided Figma design screenshot.
![Screenshot 2024-04-29 153247](https://github.com/Philos250/ride-share-tracking/assets/32220586/f67d832e-ead4-46a4-99c9-6929f001d22e)
![Screenshot 2024-04-29 153328](https://github.com/Philos250/ride-share-tracking/assets/32220586/c5d9626a-b7b8-4164-8a7a-bb4ade2996eb)
![Screenshot 2024-04-28 123928](https://github.com/Philos250/ride-share-tracking/assets/32220586/82e53c01-4764-40a8-843d-a43252351dc0)
