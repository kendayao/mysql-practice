
CREATE DATABASE chirpy_db;
USE chirpy_db;

CREATE TABLE chirps (
    id INT AUTO_INCREMENT NOT NULL,
    author VARCHAR(255) NOT NULL,
    body VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
)
