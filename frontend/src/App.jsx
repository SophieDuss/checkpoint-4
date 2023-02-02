import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <body>
      <div className="logo" />
      <div className="App">
        <div className="wrap">
          <h1>Welcome to Mc Donald's</h1>
          <h2>Please make your choice</h2>
        </div>
        <div className="button_wrap">
          <Link to="/menu">
            <button type="button">SELECT A MENU</button>
          </Link>
          <Link to="/items">
            <button type="button">MAKE YOUR OWN MENU</button>
          </Link>
          <Link to="/addmeal">
            <button type="button">ADD YOUR OWN ITEMS</button>
          </Link>
          <Link to="/deletemeal">
            <button type="button">DELETE ITEMS</button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default App;
