const express = require("express");

const desertRouter = express.Router();

const desertController = require("../controllers/desertController");

desertRouter.get("/", desertController.getAllDesert);
desertRouter.get("/:name", desertController.getDesertByName);
desertRouter.post("/", desertController.createDesert);

module.exports = desertRouter;
