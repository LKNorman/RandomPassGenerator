// Assignment Code
// Write password to the #password input
//prompt user for length
//check to seeif user entered a length
//4 confirms
//special characters, numeric, upper, lower
//generate pass based on user spec

// prompt for users to input num of characters
var length = Number(
  prompt("How many characters would you like your password to be?")
);
// if the length is too long or short user gets this prompt
while (isNaN(length) || length < 8 || length > 128)
  length = Number(
    prompt(
      "Length must be 8-128 characters. How many characters would you like your password to be?"
    )
  );

// confirms for the different character types
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

// loop in case no characters are selected
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

// when the window loads the alerts will pop up
window.addEventListener("load", function() {
  generateNewPassword();
});

// function for the password generation, including rando.js tags to make the randomization cleaner
function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppers)
    password += rando((allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM"));
  if (lowers)
    password += rando((allowed.lowers = "qwertyuiopasdfghjklzxcvbnm"));
  if (numbers) password += rando((allowed.numbers = "1234567890"));
  if (symbols) password += rando((allowed.symbols = "!@#$%^&*(){}[]=<>/,."));

  for (var i = password.length; i < length; i++)
    password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}
