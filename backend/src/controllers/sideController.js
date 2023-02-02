const sideModel = require("../models/sideModel");

const sideController = {
  getAllSide: (req, res) => {
    sideModel
      .findAllSide()
      .then(([side]) => res.send(side))
      .catch((err) => console.warn(err));
  },

  getSideByName: (req, res) => {
    const { name } = req.params;
    sideModel
      .findSideByname(name)
      .then(([side]) => res.send(side))
      .catch((err) => console.warn(err));
  },

  createSide: (req, res) => {
    const name = req.body;
    sideModel
      .createOneSide(name)
      .then((result) => res.status(201).send(`${result.insertId}`));
  },
};

module.exports = sideController;
