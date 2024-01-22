var choiceArr = []; 

var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArr = ["1","2","3","4","5","6","7","8","9"];
var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","{","}"];

// Assignment Code
var generateBtn = document.querySelector("#generate");
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");


  var newPassword = generatePassword();
  passwordText.value = newPassword;

}


function generatePassword() {
var result = [];
var concatcharacters =[];
var definitecharacters =[]; 
var correctPrompts = getPrompts();
if (correctPrompts.lowercase) {
  concatcharacters =concatcharacters.concat(lowercaseArr)
  definitecharacters.push(getRandom(lowercaseArr))
}

if (correctPrompts.uppercase) {
  concatcharacters =concatcharacters.concat(upperCaseArr)
  definitecharacters.push(getRandom(upperCaseArr))
}

if (correctPrompts.number) {
  concatcharacters =concatcharacters.concat(numberArr)
  definitecharacters.push(getRandom(numberArr))
}

if (correctPrompts.special) {
  concatcharacters =concatcharacters.concat(specialCharArr)
  definitecharacters.push(getRandom(specialCharArr))
}

  for (var i = 0; i < correctPrompts.characterLength; i ++ ) {
    var concatcharacter = getRandom(concatcharacters); 
    result.push(concatcharacter)
  } 
  for(var i = 0; i < definitecharacters.length; i ++ ){
    result[i] = definitecharacters[i] 
  }
  return result.join("")
}

function getRandom(arr) {
  
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomElement = arr[randomIndex]
    return randomElement; 
  
}


function getPrompts() {

   var characterLength = parseInt(prompt("How many characters would you like your password to contain? (8 - 128 characters")) ;

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Remember password lenght needs to be 8 - 128 characters. Try again");
    return false; 
  }

 var uppercase = confirm("Click OK if you would like to include uppercase characters.") 

var lowercase = confirm ("Click OK if you would like to include lowercase characters.") 
  
var number = confirm ("Click OK if you would like to include numeric characters.") 
  
var special = confirm ("Click OK if you would like to include special characters.") 
  
var passwordoptions = {
  characterLength : characterLength, 
  uppercase : uppercase, 
  lowercase : lowercase,
  number : number,
  special : special
}
return passwordoptions; 


}































// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
