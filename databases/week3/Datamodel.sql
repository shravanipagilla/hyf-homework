create database mealSharing_db;
use mealSharing_db;

CREATE TABLE `Meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NULL,
  `when` datetime NOT NULL,
  `max_reservations` int(10)  NOT NULL,
  `price` decimal NOT NULL,
  `created_date` datetime  NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `number_of_guests` int(10)  NOT NULL,
   `meal_id` int(10) unsigned NOT NULL,
   `created_date` datetime  NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `title` varchar(255) NOT NULL,
   `description` text NOT NULL,
   `meal_id` int(10) unsigned NOT NULL,
   `created_date` datetime  NULL,
   `stars` int(10)   NULL,
  CONSTRAINT `fk_Meal2` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;