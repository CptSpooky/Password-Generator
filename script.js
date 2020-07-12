// Assignment Code
const generateBtn = document.querySelector("#generate");

// Password function
function generatePassword(){
  // Character constants
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLowerCase();
  const numbers = "0123456789";
  const special = " !\"#$%&’()*+,-./:;<=>?@[\\]^_`{|}~";
  
  // Accumulator variables
  let passAccum = "";
  let accepts = "";

  // Password length check
  let passLength = 0;
  do {
    passLength = prompt("How long do you want the password to be? You must enter a number no less than 8 and no greater than 128.");
    passLength = parseInt(passLength);
  } while (passLength < 8 || passLength > 128 || isNaN(passLength));

  // Question booleans
  const accUpper = confirm("do you want uppercase?");
  const accLower = confirm("do you want lowercase?");
  const accSpecial = confirm("do you want special characters?");
  const accNumber = confirm("do you want numbers?");

  // Build accepted characters string
  if (accUpper){
    accepts += upper;
  }

  if (accLower){
    accepts += lower;
  }

  if (accSpecial){
    accepts += special;
  }

  if (accNumber){
    accepts += numbers;
  }
  
  do { // Generate new password string
    passAccum = ""; // Reset the accumulator
    for (let i = 0; i < passLength; i++) {
      let rnd = Math.floor(Math.random() * accepts.length); // Create new random character index value
      passAccum += accepts.charAt(rnd); // Append new character to working string
    }
  } while( // Password criteria check
      (accNumber && !hasAny(passAccum, numbers)) // Check for numbers if applicable 
      || (accSpecial && !hasAny(passAccum, special)) // Check for special characters if applicable 
      || (accUpper && !hasAny(passAccum, upper)) // Check for upper case characters if applicable 
      || (accLower && !hasAny(passAccum, lower)) // Check for lower case characters if applicable 
    ); // If the criteria is not met, then try to generate a new password

  return passAccum;
}

// Returns true if characters in parameter anyOf are found in parameter str. False otherwise
function hasAny(str, anyOf){
  for(let i = 0; i < anyOf.length; i++){
    if(str.includes(anyOf.charAt(i))){
      return true;
    }
  }
  return false;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
