var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // const queryString = 'SELECT * FROM users';
    // db.query(queryString, (err, results) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     callback(results);
    //   }
    // });

    db.User.findAll({
      attributes: ['username']
    })
      .then((results) => {
        callback(results);
      });
  },
  create: function (req, callback) {
    // const queryString = `INSERT INTO users(username) VALUES ('${username}')`;
    // db.query(queryString, (err) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback();
    //   }
    // });

    db.User.create({
      username: req.body.username
    })
      .then((results) => {
        callback(results);
      });
  }
};
