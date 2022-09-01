1.Select the names and phones of all users;

SELECT `user`.`name`, `user`.`phone`
FROM `hyf_db`.`user`

2.Select the name of the user with id=10;
 
SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE  `user`.`id`=10;

3.Find how many users exist in the database;
/*SELECT * 
FROM `hyf_db`.`user*/
SHOW COLUMNS FROM `user`;
SELECT COUNT(`id`) FROM `user`;

4.Select the names of the first 5 users in the database;
/*SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE  `user`.`id`<= 5;*/

SELECT `name` FROM `user` LIMIT 5;


5.Select the names of the last 3 users in the database;
/*SELECT `user`.`name`
FROM `hyf_db`.`user`
WHERE `user`.`id`>= 10;*/

SELECT COUNT(`id`) FROM `user`;
SELECT 11-3;
SELECT `name` FROM `user` LIMIT 8,11;
​
-- SELECT `name` FROM `user` ORDER BY `name` DESC LIMIT 3;

6.Sum all the ids in the user table;
SELECT SUM(`id`)
FROM `hyf_db`.`user`
WHERE `id`
-- SELECT SUM(`id`) AS `SUM_USERS_ID` FROM `user`;


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

SELECT `task`.`title`, `user`.`name`
FROM `task`
INNER JOIN `user_task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `user`
  ON `user_task`.`user_id` = `user`.`id`
WHERE `user`.`name` like '%Maryrose%';

10.Find how many tasks each user is responsible for;


/*SELECT `user`.`name`, count(`user_task`.`user_id`) AS NUMBER_of_TASKS
FROM `task`
INNER JOIN `user_task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `user`
  ON `user_task`.`user_id` = `user`.`id`
GROUP BY `user_task`.`user_id`, `user`.`name`;*/
​
SELECT `user`.`name`, count(`user_task`.`user_id`) AS NUMBER_of_TASKS
FROM `task`
INNER JOIN `user_task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `user`
  ON `user_task`.`user_id` = `user`.`id`
  WHERE `task`.`created` > '2017-10-01 06:54:16'
GROUP BY `user_task`.`user_id`, `user`.`name`
HAVING NUMBER_of_TASKS>2
LIMIT 5;

-- 11.Find how many tasks with a status=Done each user is responsible for;
SELECT `user`.`name`, count(`task`.`status_id`), `status`.`name`
FROM `user`
INNER JOIN `user_task`
  ON `user_task`.`user_id` = `user`.`id`
INNER JOIN `task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `status`
  ON `task`.`status_id` = `status`.`id`
  WHERE `status`.`name` = 'Done'
  GROUP BY `task`.`status_id`, `user`.`name`, `status`.`name`;
  
