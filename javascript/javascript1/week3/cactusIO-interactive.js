//adding activities
var activities = [];
var activityTime = 0;
var dailyLimit = 120;
showStatus(activities);
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "TikToK", 40);
addActivity("23/7-18", "Facebook", 20);
console.log(activities);
showStatus(activities);
addActivity("23/7-18", "LinkedIn", 40);
//add Activity function //Usage limit
function addActivity(date, activity, duration) {
    if ((activityTime + duration) < dailyLimit) {
        activities.push({ date: date, activity: activity, duration: duration });
    } else {
        console.log('You have reached your limit, no more smartphoning for you!');
    }
}


//Show my status
function showStatus() {
    if (activities.length === 0) {
        console.log('Add some activities before calling showStatus');
    } else {
        activityTime = 0;
        for (i = 0; i < activities.length; i++) {
            activityTime = activityTime + activities[i].duration;
        }
        console.log(`You have added ${activities.length} activities. They amount to ${activityTime} min. of usage`);
    }
}
//most time spent activity Function
/*function moreSpentTime(){
}*/