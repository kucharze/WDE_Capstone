setTimeout(() => {
  let signup = document.querySelector("#Signup");
  let login = document.querySelector("#Login");
  document.querySelector("#Signup").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Signup", signup);
    if (signup.elements["email"].value === "") {
      alert("Please enter an email");
    } else if (signup.elements["password"].value === "") {
      alert("Please enter a password");
    }
  });

  document.querySelector("#Login").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Login");
  });
  console.log("loaded");
}, 1000);
