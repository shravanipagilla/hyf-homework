const boughtCandyPrices = [];
var amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    switch (candyType) {
        case 'Sweet':
            return boughtCandyPrices.push(candyType, weight * 0.5);
            break;
        case 'Chocolate':
            return boughtCandyPrices.push(candyType, weight * 0.7);
            break;
        case 'Toffee':
            return boughtCandyPrices.push(candyType, weight * 1.1);
            break;
        case 'Chewing-gum':
            return boughtCandyPrices.push(candyType, weight * 0.03);
            break;
        default:
            return console.log("Item not available");
            break;
    }
}

function canBuyMoreCandy() {
    let canBuyMore;
    let prices = boughtCandyPrices.filter((element, index) => {
            return index % 2 !== 0;
        }) //All odd indexed values stored into prices a array
    var total = 0;
    for (var i in prices) {
        total += prices[i];
    } // for loop can be replaced by: prices.reduce((x, y) => x + y);
    if (total < amountToSpend)
        canBuyMoreCandy = true;
    else
        canBuyMoreCandy = false;
    return canBuyMoreCandy;
}
addCandy('Sweet', 21);
addCandy('Toffee', 30);
addCandy('Chocolate', 50);
addCandy('Chewing-gum', 45);
console.log(boughtCandyPrices);

let result = canBuyMoreCandy();
if (result == true)
    console.log("You can buy more, so please do!");
else
    console.log("Enough candy for you!");