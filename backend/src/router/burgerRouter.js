const express = require("express");

const burgerRouter = express.Router();

const burgerController = require("../controllers/burgerController");

burgerRouter.get("/", burgerController.getAllBurger);
burgerRouter.get("/:name", burgerController.getBurgerByName);

module.exports = burgerRouter;
