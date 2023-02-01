const express = require("express");

const menuRouter = require("./menuRouter");
const burgerRouter = require("./burgerRouter");
const sideRouter = require("./sideRouter");
const drinkRouter = require("./drinkRouter");
const desertRouter = require("./desertRouter");

const router = express.Router();

router.use("/menu", menuRouter);
router.use("/burger", burgerRouter);
router.use("/side", sideRouter);
router.use("/drink", drinkRouter);
router.use("/desert", desertRouter);

module.exports = router;
