/*--------- Acceptance Criteria ----------
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
--------- Acceptance Criteria ----------*/

// #### Starter Code ####

var pGenBtn = document.querySelector("#generate");



/*---------
[❗] WHEN asked for character types to include in the password
THEN I **🗝️confirm** whether or not to include lowercase, uppercase, numeric, and/or special characters
---------*/
var LcaseList    = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var UcaseList    = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var NumList      = ["0","1","2","3","4","5","6","7","8","9"];

// Special Chars Source:  https://owasp.org/www-community/password-special-characters
// (???) as a string ==>     " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" 
var specialList  = [' ', '!', '#', '$', '%', '&', '\\', '(', ')', '*', '+', '-', '.', '/',
                    ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

var combinedCharList =[];
var confirmCharList=[];
var finalPwrdList =[];

/*---------
[❗] WHEN I answer each prompt
THEN my input should be **🗝️validated** and at least one character type should be selected
---------*/

function generatePassword() {

  /*---------
  [❗] WHEN **🗝️prompted** for the length of the password
  THEN I choose a length of at least 8 characters and no more than 128 characters
  ---------*/
  var LengthMsg = prompt("Please enter a length for your password between 8 and 128 characters.");
  if (LengthMsg < 8 ) {
      alert("Your password is not 8 characters long, please lengthen your password.");
      return null;
  }
  if (LengthMsg > 128 ) {
      alert("Your password is more than 128 characters long, please shorten your password.");
      return null;
  }

  /*---------
  [❗] WHEN prompted for password criteria
  THEN I select which criteria to include in the password
  ---------*/
  if (isNaN(LengthMsg)) {
      alert("You need to use a number in your password.");
      return null;
  }

  var LcaseMsg     = confirm("Would you like to use a LOWERCASE letter.");
  var UcaseMsg     = confirm("Would you like to use an UPPERCASE letter.");
  var NumMsg       = confirm("Would you like to use a NUMBER letter.");
  var SpecialMsg   = confirm("Would you like to use a SPECIAL CHARACTER letter");
  
  if (LcaseMsg === false && UcaseMsg === false && NumMsg === false && SpecialMsg === false){
    alert("Please select ok for at least one character set so that a password can be generated for you. Please click on the Generate Password button and try again.");
    return null;
  }

  if (LcaseMsg) {
    confirmCharList += combinedCharList.concat(LcaseList);
  }

  if (UcaseMsg) {
    confirmCharList += combinedCharList.concat(UcaseList);
  }

  if (NumMsg) {
    confirmCharList += combinedCharList.concat(NumList);
  }

  if (SpecialMsg) {
    confirmCharList += combinedCharList.concat(specialList);
  }
  alert(confirmCharList);

  // LengthMsg for loop & push in to list and write
  for (let index = 0; index < array.length; index++) {
  const element = array[index];
  }

}

/*---------
[❗] WHEN all prompts are answered
THEN a password is **🗝️generated** that matches the selected criteria
---------*/
// #### Starter Code ####

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

/*---------
[❗] WHEN the password is generated
THEN the password is either **🗝️displayed in an alert** or **🗝️written to the page**
---------*/


/*---------
[❗] WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
---------*/

// This is an **🗝️event listener** for the generate button on click run function "writePassword" 

// #### Starter Code ####

 pGenBtn.addEventListener("click", writePassword);

// alt idea (?) --> pGenBtn.onclick = writePassword;












