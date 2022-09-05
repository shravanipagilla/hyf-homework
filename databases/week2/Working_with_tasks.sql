
-- 1.Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO `task`(title, description, created, updated, due_date, status_id, user_id)
VALUES ('Learn about databases', 'MongoDB, CouchDB, etc.', '2018-10-20 01:41:53', '2018-10-04 07:19:56', '2018-12-23 10:13:42', 3,3);

-- 2.Change the title of a task:
  UPDATE `task`
SET  title = 'updating the title'
WHERE id = 1 ;

-- 3.Change a task due date
UPDATE `task`
SET task.due_date = '2022-03-16'
WHERE id = 1;

-- 4.Change a task status

UPDATE `task`
SET task.status_id = 2
Where task.id= 12

-- 5.Mark a task as complete

UPDATE `task`
SET task.status_id = (SELECT id from `status` Where name='Done')
Where task.id= 1


-- 6.Delete a task
DELETE  FROM task
 WHERE id = 35;

 