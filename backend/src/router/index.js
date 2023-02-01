const express = require("express");

const menuRouter = require("./menuRouter");

const router = express.Router();

router.use("/menu", menuRouter);

module.exports = router;
