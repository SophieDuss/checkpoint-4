const connexion = require("../../config");

const db = connexion.promise();

const findAllSide = () => {
  return db.query("SELECT * FROM side");
};

const findSideByname = (name) => {
  return db.query("SELECT * FROM side WHERE name=?", [name]);
};

module.exports = {
  findAllSide,
  findSideByname,
};
