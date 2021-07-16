
var enter;
var useNumber;
var useSymbol;
var useUppercase;
var useLowercase;

symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
letter2 = letter.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = prompt("How many characters would you like your password?");
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = prompt("You must choose between 8 and 128");

    } else {
        // Continues once user input is validated
        useNumber = confirm("Would you like to use numbers?");
        useSymbol = confirm("Would you like to use special characters?");
        useUppercase = confirm("Would you like to use Uppercase letters?");
        useLowercase = confirm("Would you like to use Lowercase letters?");
    };

     if (useSymbol && useNumber && useUppercase && useLowercase) {

        choices = symbol.concat(number, letter, letter2);
    }
    // Else if for 3 positive options
    else if (useSymbol && useNumber && useUppercase) {
        choices = symbol.concat(number, letter2);
    }
    else if (useSymbol && useNumber && useLowercase) {
        choices = symbol.concat(number, letter);
    }
    else if (useSymbol && useLowercase && useUppercase) {
        choices = symbol.concat(letter, letter2);
    }
    else if (useNumber && useLowercase && useUppercase) {
        choices = number.concat(letter, letter2);
    }
    // Else if for 2 positive options 
    else if (useSymbol && useNumber) {
        choices = symbol.concat(number);

    } else if (useSymbol && useLowercase) {
        choices = symbol.concat(letter);

    } else if (useSymbol && useUppercase) {
        choices = symbol.concat(letter2);
    }
    else if (useLowercase && useNumber) {
        choices = letter.concat(number);

    } else if (useLowercase && useUppercase) {
        choices = letter.concat(letter2);

    } else if (useNumber && useUppercase) {
        choices = number.concat(letter2);
    }
    // Else if for 1 positive option
    else if (useSymbol) {
        choices = symbol;
    }
    else if (useNumber) {
        choices = number;
    }
    else if (useLowercase) {
        choices = letter;
    }
    else if (useUppercase) {
        choices = space.concat(letter2);
    };

    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;

}

