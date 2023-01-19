CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName varchar(10),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  messageText varchar(100),
  roomID INT NOT NULL,
  userID INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(roomID) REFERENCES rooms(id),
  FOREIGN KEY(userID) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

