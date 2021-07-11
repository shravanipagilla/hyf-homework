const boughtCandyPrices = [];
var amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    switch (candyType) {
        case 'Sweet':
            boughtCandyPrices.push(candyType, weight * 0.5);
            break;
        case 'Chocolate':
            boughtCandyPrices.push(candyType, weight * 0.7);
            break;
        case 'Toffee':
            boughtCandyPrices.push(candyType, weight * 1.1);
            break;
        case 'Chewing-gum':
            boughtCandyPrices.push(candyType, weight * 0.03);
            break;
        default:
            console.log("Item not available");
            break;
    }
}

function canBuyMoreCandy() {

    let total = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        if (i % 2 !== 0) {
            total += boughtCandyPrices[i];
        }
    }
    if (total < amountToSpend) { return true; } else { return false; }

}

addCandy('Sweet', 21);
addCandy('Toffee', 30);
addCandy('Chocolate', 50);
addCandy('Chewing-gum', 45);
console.log(boughtCandyPrices);
canBuyMoreCandy();
let result = canBuyMoreCandy();
if (result === true) { console.log("You can buy more, so please do!"); } else { console.log("Enough candy for you!"); }