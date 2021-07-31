const seriesDurations = [{
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: "Money Heist",
        days: 2,
        hours: 1,
        minutes: 45,
    },
    {
        title: "Just add magic",
        days: 0,
        hours: 22,
        minutes: 30,
    },
    {
        title: "Lost in space",
        days: 1,
        hours: 17,
        minutes: 10,
    },
];

function logOutSeriesText() {
    var seriesDurationInHours = [];
    let lifespanInHours = 80 * 365 * 24;
    for (let i = 0; i < seriesDurations.length; i++) {
        seriesDurationInHours.push(((seriesDurations[i].days * 24) + seriesDurations[i].hours + (seriesDurations[i].minutes / 60)) * 100 / lifespanInHours);
    }
    //console.log(timeinhours);
    for (let i = 0; i < seriesDurationInHours.length; i++) {
        console.log(seriesDurations[i].title + ' took ' + seriesDurationInHours[i].toFixed(3) + ' % of my life');
    }
}

logOutSeriesText();
/*output: 
 Game of thrones took 0.010 % of my life
 Sopranos took 0.012 % of my life
 The Wire took 0.009 % of my life
 Money Heist took 0.007 % of my life
 Just add magic took 0.003 % of my life
 Lost in space took 0.006 % of my life */