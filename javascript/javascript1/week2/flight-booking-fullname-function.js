// Function getFullaname() returns full name with/without Formal


function getFullname(firstname, surname, useFormalName) {
    if (!firstname) {
        throw new Error("Firstname  must not be null");
    } else if (!surname) {
        throw new Error("Surname must not be null");
    } else if (!useFormalName) {
        return "Lord" + " " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}

var fullname1 = getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"
var fullname2 = getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"

console.log(fullname1);
console.log(fullname2);

/* Answer to the Question 
'I add one more argument named 'isMale' to the function, based on this boolian value
 suffix Lord or Lady to fullName'*/

function getFullname(firstname, surname, useFormalName, isMale) {
    firstname
    if (!firstname) {
        throw new Error("Firstname  must not be null");
    } else if (!surname) {
        throw new Error("Surname must not be null");
    } else if (!useFormalName) {
        return firstname + " " + surname;
    }
    if (useFormalName && isMale) {
        return "Lord" + " " + firstname + " " + surname;
    } else if (useFormalName && !isMale) {
        return "Lady" + " " + firstname + " " + surname;
    }

}

var fullname1 = getFullname("Benjamin", "Hughes", true, false); // returns "Lady Benjamin Hughes"