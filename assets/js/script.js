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
// ######################

var lCaseList    = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uCaseList    = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numList      = ["0","1","2","3","4","5","6","7","8","9"];

// Special Chars Source:  https://owasp.org/www-community/password-special-characters
var specialList  = [' ', '!', '#', '$', '%', '&', '\\', '(', ')', '*', '+', '-', '.', '/',
                    ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

var combinedCharList =[];

var confirmCharList=[];

// var userCharSet =[];

var superUncoolPwrd = "" // turn charsets into string


/*---------
[❗] WHEN I answer each prompt
THEN my input should be **🗝️validated** and at least one character type should be selected
---------*/

function generatePassword() {

    /*---------
    [❗] WHEN **🗝️prompted** for the length of the password
    THEN I choose (enter) a length (number value) between 8 and 128 characters
    ---------*/
    var lengthMsg = prompt("Please enter a character length for your password between at least 8 and 128 characters.");

    if (lengthMsg < 8) {
        alert("Sorry, the character length value entered for your password needs to be between at least 8 and 128 characters. Please try again!");
        return null;
    }

    if (lengthMsg > 128 ) {
      alert("Sorry, the character length value entered for your password needs to be between at least 8 and 128 characters. Please try again!");
        return null;
    }

    /*---------
    [❗] WHEN asked for character types to include in the password
    THEN I **🗝️confirm** whether or not to include lowercase, uppercase, numeric, and/or special characters
    ---------*/
    /*---------
    [❗] WHEN prompted for password criteria
    THEN I select which criteria to include in the password
    ---------*/

    if (isNaN(lengthMsg)) {
        alert("You need to enter a 'number value' for the desired character length of your password. Please start over and try again.");
        return null;
    }

    var lCaseMsg = confirm("Would you like to use a LOWERCASE letter? Click on 'OK' for 'YES' and 'CANCEL' for 'NO'.");

    var uCaseMsg = confirm("Would you like to use an UPPERCASE letter? Click on 'OK' for 'YES' and 'CANCEL' for 'NO'.");

    var numMsg = confirm("Would you like to use a NUMBER letter? Click on 'OK' for 'YES' and 'CANCEL' for 'NO'.");

    var specialMsg = confirm("Would you like to use a SPECIAL CHARACTER letter?  Click on 'OK' for 'YES' and 'CANCEL' for 'NO'.");
    
    if (lCaseMsg === false && uCaseMsg === false && numMsg === false && specialMsg === false){
      alert("Please select ok for at least one character set so that a password can be generated for you. Please click on the Generate Password button and try again.");
      return null;
    }

    if (lCaseMsg) {
      var lCaseListType = " [Lower Case Letters]";
      confirmCharList += combinedCharList.concat(lCaseListType);
    }

    if (uCaseMsg) {
      var uCaseListType = " [Upper Case Letters]";
      confirmCharList += combinedCharList.concat(uCaseListType);
    }

    if (numMsg) {
      var numListType = " [Numbers]";
      confirmCharList += combinedCharList.concat(numListType);
    }

    if (specialMsg) {
      var specialListType = " [Special Characters]";
      confirmCharList += combinedCharList.concat(specialListType);
    }
    
    alert("You selected the following character sets:  " + confirmCharList);

    /*---------
    [❗] WHEN all prompts are answered
    THEN a password is **🗝️generated** that matches the selected criteria
    ---------*/

    // lengthMsg for loop & push in to list and write (I'm lost can you tell?)
  
    for (let index = 0; index < lengthMsg.length; index++) {
      const xX =[Math.floor(Math.random() * confirmCharList.length)];
      superUncoolPwrd = superUncoolPwrd + xX;
    }
    return superUncoolPwrd + "#Failed";
}


/*---------
[❗] WHEN the password is generated
THEN the password is either **🗝️displayed in an alert** or **🗝️written to the page**
---------*/

// #### Starter Code ####
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// ######################


/*---------
[❗] WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
---------*/

// This is an **🗝️event listener** for the generate button on click run function "writePassword" 

// #### Starter Code ####
 pGenBtn.addEventListener("click", writePassword);
// ######################













