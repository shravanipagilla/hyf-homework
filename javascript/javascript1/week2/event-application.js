//getEventWeekDay returns the name of the day falling on given number of days
function getEventWeekday(eventDay) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayIndex = (today.getDay() + eventDay) % 7;

    return days[dayIndex];
}
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"