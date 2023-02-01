const express = require("express");

const menuRouter = express.Router();

const menuController = require("../controllers/menuControllers");

menuRouter.get("/", menuController.getAllMenu);
menuRouter.get("/:name", menuController.getMenuByName);

module.exports = menuRouter;
