var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '5200', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('users', {
  user: Sequelize.STRING,
});

var Message = db.define('messages', {
  user: Sequelize.STRING,
  text: Sequelize.STRING,
  room: Sequelize.STRING,
});

module.exports.Message = Message;
module.exports.User = User;
module.exports.db = db;