const form = document.getElementById("form-register");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

// const formBox = document.getElementsByClassName("form-box");
// const submitButton = document.getElementById("");

// show input error message
function showError(input, message) {
  const formBox = input.parentElement;
  formBox.className = "form-box error";
  const small = formBox.querySelector("small");
  small.innerText = message;
  // alert(`${username}is required`);
}

//show success outline
function showSucess(input) {
  const formBox = input.parentElement;
  formBox.className = "form-box success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(input.value)) {
    showSucess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// check required field
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      // trim function to trim any white space
      // console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucess(input);
    }
  });
}

/*
 */
// check password match
function checkPasswordMatch(password, confirmPassword) {
  if (password.value === confirmPassword.value) {
    showSucess(password);
    console.log("match");
  } else {
    showError(
      confirmPassword,
      `${getFieldName(confirmPassword)} dosen't match`
    );
    console.log("oops");
  }
}

// Get fieldname
function getFieldName(input) {
  // return input.id.toUpperCase();
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input lenght
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSucess(input);
  }
}

// Event Listners
form.addEventListener("submit", function (e) {
  // click OR submit
  e.preventDefault();

  /*
  if (username.value === "") {
    // alert("UserName is required");
    showError(username, "UserName is required");
  } else {
    showSucess(username);
  }
  
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSucess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSucess(password);
  }
  if (confirmPassword.value === "") {
    showError(confirmPassword, "Password is required");
  } else {
    showSucess(confirmPassword);
  }  
  */
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPassword);
});
