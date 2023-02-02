import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemDisplay from "./ItemDisplay";

function Menu() {
  const [menuList, setMenuList] = useState([]);
  const [selectedMenu, setselectedMenu] = useState();

  const getAllMenu = () => {
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => setMenuList(response.data));
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  const handleOnChange = (e) => {
    setselectedMenu(e.target.value);
  };

  return (
    <div>
      <h3>Select a Menu</h3>
      <form className="form">
        <label htmlFor="menu_select">
          Menu{" "}
          <select id="menu_select" onChange={handleOnChange}>
            <option value="">---</option>
            {menuList.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {menu.name}
              </option>
            ))}
            ,
          </select>
          <div>
            <ItemDisplay name={selectedMenu.name} image={selectedMenu.image} />
          </div>
        </label>
      </form>
    </div>
  );
}

export default Menu;
