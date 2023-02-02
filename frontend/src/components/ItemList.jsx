import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemDisplay from "./ItemDisplay";

function ItemList() {
  const [burgerList, setBurgerList] = useState([]);
  const [sideList, setSideList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const [desertList, setDesertList] = useState([]);
  const [selectedBurger, setSelectedBurger] = useState([]);
  const [selectedSide, setSelectedSide] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState([]);
  const [selectedDesert, setSelectedDesert] = useState([]);

  const getAllBurger = () => {
    axios
      .get("http://localhost:5000/api/burger")
      .then((response) => setBurgerList(response.data));
  };
  const getAllSide = () => {
    axios
      .get("http://localhost:5000/api/side")
      .then((response) => setSideList(response.data));
  };
  const getAllDrink = () => {
    axios
      .get("http://localhost:5000/api/drink")
      .then((response) => setDrinkList(response.data));
  };
  const getAllDesert = () => {
    axios
      .get("http://localhost:5000/api/desert")
      .then((response) => setDesertList(response.data));
  };

  useEffect(() => {
    getAllBurger();
    getAllSide();
    getAllDrink();
    getAllDesert();
  }, []);

  const handleBurger = (e) => {
    setSelectedBurger(e.target.value);
  };

  const handleSide = (e) => {
    setSelectedSide(e.target.value);
  };

  const handleDrink = (e) => {
    setSelectedDrink(e.target.value);
  };

  const handleDesert = (e) => {
    setSelectedDesert(e.target.value);
  };

  return (
    <div>
      <h3>Select a Burger</h3>
      <form className="form">
        <label htmlFor="burger_select">
          Burger{" "}
          <select id="burger_select" onChange={handleBurger}>
            <option valeur="">---</option>
            {burgerList.map((burger) => (
              <option key={burger.id} value={burger.id}>
                {burger.name}
              </option>
            ))}
            ,
          </select>
          <div>
            <ItemDisplay
              name={selectedBurger.name}
              image={selectedBurger.image}
            />
          </div>
        </label>
      </form>
      <h3>Select a Side</h3>
      <form className="form">
        <label htmlFor="side_select">
          side{" "}
          <select id="side_select" onChange={handleSide}>
            <option valeur="">---</option>
            {sideList.map((side) => (
              <option key={side.id} value={side.id}>
                {side.name}
              </option>
            ))}
            ,
          </select>
          <div>
            <ItemDisplay name={selectedSide.name} image={selectedSide.image} />
          </div>
        </label>
      </form>
      <h3>Select a Drink</h3>
      <form className="form">
        <label htmlFor="drink_select">
          Drink{" "}
          <select id="drink_select" onChange={handleDrink}>
            <option valeur="">---</option>
            {drinkList.map((drink) => (
              <option key={drink.id} value={drink.id}>
                {drink.name}
              </option>
            ))}
            ,
          </select>
          <div>
            <ItemDisplay
              name={selectedDrink.name}
              image={selectedDrink.image}
            />
          </div>
        </label>
      </form>
      <h3>Select a Desert</h3>
      <form className="form">
        <label htmlFor="desert_select">
          Desert{" "}
          <select id="desert_select" onChange={handleDesert}>
            <option valeur="">---</option>
            {desertList.map((desert) => (
              <option key={desert.id} value={desert.id}>
                {desert.name}
              </option>
            ))}
            ,
          </select>
          <div>
            <ItemDisplay
              name={selectedDesert.name}
              image={selectedDesert.image}
            />
          </div>
        </label>
      </form>
    </div>
  );
}

export default ItemList;
