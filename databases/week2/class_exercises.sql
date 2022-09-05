-- 1.Get all the tasks assigned to Pavel;

    SELECT `user`.`name`, `task`.`title`, `status`.`name` AS task_status
    FROM `user`
    INNER JOIN `user_task`
    ON `user_task`.`user_id` = `user`.`id`
    INNER JOIN `task`
    ON `user_task`.`task_id` = `task`.`id`
    INNER JOIN `status`
    ON `task`.`status_id` = `status`.`id`
    WHERE `user`.`name` like '%Pavel%';
  
-- 2.Find how many tasks each user is responsible for:
SELECT `user`.`name`, count(`user_task`.`user_id`) AS NUMBER_of_TASKS
FROM `task`
INNER JOIN `user_task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `user`
  ON `user_task`.`user_id` = `user`.`id`
GROUP BY `user_task`.`user_id`, `user`.`name`;
​
-- 3.Find how many tasks with a status=Done each user is responsible for;
SELECT `user`.`name`, count(`user_task`.`user_id`) AS NUMBER_of_TASKS
FROM `task`
INNER JOIN `user_task`
  ON `user_task`.`task_id` = `task`.`id`
INNER JOIN `user`
  ON `user_task`.`user_id` = `user`.`id`
INNER JOIN `status`
  ON `task`.`status_id` = `status`.`id` 
WHERE `status`.`name` = 'Done'
GROUP BY `user_task`.`user_id`, `user`.`name`;
