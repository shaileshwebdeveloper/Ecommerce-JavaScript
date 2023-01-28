document.querySelector("form").addEventListener("submit", signupFunc);

var userData = JSON.parse(localStorage.getItem("userCreds")) || [];

function signupFunc() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    userName: document.querySelector("#username").value,
  };

  userData.push(userObj);
  localStorage.setItem("userCreds", JSON.stringify(userData));
}