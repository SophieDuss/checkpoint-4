const express = require("express");

const menuRouter = express.Router();

const menuController = require("../controllers/menuController");

menuRouter.get("/", menuController.getAllMenu);
menuRouter.get("/:name", menuController.getMenuByName);
menuRouter.delete("/:id", menuController.deleteMenu);

module.exports = menuRouter;
