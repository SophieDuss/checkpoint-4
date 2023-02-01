const connexion = require("../../config");

const db = connexion.promise();

const findAllDesert = () => {
  return db.query("SELECT * FROM desert");
};

const findDesertByname = (name) => {
  return db.query("SELECT * FROM desert WHERE name=?", [name]);
};

module.exports = {
  findAllDesert,
  findDesertByname,
};
