CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   roomID INT NOT NULL AUTO_INCREMENT,
--   roomName varchar(50),
--   PRIMARY KEY(roomID)
-- );
CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  userID INT,
  text varchar(255),
  roomname varchar(50),
  PRIMARY KEY(id)
);


CREATE TABLE users (
  userID INT NOT NULL AUTO_INCREMENT,
  username varchar(250),
  PRIMARY KEY(userID)
);


  -- FOREIGN KEY(roomName) REFERENCES rooms(roomName),
  -- FOREIGN KEY(username) REFERENCES users(username)
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

