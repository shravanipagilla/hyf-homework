-- Meal queries
-- 1.get all meals..

select * from Meal;

-- 2.add anew meal
insert into Meal (title,description,location,`when`,max_reservations,price,created_date) 
values('pizza','meat with salat','køge','2022-04-01',5,80,'2010-05-05');


-- 3.Get a meal with any id, fx 1
select * 
from Meal 
where id = 3;

-- 4.Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET  price= 90, title = 'burger'
WHERE id = 2;

-- 5.Delete a meal with any id, fx 1
delete from Meal 
where id = 4;

-- Reservation queries..
-- 1.get all Reservation..
select * from Reservation;

 -- 2.add anew Reservation..
 insert into Reservation (number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
 values(3,4,'2022-06-15','98765432','devi','devi@123');

 -- 3.get a reservation with any id, fx 1
 SELECT * 
 FROM Reservation
 WHERE id = 2;

 -- 4. update a reservation with any  id, fx 1
UPDATE Reservation 
SET  contact_name= 'sanne', contact_email = 'sanne@143'
WHERE id = 2;


-- 5.Delete a Reservation  with any id, fx 1
delete  from Reservation where id = 4; 

-- Review queries.. 

-- 1.Get all reviews
select * from Review;

-- 2.Add a new review
insert into Review (title,description,meal_id,created_date,stars)
 values('rice','good',1,'2022-10-14','4');

-- 3.Get a review with any id, fx 1
select * from Review where id = 7;
-- 4.Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET  title= 'egg rice', stars = 5
WHERE id = 1;
-- 5.Delete a review with any id, fx 1

delete  from Review 
where id = 2; 


-- 1-Get meals that has a price smaller than a specific price fx 90
select * 
from Meal 
where price < 90;

-- 2.Get meals that still has available reservations
SELECT
    Meal.title,
    Meal.max_reservations, sum(Reservation.number_of_guests) AS booked_spots
FROM Meal
    JOIN Reservation ON Meal.id = Reservation.meal_id
GROUP BY Reservation.meal_id
HAVING Meal.max_reservations > booked_spots;

-- 3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from Meal 
where title like '%ken%' ;

--4.Get meals that has been created between two dates
SELECT *
FROM Meal 
WHERE created_date BETWEEN '2009-10-12' AND '2023-8-10';

--5.Get only specific number of meals fx return only 5 meals
SELECT *  
FROM Meal LIMIT 5;

-- 6.Get the meals that have good reviews
SELECT Meal.*,Review.stars AS stars_recieved
FROM Meal
Join Review on Review.meal_id = Meal.id  
WHERE Review.stars > 3;

-- 7.Get reservations for a specific meal sorted by created_date

SELECT Meal.title,Meal.price
FROM Meal
    INNER JOIN Reservation ON Reservation.meal_id = Meal.id
WHERE Meal_id = 2
ORDER BY Reservation.created_date ASC;

-- 8.Sort all meals by average number of stars in the reviews

SELECT AVG(Review.stars)  AS average
FROM Meal
INNER JOIN Review ON Meal.id = Review.meal_id
GROUP BY Review.meal_id
ORDER BY AVG(Review.stars); 