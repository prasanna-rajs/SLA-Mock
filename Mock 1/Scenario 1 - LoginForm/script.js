document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  if (email === "") {
    emailError.textContent = "Email is required";
  }

  if (password === "") {
    passwordError.textContent = "Password is required";
  }

  if (email !== "" && password !== "") {
    alert("Login successful!");
  }
});
