const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortWord(danishWords) {
    //reduce (), check through each pair of elements and returns the one element
    //which falls under the given condition
    return danishWords.reduce((a, b) => a.length <= b.length ? a : b)
}


console.log(shortWord(danishWords)); // returns 'ø'