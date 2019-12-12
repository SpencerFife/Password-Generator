//prompts the user to input length of password//
var passwordPrompt = prompt('How many characters would you like your password to contain?');
var passwordLength {
    for(var i = 7; i < 130; i++) {
        var num = Math.floor(Math.random())
    }
    if(i<7)
        alert('Password length must be more than 8 characters');
    if(i>130)
      alert('Password length must be less than 129 characters');
    else alert()
}


/* 
Pseudo code:
    1. Prompt user to input length of password (8-129).
        - if user inputs less than 8, alert: "Password must be more than 8 characters"
        - if user inputs more than 129, alert: "Password must be less than 129 characters"
        - if user inputs between 8-129 move to next prompt
    2. True/False: Do you want to use special characters?
        - if user selects OK, includes special characters
        - if user selects Cancel, doesn't include special characters
    3. True/False: Do you want to use numeric characters?
        - if user selects OK, includes numeric characters
        - if user selects Cancel, doesn't include numeric characters
    4. True/False: Do you want to use lowercase characters?
        - if user selects OK, includes lowercase characters
        - if user selects Cancel, doesn't include lowercase characters
    5. True/False: Do you want to use uppercase characters?
        - if user selects OK, includes uppercase characters
        - if user selects Cancel, doesn't include uppercase characters
    6. If user selected Cancel for every prompt, alert: "You must select at least one character type"
    7. If user selected at least one character type password is generated using selected character types
    8. User clicks "Copy to Clipboard" button, alert: "'generated password' has been saved to your clipboard" 
*/












//alert('Password length must be more than 8 characters')
//alert('Password length must be less than 129 characters');
//alert('Click OK to include special characters');
//alert('Click OK to include numeric characters');
//alert('Click OK to include lowercase characters');
//alert('Click OK to include uppercase characters');


//var upperChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
//var lowerChar = ['abcdefghijklmnopqrstuvwxyz'];
//var numerals = ['1234567890'];
//var specChar = ['!@#$%^&*()'];

