const class07Students = [];

function addStudentToClass(studentName) {

    if (studentName == null || studentName === " ") {
        console.log("Student name must not be null");
    } else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    } else if (class07Students.length < 6 || studentName == "Queen") {
        class07Students.push(studentName);
    } else {
        return console.log("Cannot add more students to class 07");
    }

}

function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("bharath");
addStudentToClass("bharathi");
addStudentToClass("abcd")
addStudentToClass("bharath"); // student bharath is already in the class
addStudentToClass(" "); //Student name must not be null
addStudentToClass(); //Student name must not be null
addStudentToClass("xyz");
addStudentToClass("sai");
addStudentToClass("shravani")
addStudentToClass("simha"); // Cannot add more students to class 07
addStudentToClass("Queen"); // will be added

console.log(class07Students);
console.log(getNumberOfStudents());