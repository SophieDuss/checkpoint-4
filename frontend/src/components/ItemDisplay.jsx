/* eslint-disable react/prop-types */
import React from "react";
import "./ItemDisplay.css";

function ItemDisplay({ image, name }) {
  return (
    <div className="itemBox">
      <img src={image} alt="" />
      <h3> {name} </h3>
    </div>
  );
}

export default ItemDisplay;
