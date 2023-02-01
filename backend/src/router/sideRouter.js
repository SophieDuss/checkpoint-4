const express = require("express");

const sideRouter = express.Router();

const sideController = require("../controllers/sideController");

sideRouter.get("/", sideController.getAllSide);
sideRouter.get("/:name", sideController.getSideByName);

module.exports = sideRouter;
