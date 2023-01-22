var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((results) => {
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var data = [req.body.message, req.body.roomname, req.body.username];
    models.messages.create(data, (results) => {
      res.json(results);
    });
  } // a function which handles posting a message to the database
};
