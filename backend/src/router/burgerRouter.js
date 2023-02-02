const express = require("express");

const burgerRouter = express.Router();

const burgerController = require("../controllers/burgerController");

burgerRouter.get("/", burgerController.getAllBurger);
burgerRouter.get("/:name", burgerController.getBurgerByName);
burgerRouter.post("/", burgerController.createBurger);

module.exports = burgerRouter;
