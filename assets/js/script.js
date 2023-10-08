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

// (Starter Code)
var pGenBtn = document.querySelector("#generate");


/*---------
[❗] WHEN prompted for password criteria
THEN I select which criteria to include in the password
---------*/
// n/a - this is assumed as part of the other criteria logic that is to follow


/*---------
[❗] WHEN **🗝️prompted** for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
---------*/
var pwLengthMsg = prompt("Your password needs to be at least 8 characters in length, but not more than 128. Please try again.");


/*---------
[❗] WHEN asked for character types to include in the password
THEN I **🗝️confirm** whether or not to include lowercase, uppercase, numeric, and/or special characters
---------*/
var pwLcaseMsg   = confirm("Your password needs a LOWERCASE letter. Please try again.");
var pwUcaseMsg   = confirm("Your password needs an UPPERCASE letter. Please try again.");
var pwNumMsg     = confirm("Your password needs a NUMBER letter. Please try again.");
var pwSpecialMsg = confirm("Your password needs a SPECIAL CHARACTER letter. Please try again.");


/*---------
[❗] WHEN I answer each prompt
THEN my input should be **🗝️validated** and at least one character type should be selected
---------*/


/*---------
[❗] WHEN all prompts are answered
THEN a password is **🗝️generated** that matches the selected criteria
---------*/


/*---------
[❗] WHEN the password is generated
THEN the password is either **🗝️displayed in an alert** or **🗝️written to the page**
---------*/

// (Starter Code)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


/*---------
[❗] WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
---------*/

// This is an **🗝️event listener** for the generate button on click run function "writePassword" 

// (Starter Code)

 pGenBtn.addEventListener("click", writePassword);

// alt idea (?) --> pGenBtn.onclick = writePassword;
