let firstWords = ["Easy", "Awesome", "Corporate", "Nice", "Excellent", "Extrodinary", "Highly", "Super", "Greater", "Creative"];
let secondWords = ["Corporation", "Industry", "Company", "COlleboration", "Features", "Performance", "Manufactured", "Quality", "City", "Things"];
const randomNumber = Math.floor(Math.random() * 10);
let startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log('New start up name is :' + startUpName + ' and it contains ' + startUpName.length + ' characters.')