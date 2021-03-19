import React from "react";

const Location = ({ parkingLot }) => {
  return (
    <div className="location">
      <div className="score">
        {(parkingLot.review_count * parkingLot.rating) /
          (parkingLot.review_count + 1)}
      </div>
      <div className="text">
        <h2>{parkingLot.name}</h2>
        <div className="info">
          <p>{parkingLot.location.address1}</p>
          <p>Rating: {parkingLot.rating}</p>
          <p>Number of Reviews: {parkingLot.review_count}</p>
        </div>
      </div>
      { parkingLot.image_url? <img src={parkingLot.image_url}></img> : ''} 
    </div>
  );
};
export default Location;
