import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function AddMeal() {
  const [addBurger, setAddBurger] = useState("");
  const [addSide, setAddSide] = useState("");
  const [addDrink, setAddDrink] = useState("");
  const [addDesert, setAddDesert] = useState("");

  const burgerOnChange = (e) => {
    setAddBurger({ [e.target.name]: e.target.value });
  };
  const submitBurger = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/burger", {
        name: addBurger.name,
      })
      .then(() => {
        Navigate("/");
      });
  };
  const sideOnChange = (e) => {
    setAddSide({ [e.target.name]: e.target.value });
  };
  const submitSide = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/side", {
        name: addSide.name,
      })
      .then(() => {
        Navigate("/");
      });
  };
  const drinkOnChange = (e) => {
    setAddDrink({ [e.target.name]: e.target.value });
  };
  const submitDrink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/drink", {
        name: addDrink.name,
      })
      .then(() => {
        Navigate("/");
      });
  };
  const desertOnChange = (e) => {
    setAddDesert({ [e.target.name]: e.target.value });
  };
  const submitDesert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/desert", {
        name: addDesert.name,
      })
      .then(() => {
        Navigate("/");
      });
  };
  return (
    <div>
      <h1 className="title"> ADD YOUR ITEMS!</h1>
      <form className="add__form" onSubmit={submitBurger} action="">
        <input
          className="name"
          id="burgerName"
          name="burgerName"
          type="text"
          placeholder="Your Burger Name Here"
          onChange={burgerOnChange}
        />
        <button type="submit" className="addButton">
          ADD YOUR BURGER
        </button>
      </form>
      <form className="add__form" onSubmit={submitSide} action="">
        <input
          className="name"
          id="SideName"
          name="SideName"
          type="text"
          placeholder="Your Side Name Here"
          onChange={sideOnChange}
        />
        <button type="submit" className="addButton">
          ADD YOUR SIDE
        </button>
      </form>
      <form className="add__form" onSubmit={submitDrink} action="">
        <input
          className="name"
          id="drinkName"
          name="drinkName"
          type="text"
          placeholder="Your Drink Name Here"
          onChange={drinkOnChange}
        />
        <button type="submit" className="addButton">
          ADD YOUR DRINK
        </button>
      </form>
      <form className="add__form" onSubmit={submitDesert} action="">
        <input
          className="name"
          id="DesertName"
          name="DesertName"
          type="text"
          placeholder="Your Desert Name Here"
          onChange={desertOnChange}
        />
        <button type="submit" className="addButton">
          ADD YOUR DESERT
        </button>
      </form>
    </div>
  );
}

export default AddMeal;
