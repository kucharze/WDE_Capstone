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
    if (cartTotal === 0) {
      alert("Cart is empty");
      return;
    }
    let amount = window.prompt("Enter amount to pay");
    if (cartTotal > amount) {
      alert("Insufficient funds");
    } else if (cartTotal < amount) {
      alert("Thank you for shopping");
      cart.innerHTML = "";
      cartTotal = 0;
      total.innerHTML = `Total $${cartTotal}`;
    }
  };
  document.querySelector(".checkout").addEventListener("click", checkout);

  const addToCart = (item) => {
    let cartItem = document.createElement("li");
    cartItem.textContent = item;
    cart.appendChild(cartItem);
  };

  shop.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG") return;
    let target = e.target;
    // console.log(target);
    let price = priceList[target.id];
    console.log(total);
    addToCart(target.id);
    cartTotal += price;
    total.innerHTML = `Total $${cartTotal}`;
    console.log(target, price, total);
  });
}, 500);
