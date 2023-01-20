var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // dbCon.connect();
    const queryString = 'SELECT * FROM messages';
    dbCon.query(queryString, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(result);
      }
    });
    // dbCon.end();
  },
  create: function (username, text, roomname, callback) {
    // dbCon.connect();
    const queryString = 'INSERT INTO messages(username, text, roomname) VALUES ?';
    const queryArgs = [username, text, roomname];
    dbCon.query(queryString, queryArgs, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(result);
      }
    });
    // dbCon.end();
  }
};
