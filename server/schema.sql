CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomName varchar(10),
  PRIMARY KEY(id),
  UNIQUE (roomName)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY(id),
  UNIQUE (username)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  text varchar(100),
  roomname varchar(10),
  PRIMARY KEY(id)
);

  -- FOREIGN KEY(roomName) REFERENCES rooms(roomName),
  -- FOREIGN KEY(username) REFERENCES users(username)
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

