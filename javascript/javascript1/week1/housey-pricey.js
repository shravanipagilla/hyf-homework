// creating arrays of width,depth,height,gardenSizeInM2 for both peter's and julia's values 
let width = [8, 5];
let depth = [10, 11];
let height = [10, 8];
let gardenSizeInM2 = [100, 70]
    // peter's house description
let volumeInMeters = width[0] * depth[0] * height[0];
let housePrice = (volumeInMeters * 2.5) * 1000 + (gardenSizeInM2[0] * 300);

if (housePrice > 2500000) {
    console.log(" Peter Paying more price: he has to pay :" + housePrice + "$");
} else {
    console.log(" Peter Paying less price: he is paying :" + housePrice + "$");

}

// Julia's house description
volumeInMeters = width[1] * depth[1] * height[1];
housePrice = (volumeInMeters * 2.5) * 1000 + (gardenSizeInM2[1] * 300);

if (housePrice > 1000000) {
    console.log(" Julia Paying more price: she has to pay :" + housePrice + "$");
} else {
    console.log(" Julia Paying less price: she is paying :" + housePrice + "$");

}