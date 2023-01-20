var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log(req, res);
    models.users.getAll((results) => {
      res.write(202, results);
      res.end();
    });
  },
  post: function (req, res) {
    console.log('req.data', req.data);
    models.users.create(req.data, (result) => {
      res.end();
    });
  }
};
