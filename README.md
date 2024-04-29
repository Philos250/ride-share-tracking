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

# GIVEN FIGMA UI DESIGN

![Screenshot 2024-04-28 123928](https://github.com/Philos250/ride-share-tracking/assets/32220586/55486adc-a82b-4e75-9375-c2d35f316aa1)

# Testing

- Ensure your application is functioning correctly by checking if all endpoints are responsive and if the UI aligns with the Figma design provided.

# Contributing

- Contributions are welcome! Please read the contributing guidelines on how to propose bugfixes, improvements, and scalability features.

# UI DESIGN

![Screenshot 2024-04-29 172056](https://github.com/Philos250/ride-share-tracking/assets/32220586/33ecf58c-3d86-42c7-bcaa-67279ad6d6a5)
![Screenshot 2024-04-29 171919](https://github.com/Philos250/ride-share-tracking/assets/32220586/60ba0575-c368-476a-89d9-8b0bc4db44ce)
![Screenshot 2024-04-29 171951](https://github.com/Philos250/ride-share-tracking/assets/32220586/6fd2c00d-84d5-4d57-870b-4779748cb96e)
![Screenshot 2024-04-29 172026](https://github.com/Philos250/ride-share-tracking/assets/32220586/7c13c254-df1c-4455-a93b-7331278b2141)
