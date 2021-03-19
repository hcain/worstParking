import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import LocationsList from "./LocationsList"
import "./app.css";

const App = () => {
  const [parkingLots, setParkingLots] = useState();

  const fetchParkingLots = async (location) => {
    try {
      const response = await axios.get(`/api/?location=${location}`);
      console.log(response.data.businesses);
      setParkingLots(response.data.businesses.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    const location = event.target[0].value;
    console.log(location)
    event.preventDefault();
    fetchParkingLots(location);
  };

  return (
    <div>
      <Header handleSubmit={handleSubmit}/>
      <LocationsList parkingLots={parkingLots}/>
    </div>
  );
};
export default App;
