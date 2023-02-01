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
};

module.exports = desertController;
