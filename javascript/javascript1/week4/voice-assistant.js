let personName = null;
let toDo = [];

function getReply(command) {

    //----------My name command-------------
    if (command.includes("Hello my name is")) {
        personName = command.split(' ').splice(-1);
        return "Nice to meet you  " + personName;
    }

    //------------- What is my name command--------
    if (command.includes("What is my name")) {
        if (personName !== null) {
            return "Your name is " + personName;

        } else {
            return "You did not say your name";
        }
    }
    //------------- Adding todos -------------
    if (command.includes("Add")) {
        let todoItem = command.split('Add').pop().split('to my todo').splice(0, 1);
        todoItem = todoItem.toString().trim();
        toDo.push(todoItem);
        return todoItem + " added to your todo";
    }

    //-------------Remove todo command-----------
    if (command.includes("Remove")) {
        let todoItem = command.split('Remove').pop().split('from my todo').splice(0, 1);
        todoItem = todoItem.toString().trim();
        const index = toDo.indexOf(todoItem);
        if (index > -1) {
            toDo.splice(index, 1);
            return "Removed " + todoItem + " from your TodoList";

        } else {
            return todoItem + " not found in your todo-list";
        }
    }

    //----- return all todos-----------
    if (command.includes("on my todo?")) {

        if (toDo.length > 1) {
            let noOfItems = toDo.length;
            let lastItem = toDo.pop(); //Last item removed from the toDo array 
            return "You have " + noOfItems + " items-" + toDo + " and " + lastItem;
        }
        if (toDo.length == 1) {
            return "You have 1 item-" + toDo;
        } else {
            return "Your todo list is empty";
        }

    }
    //-------------Date command---------
    if (command.includes("today?")) {
        var today = new Date();
        let currentMonth = today.toLocaleString('default', { month: 'long' }); //converts numerical to Equalent month
        return today.getDate() + '. of ' + currentMonth + ' ' + today.getFullYear();
    }

    //--------------Simple mathematical commands------------

    if (command.includes("What is")) {
        const mathArray = command.match(/(\d+)\s*([\+\-\*\/\%])\s*(\d+)/);
        switch (mathArray[2]) {
            case '+':
                return parseInt(mathArray[1]) + parseInt(mathArray[3]);
            case '-':
                return parseInt(mathArray[1]) - parseInt(mathArray[3]);
            case '*':
                return parseInt(mathArray[1]) * parseInt(mathArray[3]);
            case '/':
                return parseInt(mathArray[1]) / parseInt(mathArray[3]);
            case '%':
                return parseInt(mathArray[1]) % parseInt(mathArray[3]);
            default:
                return "please say correct math operation"
        }
    }

    //--------------Setting timer-------- 
    if (command.includes("Set a timer")) {

        let commandArray = command.split(' ');
        let minutes = commandArray[commandArray.length - 2];
        let milliSeconds = minutes * 60 * 1000; //minutes converted to milliseconds
        setTimeout(function() {
            console.log("Timer done"); //this will logged after given minutes
        }, milliSeconds);
        return "Timer set for " + minutes + " minutes";
    }

}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));

console.log(getReply("What is my name"));
console.log(getReply("Add singing in the shower room to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add 10 minutes workout to my todo"));
console.log(getReply("Add buy some milk to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Remove walking from my todo")); //your todo item not found
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3+3"));
console.log(getReply("Set a timer for 1 minutes"));