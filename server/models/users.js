var db = require('../db');

dbCon = db.dbConnection;

module.exports = {
  getAll: function (callback) {
    // dbCon.connect();
    const queryString = 'SELECT username FROM users';
    dbCon.query(queryString, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
    // dbCon.end();
  },
  create: function (val, callback) {
    // dbCon.connect();
    const queryString = `INSERT INTO users(username) VALUES ("${val})`;
    dbCon.query(queryString, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('created user successfully');
        callback(results);
      }
    });
    // dbCon.end();
  }
};
