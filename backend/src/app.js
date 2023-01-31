const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3001",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", router);
app.use("/", (req, res) => {
  res.send("welcome  to sophie's checkpoint");
});

module.exports = app;
