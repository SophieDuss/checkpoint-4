const connexion = require("../../config");

const db = connexion.promise();

const findAllMenu = () => {
  return db.query("SELECT * FROM menu");
};

const findMenuByname = (name) => {
  return db.query("SELECT * FROM menu WHERE name=?", [name]);
};

const deleteOne = (id) => {
  return db.query("DELETE FROM menu WHERE id=?", [id]).then((res) => res);
};

module.exports = {
  findAllMenu,
  findMenuByname,
  deleteOne,
};
