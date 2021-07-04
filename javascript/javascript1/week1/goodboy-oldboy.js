const dogYearOfBirth = 2021;
const dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let dogYearOrHumanYear = "dog";
let resultOrInDogYear = true;
if (!resultOrInDogYear) {
    dogYear *= 7;
    dogYearOrHumanYear = "human";
}
console.log(" Your dog will be " + dogYear + " " + dogYearOrHumanYear + " years old in " + dogYearFuture);