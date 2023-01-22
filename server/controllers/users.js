var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((results) => {
      res.json(results);
    });
  },
  post: function (req, res) {
    models.users.create(req.body.username, (results) => {
      res.json(results);
    });

  }
};
