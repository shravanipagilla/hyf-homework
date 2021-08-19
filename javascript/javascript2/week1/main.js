console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    const productsList = document.getElementById("list");
    for (let i = 0; i < products.length; i++) {
        // Create the list item:
        const item = document.createElement("li");

        // Formatting product details to print:
        item.innerHTML =
            "<h2>" + products[i].name +
            "<br> " + "</h2>" +
            " price:" +
            products[i].price +
            " <br> " +
            " rating:" +
            products[i].rating;

        // Add the product to productsList:
        productsList.appendChild(item);
    }


    return productsList;
}

renderProducts(products); // This should create the ul and the li's with the individual products details