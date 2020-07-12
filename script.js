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

  // Response booleans
  const accUpper = confirm("Do you want uppercase characters?");
  const accLower = confirm("Do you want lowercase characters?");
  const accSpecial = confirm("Do you want special characters?");
  const accNumber = confirm("Do you want numbers?");

  // Checks if user is attempting to create a password with no characters
  if ((accUpper || accLower || accSpecial || accNumber) == false){
      return "No usable characters available, please re-run generator and include at least one character set option.";
  }

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
    for (let i = 0; i < passLength; i++) { // Runs until password length is met
      let rnd = Math.floor(Math.random() * accepts.length); // Create new random character index value
      passAccum += accepts.charAt(rnd); // Append new character to working string
    }
  } while( // Password criteria check
      (accNumber && !hasAny(passAccum, numbers)) // Check for numbers if applicable 
      || (accSpecial && !hasAny(passAccum, special)) // Check for special characters if applicable 
      || (accUpper && !hasAny(passAccum, upper)) // Check for uppercase characters if applicable 
      || (accLower && !hasAny(passAccum, lower)) // Check for lowercase characters if applicable 
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
