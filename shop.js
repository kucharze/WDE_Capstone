//List to compare prices for adding to total
let priceList = {
  ["Core2019"]: 4,
  ["Core2021"]: 3,
  ["MH2"]: 6,
  ["Warofthespark"]: 4,
  ["WildsofElderaine"]: 4,
  ["Lordoftherings"]: 5,
  ["Brotherswar"]: 4,
  ["Unfinity"]: 6,
};

let cartTotal = 0;

setTimeout(() => {
  let shop = document.querySelector(".shop");
  let cart = document.querySelector(".shoppingCart");
  let total = document.querySelector(".total");

  const clearCart = () => {
    //Clear the user's cart
    if (cartTotal === 0) {
      alert("Cart is empty");
      return;
    }
    cart.innerHTML = "";
    cartTotal = 0;
    total.innerHTML = `Total $${cartTotal}`;
  };
  document.querySelector(".clearCart").addEventListener("click", clearCart);

  const checkout = () => {
    //User buys the items in their cart

    try {
      if (cartTotal === 0) {
        //Throw an error if the cart is empty
        throw new Error("Cart is empty");
        // return;
      }
      let amount = window.prompt("Enter amount to pay");
      if (cartTotal > amount) {
        //Throw an error if the user didn't pay enough
        throw new Error("Insufficient funds");
      } else if (cartTotal < amount) {
        //The user paid enough, clear the cart and total
        alert("Thank you for shopping");
        clearCart();
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  };
  document.querySelector(".checkout").addEventListener("click", checkout);

  const addToCart = (item) => {
    //Add item to user's cart
    let cartItem = document.createElement("li");
    cartItem.textContent = item;
    cart.appendChild(cartItem);
  };

  shop.addEventListener("click", (e) => {
    //Logic to add items to user's cart and increase price
    //when clicking on a card pack

    //User needs to click on a
    if (e.target.tagName !== "IMG") return;
    let target = e.target;
    // console.log(target);
    //Grab price from priceList
    let price = priceList[target.id];
    console.log(total);
    //Add to user's cart
    addToCart(target.id);

    //Increase total price
    cartTotal += price;
    total.innerHTML = `Total $${cartTotal}`;
    console.log(target, price, total);
  });
}, 500);
