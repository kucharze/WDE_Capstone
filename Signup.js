setTimeout(() => {
  let signup = document.querySelector("#Signup");
  let login = document.querySelector("#Login");

  document.querySelector("#Signup").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Signup", signup);
    if (signup.elements["email"].value === "") {
      alert("Please enter an email");
      return;
    } else if (signup.elements["password"].value === "") {
      alert("Please enter a password");
      return;
    } else if (
      signup.elements["confirmPassword"].value !==
      signup.elements["password"].value
    ) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("email", signup.elements["email"].value);
    localStorage.setItem("password", signup.elements["password"].value);

    console.log("Successful Signup");
    alert("Successful Signup");
  });

  document.querySelector("#Login").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Login");
    if (login.elements["email"].value === "") {
      alert("Please enter an email");
      return;
    } else if (login.elements["password"].value === "") {
      alert("Please enter a password");
      return;
    }

    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (login.elements["email"].value !== email) {
      alert("Incorrect email");
      return;
    } else if (login.elements["password"].value !== password) {
      alert("Incorrect password");
      return;
    }

    console.log("Successful Login");
    alert("Successful Login");
  });
  console.log("loaded");
}, 500);
