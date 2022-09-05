
-- Create database 

CREATE DATABASE IF NOT EXISTS school_db;

-- Check Out database

USE school_db;

-- create Class table 

CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins_date` datetime NOT NULL,
  `ends_date` datetime NULL  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Student table

CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,  
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create Index on Name of Student table

CREATE INDEX idx_name ON Student (name);

-- Add new column status to Class table with enum values

ALTER TABLE Class
  ADD status ENUM('not-started', 'ongoing', 'finished')
AFTER ends_date;
