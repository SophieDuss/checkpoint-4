import AddMeal from "@components/AddMeal";
import DeleteMeal from "@components/DeleteMeal";
import ItemList from "@components/ItemList";
import Menu from "@components/Menu";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/addmeal" element={<AddMeal />} />
        <Route path="/deletemeal" element={<DeleteMeal />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
