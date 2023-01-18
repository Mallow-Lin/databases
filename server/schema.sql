CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20),
  messageText VARCHAR(100),
  roomName VARCHAR(10),
  -- FOREIGN KEY(roomName) REFERENCES rooms(roomName)
);

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  roomName VARCHAR(10),
  messageData SET(),
  -- FOREIGN KEY(roomName) REFERENCES messages(roomName)
)

create TABLE friends (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20),
  friendsList SET(),
  -- FOREIGN KEY(username) REFERENCES messages(username)

)
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

