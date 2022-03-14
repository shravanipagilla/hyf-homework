// @ts-nocheck
console.log("Script loaded");

let setMaxPrice;
const products = getAvailableProducts();
console.log(products);
renderProducts(products);
function renderProducts(products) {
  const ul_tag = document.querySelector("#ulList");
  ul_tag.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const li_element1 = document.createElement("li");
    const h1_element = document.createElement("h1");
    h1_element.innerHTML = products[i].name;
    ul_tag.appendChild(li_element1);
    li_element1.appendChild(h1_element);

    const li_element2 = document.createElement("li");
    li_element2.innerHTML = "price: " + products[i].price;
    ul_tag.appendChild(li_element2);

    const li_element3 = document.createElement("li");
    li_element3.innerHTML = "rating: " + products[i].rating;
    ul_tag.appendChild(li_element3);
  }
}

document
  .getElementById("srch_by_product")
  .addEventListener("input", (event) => {
    inputSearch = document
      .getElementById("srch_by_product")
      .value.toLowerCase();
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(inputSearch)
    );
    console.log(filterProducts);
    renderProducts(filterProducts);
  });

document
  .getElementById("srch_by_max_price")
  .addEventListener("input", (event) => {
    inputSearch = document.getElementById("srch_by_max_price").value;
    maxPrice = parseInt(inputSearch);
    setMaxPrice = products.filter((product) => product.price < maxPrice);
    console.log(setMaxPrice);
    renderProducts(setMaxPrice);
  });

document.getElementById("srch_by_rating").addEventListener("input", (event) => {
  inputSearch = document.getElementById("srch_by_rating").value;
  maxRating = parseInt(inputSearch);
  const rating = products.filter((product) => product.rating < maxRating);
  renderProducts(rating);
});

let select_tag = document.getElementById("product_order");
select_tag.addEventListener("change", (event) => {
  let value = select_tag.options[select_tag.selectedIndex].value;
  if (value === "highToLowPrice") {
    const highTolowpriceProducts = products.sort(function (a, b) {
      return b.price - a.price;
    });
    renderProducts(highTolowpriceProducts);
  }
  if (value === "lowToHighPrice") {
    const lowToHighpriceProducts = products.sort(function (a, b) {
      return a.price - b.price;
    });
    renderProducts(lowToHighpriceProducts);
  }
  if (value === "highToLowRating") {
    const highToLowRatingProducts = products.sort(function (a, b) {
      return b.rating - a.rating;
    });
    renderProducts(highToLowRatingProducts);
  }
  if (value === "lowToHighRating") {
    const lowToHighRatingProducts = products.sort(function (a, b) {
      return a.rating - b.rating;
    });
    renderProducts(lowToHighRatingProducts);
  }
});
