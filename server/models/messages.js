var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // const queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username from messages LEFT OUTER JOIN users ON (messages.userID = users.id) ORDER BY messages.id desc';
    // db.query(queryString, (err, results) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     callback(results);
    //   }
    // });

    db.Message.findAll({
      attributes: ['username', 'text', 'roomname']
    })
      .then((results) => {
        callback(results);
      });
  },
  create: function (req, callback) {
    // const queryString = 'INSERT INTO messages (text, roomname, id) VALUES (?, ?, (SELECT id FROM users WHERE userName = ? LIMIT 1))';
    // db.query(queryString, data, (err, results) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     callback(results);
    //   }
    // });
    db.Message.create({
      username: req.body.username,
      roomname: req.body.roomname,
      text: req.body.message
    })
      .then((results) => {
        callback(results);
      });

  }
};
