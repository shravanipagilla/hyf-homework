//Let's get a bit more into creating classes!
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      // Implement functionality here
      if(product instanceof Product){
      const index=this.products.indexOf(product)
      this.products.splice(index,1)
      }else{
          console.log("not a product")
      }
    }
  
    searchProduct(productName) {
        const searchProducts = this.products.filter((product)=>product.name === productName);
        return searchProducts;
      
    }
  
    getTotal() {
      let initialValue = 0;
      const totalPrice =  this.products.reduce((accumulator,currentValue)=>accumulator + currentValue.price,initialValue);
      return totalPrice;
      
    }
  
    renderProducts() {
      // Implement functionality here
      const cart = document.getElementById('cart');
    //for Product names and prices
    const olTag = document.createElement("ol");
    olTag.textContent = "";
    olTag.textContent = 'Shopping Cart has ' + this.products.length + ' products';
    // @ts-ignore
    cart.appendChild(olTag)
    this.products.forEach(product => {
      const name = document.createElement("li");
      name.textContent = `Product : ${product.name}, Price : ${product.price}`;
      olTag.appendChild(name)
  });
  //fot total price of products
  const total = document.createElement('h3');
  total.textContent  = 'Total Price of Items : ' + this.getTotal();
   // @ts-ignore
  cart.append(total);
    }
  
    getUser() {
      const api="https://jsonplaceholder.typicode.com/users/1";
    fetch(api)
    .then(res=>res.json())
    .then(data=>
        {
            console.log(data);
            const user=document.getElementById('user');
             // @ts-ignore
            user.innerHTML=`User: ${data.name}`;
        });
        
    }
  }
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const table=new Product("table",2000);
  const fridge=new Product("fridge",2500);
  const cooker=new Product ("cooker",1500);
  const bag=new Product("bag",100);
  const sofa=new Product("sofa",5000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(table);
  shoppingCart.addProduct(fridge);
  shoppingCart.addProduct(cooker);
  shoppingCart.addProduct(bag);
  shoppingCart.addProduct(sofa);
  console.log(shoppingCart);
// after removing the product,.
  shoppingCart.removeProduct(flatscreen);
  shoppingCart.removeProduct(bag);
  console.log(shoppingCart);
  shoppingCart.getUser();
  shoppingCart.renderProducts();
  shoppingCart.searchProduct('sofa');


  