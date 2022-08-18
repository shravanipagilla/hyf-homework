1.Select the names and phones of all users;

SELECT `user`.`name`, `user`.`phone`
FROM `hyf_db`.`user`

2.Select the name of the user with id=10;
 
SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE  `user`.`id`=10;

3.Find how many users exist in the database;
SELECT * 
FROM `hyf_db`.`user`

4.Select the names of the first 5 users in the database;
SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE  `user`.`id`<= 5;


5.Select the names of the last 3 users in the database;
SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE `user`.`id`>= 10;

6.Sum all the ids in the user table;
SELECT SUM(`id`)
FROM `hyf_db`.`user`
WHERE `id`

7.Select all users and order them alphabetically by name;
SELECT `user`.`name`
FROM `hyf_db`.`user`
ORDER BY `user`.`name` ASC

8.Find all tasks that include SQL either on the title or on the description;

SELECT `title`, `due_date`
FROM  `hyf_db`.`task`
WHERE `task`.`description` like '%SQL%' OR
      `task`.`title` like '%SQL%';

9.Find the title of all tasks that the user Maryrose is responsible for;
SELECT  `task`.`title` AS Maryrose
FROM `hyf_db`.`task`

10.Find how many tasks each user is responsible for;
SELECT *
FROM `hyf_db`.`task` AS `user`

-- 11.Find how many tasks with a status=Done each user is responsible for;
