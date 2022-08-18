DROP DATABASE IF EXISTS hyf_db;

CREATE DATABASE IF NOT EXISTS hyf_db;

USE hyf_db;

-- 1.Find out how many tasks are in the task table
SELECT * 
FROM `hyf_db`.`task`;

-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT due_date 
FROM `hyf_db`.`task`
WHERE due_date IS  NULL;

-- 3.Find all the tasks that are marked as done
SELECT `title`
FROM `hyf_db`.`task`
WHERE `task`.`status_id`= '3'

-- 4.Find all the tasks that are not marked as done
SELECT `title`
FROM `hyf_db`.`task`
WHERE `task`.`status_id` != '3'

-- 5.Get all the tasks, sorted with the most recently created first
SELECT *
FROM `hyf_db`.`task`
ORDER BY `created` DESC;
-- 6.Get the single most recently created task.
SELECT *
FROM `hyf_db`.`task`
ORDER BY `task`.`created` DESC
LIMIT 0,1;
-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT `title`, `due_date`
FROM  `hyf_db`.`task`
WHERE `task`.`description` like '%database%' OR
      `task`.`title` like '%database%';
-- 8.Get the title and status (as text) of all tasks
SELECT `title`,`name`
FROM `hyf_db`.`task`, `hyf_db`.`status`
WHERE `task`.`status_id`= `status`.`id`


-- 9.Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(name)
FROM `hyf_db`.`status`, `hyf_db`.`task`
WHERE status.id= task.status_id


-- 10.Get the names of all statuses, sorted by the status with most tasks first
SELECT `status`.`name`
FROM `task`
JOIN `status`
ON  `task`.`status_id`= `status`.`id`
GROUP BY `status`.`name`
ORDER BY COUNT(*) DESC;