const express = require("express");

const drinkRouter = express.Router();

const drinkController = require("../controllers/drinkController");

drinkRouter.get("/", drinkController.getAllDrink);
drinkRouter.get("/:name", drinkController.getDrinkByName);

module.exports = drinkRouter;
