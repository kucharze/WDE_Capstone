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

let total = 0;

setTimeout(() => {
  let shop = document.querySelector(".shop");
  let cart = document.querySelector(".shoppingCart");
  let total = document.querySelector(".total");

  const addToCart = (item) => {};

  shop.addEventListener("click", (e) => {
    let target = e.target;
    // console.log(target);
    let price = priceList[target.id];
    total += price;
    total.textContent = `Total $${total}`;
    console.log(target, price);
  });
}, 500);
