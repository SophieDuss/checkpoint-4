const drinkModel = require("../models/drinkModel");

const drinkController = {
  getAllDrink: (req, res) => {
    drinkModel
      .findAllDrink()
      .then(([drink]) => res.send(drink))
      .catch((err) => console.warn(err));
  },

  getDrinkByName: (req, res) => {
    const { name } = req.params;
    drinkModel
      .findDrinkByname(name)
      .then(([drink]) => res.send(drink))
      .catch((err) => console.warn(err));
  },
};

module.exports = drinkController;
