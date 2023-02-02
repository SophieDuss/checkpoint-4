const desertModel = require("../models/desertModel");

const desertController = {
  getAllDesert: (req, res) => {
    desertModel
      .findAllDesert()
      .then(([desert]) => res.send(desert))
      .catch((err) => console.warn(err));
  },

  getDesertByName: (req, res) => {
    const { name } = req.params;
    desertModel
      .findDesertByname(name)
      .then(([desert]) => res.send(desert))
      .catch((err) => console.warn(err));
  },

  createDesert: (req, res) => {
    const name = req.body;
    desertModel
      .createOneDesert(name)
      .then((result) => res.status(201).send(`${result.insertId}`));
  },
};

module.exports = desertController;
