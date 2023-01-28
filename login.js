document.querySelector("form").addEventListener("submit", loginFunc);

let regdUsers = JSON.parse(localStorage.getItem("userCreds"));

function loginFunc() {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  for (let i = 0; i < regdUsers.length; i++) {
    if (regdUsers[i].email === email && regdUsers[i].password === password) {
      alert("Login Sucess");
      window.location.href = 'men.html'
      break;
    } else {
      alert("Login Failed");
      break;
    }
  }
}