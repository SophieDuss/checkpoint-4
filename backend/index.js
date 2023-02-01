require("dotenv").config();
const express = require("express");

const db = require("./config");

const app = require("./src/app");

app.use(express.json());

const port = parseInt(process.env.PORT ?? "8001", 10);

db.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-restricted-syntax
    console.log(err);
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Connecté à la database: ${process.env.DB_NAME}`);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on http://localhost:${port}`);
  }
});
