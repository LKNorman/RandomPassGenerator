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
