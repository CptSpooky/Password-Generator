// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var accum = "";
  var length = 8;
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = upper.toLowerCase();
  var numbers = "0123456789";
  var special = " !\"#$%&’()*+,-./:;<=>?@[\\]^_`{|}~";
  var accepts = "";

  var accUpper = confirm("do you want uppercase?");
  var accLower = confirm("do you want lowercase?");
  var accSpecial = confirm("do you want special characters?");
  var accNumber = confirm("do you want numbers?");

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
  
  do {
    accum = "";
    for (var i = 0; i < length; i++) {
      var rnd = Math.floor(Math.random() * Math.floor(accepts.length));
      accum += accepts.charAt(rnd);
    }
  } while(
      (accNumber && !hasAny(accum, numbers))
      || (accSpecial && !hasAny(accum, special))
      || (accUpper && !hasAny(accum, upper))
      || (accLower && !hasAny(accum, lower))
    );
  
  return accum;
}

function hasAny(str, anyOf){
  for(var i = 0; i < anyOf.length; i++){
    if(str.includes(anyOf.charAt(i))){
      return true;
    }
  }
  return false;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
