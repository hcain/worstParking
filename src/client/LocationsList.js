import React from "react";
import Location from './Location'

const LocationsList = ({ parkingLots }) => {
  return (
    <>
      {parkingLots &&
        parkingLots.map((parkingLot) => <Location parkingLot={parkingLot} />)}
    </>
  );
};
export default LocationsList;
