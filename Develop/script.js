const alpha = "abcdefghijklmnopqrstuv";
const nums = "123456789";
const specialChars = "!#$%^&*()-+"

function getRandomIndex(limit) {
  return Math.floor(Math.random() * limit);
}

// Assignment code here
function generatePassword() {
  let password = "";
  let allowedChars = "";
  let shouldContinue = true;
  let length;

  // handle length criteria
  while(!length || length < 8 || length > 128) {
    if (!shouldContinue) return;
    length = prompt("Please provide desired password length between 12 and 128");
    
    if (length >= 8 && length <= 128) break;
    shouldContinue = confirm("Invalid input. Do you want to try again?");
  }

  // character types criteria
  const isLowercase = confirm("Do you want to include lowercase characters?");
  const isUppercase = confirm("Do you want to include uppercase characters");
  const isNumeric = confirm("Do you want to include numeric characters");
  const isSpecial = confirm("Do you want to include special characters");

  // conditions
  if (isLowercase) allowedChars = alpha;
  if (isUppercase) allowedChars = allowedChars + alpha.toUpperCase();
  if (isNumeric) allowedChars = allowedChars + nums;
  if (isSpecial) allowedChars = allowedChars + specialChars;

  // run password generator when criteria is provided
  if (allowedChars.length) {
    for (var i = 0; i < length; i++) {
      const randomI = getRandomIndex(allowedChars.length);
      password = password + allowedChars[randomI];
    }
  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password || !password.length) {
    alert("Generate password unsuccessful");
    return;
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
