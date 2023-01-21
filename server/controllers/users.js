var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  get: function (req, res) {
    res.writeHead(200, headers);
    models.users.getAll((results) => {
      res.end(JSON.stringify(results));
    });
  },
  post: function (req, res) {
    res.writeHead(201, headers);
    models.users.create(req.body.username, () => {
      res.end();
    });

  }
};
