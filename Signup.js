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
    } else if (
      signup.elements["confirmPassword"].value !==
      signup.elements["password"].value
    ) {
      alert("Passwords do not match");
    }

    console.log("Successful Signup");
  });

  document.querySelector("#Login").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Login");
  });
  console.log("loaded");
}, 500);
