const connexion = require("../../config");

const db = connexion.promise();

const findAllDrink = () => {
  return db.query("SELECT * FROM drink");
};

const findDrinkByname = (name) => {
  return db.query("SELECT * FROM drink WHERE name=?", [name]);
};

module.exports = {
  findAllDrink,
  findDrinkByname,
};
