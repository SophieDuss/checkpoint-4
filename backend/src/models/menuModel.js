const connexion = require("../../config");

const db = connexion.promise();

const findAllMenu = () => {
  return db.query("SELECT * FROM menu");
};

const findMenuByname = (name) => {
  return db.query("SELECT * FROM menu WHERE name=?", [name]);
};

module.exports = {
  findAllMenu,
  findMenuByname,
};
