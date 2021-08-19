const buttonClickMe = document.getElementById("btnClickMe");
const spiritAnimals = ["Wolf", "Puppy", "Butterfly", "Cat", "Turtle", "Lion", "Deer", "Rabbit", "Horse", "Tiger", "Peacock", "Bee", "Panther"];

const h2Text = document.getElementById("spiritName");

const getSpiritAnimal = function() {
    var randomAnimal = Math.floor(Math.random() * 10); //sets random animal index from array
    const userName = document.getElementById("name").value.trim();
    if (userName === '') {
        h2Text.innerHTML = "Please enter your name";

    } else {
        h2Text.innerHTML = userName + '-' + spiritAnimals[randomAnimal];
    }
    document.getElementById('name').value = ''; //resets the text box

}
buttonClickMe.addEventListener('click', getSpiritAnimal);