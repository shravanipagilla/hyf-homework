// peter's house description
let width = 8;
let depth = 10;
let height = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = width * depth * height;
let housePrice = (volumeInMeters * 2.5) * 1000 + (gardenSizeInM2 * 300);

if (housePrice > 2500000) {
    console.log(" Peter Paying more price: he has to pay :" + housePrice + "$");
} else {
    console.log(" Peter Paying less price: he is paying :" + housePrice + "$");

}

// Julia's house description
width = 5;
depth = 11;
height = 8;
gardenSizeInM2 = 70;
volumeInMeters = width * depth * height;
housePrice = (volumeInMeters * 2.5) * 1000 + (gardenSizeInM2 * 300);

if (housePrice > 1000000) {
    console.log(" Julia Paying more price: she has to pay :" + housePrice + "$");
} else {
    console.log(" Julia Paying less price: she is paying :" + housePrice + "$");

}