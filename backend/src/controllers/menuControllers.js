const menuModel = require("../models/menuModel");

const menuController = {
  getAllMenu: (req, res) => {
    menuModel
      .findAllMenu()
      .then(([menu]) => res.send(menu))
      .catch((err) => console.warn(err));
  },

  getMenuByName: (req, res) => {
    const { name } = req.params;
    menuModel
      .findMenuByname(name)
      .then(([menu]) => res.send(menu))
      .catch((err) => console.warn(err));
  },
};

module.exports = menuController;
