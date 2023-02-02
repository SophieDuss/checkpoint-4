import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDisplay from "./ItemDisplay";

function DeleteMeal() {
  const [menuList, setMenuList] = useState([]);
  const [selectedMenu, setselectedMenu] = useState("");
  const { id } = useParams();

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

  const handleOnClick = () => {
    axios
      .delete(`http://localhost/5000/api/menu/${id}`)
      .then(alert("menu deleted"));
  };
  return (
    <div>
      <h3>Select the Menu You wish to Delete</h3>
      <form className="form">
        <label htmlFor="menu_select">
          Menu{" "}
          <select id="menu_select" onChange={handleOnChange}>
            <option value="">---</option>
            {menuList.map((menu) => (
              <option key={menu.id} value={menu.name}>
                {menu.name}
              </option>
            ))}
            ,
          </select>
          <button type="button" onClick={handleOnClick}>
            DELETE
          </button>
        </label>
      </form>
      <div>
        <ItemDisplay name={selectedMenu.name} image={selectedMenu.image} />
      </div>
    </div>
  );
}

export default DeleteMeal;
