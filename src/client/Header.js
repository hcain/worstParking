import React from "react";

const Header = ({handleSubmit}) => {
  return (
    <div className="header">
      <h1>Worst Parking</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:{' '}
          <input type="text" name="location" />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
export default Header;
