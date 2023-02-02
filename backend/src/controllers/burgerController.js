const burgerModel = require("../models/burgerModel");

const burgerController = {
  getAllBurger: (req, res) => {
    burgerModel
      .findAllBurger()
      .then(([burger]) => res.send(burger))
      .catch((err) => console.warn(err));
  },

  getBurgerByName: (req, res) => {
    const { name } = req.params;
    burgerModel
      .findBurgerByname(name)
      .then(([burger]) => res.send(burger))
      .catch((err) => console.warn(err));
  },

  createBurger: (req, res) => {
    const name = req.body;
    burgerModel
      .createOne(name)
      .then((result) => res.status(201).send(`${result.insertId}`));
  },
};

module.exports = burgerController;
