const connexion = require("../../config");

const db = connexion.promise();

const findAllDesert = () => {
  return db.query("SELECT * FROM desert");
};

const findDesertByname = (name) => {
  return db.query("SELECT * FROM desert WHERE name=?", [name]);
};

const createOneDesert = (name) => {
  return db.query(`INSERT INTO desert (name) VALUES (?)`, [name]);
};

module.exports = {
  findAllDesert,
  findDesertByname,
  createOneDesert,
};
