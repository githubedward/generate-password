// Assignment code here

// input length
// a
// A
// 1
// $

function getsRandomI() {
  // gets a random number between 0 - charactersCriteria length;
}

function generatePassword() {
  var length = prompt("What is your desired length");

  var a = confirm("Do you want to include a?");
  var A = confirm("Do you want to include A?");
  var one = confirm("Do you want to include 1?");
  var dollar = confirm("Do you want to include $?");

  var charactersCriteria = "";
  if (a === true) charactersCriteria = charactersCriteria + "a";
  if (A === true) charactersCriteria = charactersCriteria + "A";
  if (one === true) charactersCriteria = charactersCriteria + "1";
  if (dollar === true) charactersCriteria = charactersCriteria + "$";

  var randomString = "";
  for (var i = 0; i < length; i++) {
    randomString = randomString + charactersCriteria[getsRandomI()];
  }

  return randomString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
