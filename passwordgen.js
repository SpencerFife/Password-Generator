/*
Pseudo code:
    1. Prompt user to input length of password (8-128).
        - if user inputs less than 8, alert: "Password must be more than 8 characters"
        - if user inputs more than 128, alert: "Password must be less than 129 characters"
        - if user inputs between 8-128 move to next prompt
    2. alert: Do you want to use special characters?
        - if user selects OK, includes special characters
        - if user selects Cancel, doesn't include special characters
    3. alert: Do you want to use numeric characters?
        - if user selects OK, includes numeric characters
        - if user selects Cancel, doesn't include numeric characters
    4. alert: Do you want to use lowercase characters?
        - if user selects OK, includes lowercase characters
        - if user selects Cancel, doesn't include lowercase characters
    5. alert: Do you want to use uppercase characters?
        - if user selects OK, includes uppercase characters
        - if user selects Cancel, doesn't include uppercase characters
    6. If user selected Cancel for every prompt, alert: "You must select at least one character type"
    7. If user selected at least one character type password is generated using selected character types
    8. User clicks "Copy to Clipboard" button, alert: "'generated password' has been saved to your clipboard"
*/

var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numerals = ['1','2','3','4','5','6','7','8','9','0'];
var specChar = " !'()*+,-./:;<=>?@[\]^_`{|}~";
var newSpecChar = specChar.split('')
var generateButton = document.querySelector('#gen');
var copyButton = document.querySelector('#copy')

function generateOptions() {

    //prompts the user to input length of password

    var length = parseInt(prompt('How many characters would you like your password to contain?'));


    if (length < 8) {
        alert('Password length must be more than 8 characters');
        return;
    }
    if (length > 128) {
        alert('Password length must be less than 128 characters');
        return;
    }

    var wantsSpecChar = confirm("Click OK to include special characters");
    var wantsNumChar = confirm("Click OK to include numeric characters");
    var wantsLowerChar = confirm("Click OK to include lowercase characters");
    var wantsUpperChar = confirm("Click OK to include uppercase characters");

    if (!wantsSpecChar && !wantsNumChar && !wantsLowerChar && !wantsUpperChar) {
        alert('You must choose one valid input');
        return;
    }       

    var questionOptions = {
        length:length,
        specialChar:wantsSpecChar,
        numChar:wantsNumChar,
        lowChar:wantsLowerChar,
        upChar:wantsUpperChar
    }

    return questionOptions;

}

function generatePassword() {

    var options = generateOptions();
    var passwordArrayOptions = [];

    console.log(passwordArrayOptions);
    if(options.specialChar){
        passwordArrayOptions = passwordArrayOptions.concat(newSpecChar)
    }
    console.log(passwordArrayOptions);

    if(options.numChar){
        passwordArrayOptions = passwordArrayOptions.concat(numerals)
    }
    console.log(passwordArrayOptions);

    if(options.lowChar){
        passwordArrayOptions = passwordArrayOptions.concat(lowerChar)
    }
    console.log(passwordArrayOptions);

    if(options.upchar){
        passwordArrayOptions = passwordArrayOptions.concat(upperChar)
    }
    console.log(passwordArrayOptions);

    var randomIndex = Math.floor(Math.random() * passwordArrayOptions.length);

    var randomChar = passwordArrayOptions[]


    
    //var finalPassword = []
    

    console.log(options);
    
}

generatePassword()
//generateButton.addEventListener('click', generatePassword);


// copyButton.addEventListener('click', function());






















