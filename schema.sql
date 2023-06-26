
CREATE DATABASE ice_creamDB;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirpy` (
    `id` Int(11) AUTO_INCREMENT NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `body` VARCHAR(255) NOT NULL,
    `created_at`DATETIME NOT NULL,
    PRIMARY KEY (`id`)
)
