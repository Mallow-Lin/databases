var models = require('../models');
const { User } = require('../db/index');

module.exports = {
  get: function (req, res) {
    models.users.getAll((results) => {
      res.json(results);
    });
  },
  post: function (req, res) {
    models.users.create(req, (results) => {
      res.json(results);
    });

  }
};
