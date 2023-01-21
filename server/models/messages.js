var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const queryString = 'SELECT * FROM messages';
    db.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log('result[0]', results);
        callback(results);
      }
    });
  },
  create: function (data, callback) {
    const queryString = `INSERT INTO messages(username, text, roomname) VALUES ("${data.username}", "${data.message}", "${data.roomname}")`;
    db.query(queryString, (err) => {
      if (err) {
        throw err;
      } else {
        callback();
      }
    });
  }
};
