var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username from messages LEFT OUTER JOIN users ON (messages.userID = users.userID) ORDER BY messages.id desc';
    db.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  },
  create: function (data, callback) {
    const queryString = 'INSERT INTO messages (text, roomname, userID) VALUES (?, ?, (SELECT userID FROM users WHERE userName = ? LIMIT 1))';
    db.query(queryString, data, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  }
};
