import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";

function Menu() {
  const [menu, setMenu] = useState([]);
  const getAllMenu = () => {
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => setMenu(response.data));
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  return (
    <div>
      {menu.map((element) => (
        <MenuList image={element.image} menuName={element.name} />
      ))}
    </div>
  );
}

export default Menu;
