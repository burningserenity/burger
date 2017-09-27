CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP
);
