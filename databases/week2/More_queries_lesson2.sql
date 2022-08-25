-- 1.Get all the tasks assigned to users whose email ends in @spotify.com

/*Select *  from task 
inner join  user_task Where user_id in 
(Select id From user where email like '%@spotify.com')*/

SELECT *
  FROM task
  Inner JOIN user_task
  ON task.id = user_task.task_id
   Inner JOIN user
  ON user_task.user_id = user.id
  Where user.email like '%@spotify.com'

  -- 2.Get all the tasks for 'Donald Duck' with status 'Not started'
 select * 
 from user_task 
 JOIN user ON user.id=user_task.user_id
 JOIN task ON task.id= user_task.task_id
 join status on task.status_id = status.id
 WHERE user.name ="Donald Duck"
 AND status.name ="Not started";  

-- 3.Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select * 
from user_task
join user on user.id=user_task.user_id
join task on task.id= user_task.task_id
where user.name= 'Maryrose Meadows' AND  month(created)=10; 

-- 4.Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
 select month(created) AS Month , count(*)
from task 
GROUP BY Month;