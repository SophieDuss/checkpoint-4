const connexion = require("../../config");

const db = connexion.promise();

const findAllDrink = () => {
  return db.query("SELECT * FROM drink");
};

const findDrinkByname = (name) => {
  return db.query("SELECT * FROM drink WHERE name=?", [name]);
};

const createOneDrink = (name) => {
  return db.query(`INSERT INTO drink (name) VALUES (?)`, [name]);
};

module.exports = {
  findAllDrink,
  findDrinkByname,
  createOneDrink,
};
