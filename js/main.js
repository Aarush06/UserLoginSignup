// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');




let users = loadUsers();


// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {

  let username = document.getElementById("username").value;
  let pass = document.getElementById("pass").value;
  let passConfirm = document.getElementById("confirmPass").value;
  if (usernameCheck(username) === true) {
    alert("Username already in use!")

  } else if (passConfirm !== pass) {
    alert("Passwords do not match!")
  } else {
    users.push(newUser(username, pass))
    alert("account has been created!")
    saveUser();
  }

}


// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let username = document.getElementById("usernameLogin").value;
  let pass = document.getElementById("passLogin").value;

  if (loginCheck(username, pass) === true) {
    alert("sign in successful!")
  } else {
    alert("invalid login")
  }
}

function saveUser() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}
function newUser(username, pass) {
  return {
    username: username,
    pass: pass,

  };

}
function usernameCheck(username) {
  for (i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      return true;
    } else {
      return false;
    }
  }
}

function loginCheck(username, pass) {
  for (i = 0; i < users.length; i++) {
    if (username === users[i].username && pass === users[i].pass) {
      return true;
    } else {
      return false;
    }
  }
}
