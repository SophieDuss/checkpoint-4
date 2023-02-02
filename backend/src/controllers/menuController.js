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

  deleteMenu: (req, res, next) => {
    const { id } = req.params;
    menuModel
      .deleteOne(id)
      .then(() => {
        return res.status(200).send(`menu ${id} deleted`);
      })
      .catch((err) => next(err));
  },
};

module.exports = menuController;
