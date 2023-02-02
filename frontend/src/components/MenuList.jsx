/* eslint-disable react/prop-types */
import React from "react";

function MenuList({ image, menuName }) {
  return (
    <div>
      <img src={image} alt="" />
      <h4> {menuName} </h4>
    </div>
  );
}

export default MenuList;
