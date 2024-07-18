setTimeout(() => {
  let signup = document.querySelector("#Signup");
  let login = document.querySelector("#Login");

  const getLocalStorage = () => {
    console.log("getLocalStorage");
    //Get values out of local storage
    let values = [];
    if (localStorage.getItem("email")) {
      values.push(localStorage.getItem("email"));
    }
    if (localStorage.getItem("password")) {
      values.push(localStorage.getItem("password"));
    }
    return values;
  };

  const setLocalStorage = () => {
    console.log("setLocalStorage");
    //Set local storage values
    localStorage.setItem("email", signup.elements["email"].value);
    localStorage.setItem("password", signup.elements["password"].value);
  };

  document.querySelector("#Signup").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Signup", signup);

    //Check if values are blank, if so alert user
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

    //Add to local storage
    setLocalStorage();

    console.log("Successful Signup");
    alert("Successful Signup");
  });

  document.querySelector("#Login").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted Login");

    //Check if values are blank, if so alert user
    if (login.elements["email"].value === "") {
      alert("Please enter an email");
      return;
    } else if (login.elements["password"].value === "") {
      alert("Please enter a password");
      return;
    }

    //Compare values against values in local storage
    let storageValues = getLocalStorage();
    console.log(storageValues);
    if (login.elements["email"].value !== storageValues[0]) {
      alert("Incorrect email");
      return;
    } else if (login.elements["password"].value !== storageValues[1]) {
      alert("Incorrect password");
      return;
    }

    console.log("Successful Login");
    alert("Successful Login");
  });
  console.log("loaded");
}, 500);
