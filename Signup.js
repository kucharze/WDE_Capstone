let signup = document.querySelector(".Signup");
let login = document.querySelector(".Login");

setTimeout(() => {
  document.querySelector(".Signup").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Signup");
  });

  document.querySelector(".Login").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Login");
  });
  console.log("loaded");
}, 1000);
