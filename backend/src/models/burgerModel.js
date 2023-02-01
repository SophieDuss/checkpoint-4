const connexion = require("../../config");

const db = connexion.promise();

const findAllBurger = () => {
  return db.query("SELECT * FROM burger");
};

const findBurgerByname = (name) => {
  return db.query("SELECT * FROM burger WHERE name=?", [name]);
};

module.exports = {
  findAllBurger,
  findBurgerByname,
};
