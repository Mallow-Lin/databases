var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log(req, res);
    models.messages.getAll((results) => {
      res.write(202, results);
      res.end();
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req, res);
    models.messages.create(req.data, (result) => {
      res.end();
    });
  } // a function which handles posting a message to the database
};
