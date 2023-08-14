// Define function for calculator operations
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return +firstNum + +secondNum;
        case "-":
            return +firstNum - +secondNum;
        case "*":
            return +firstNum * +secondNum;
        case "/":
            return +firstNum / +secondNum;
   };
};


// Declare variables
const operators = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Access HTML elements
const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom");
const calculator = document.querySelector(".calculator-container");


// Event delegation and handlers
calculator.addEventListener("click", (event) => {
    const targetValue = event.target.value;

    function handleNumberClick(number) {
        if (screenBottom.textContent == "" && number == 0) return;
        screenBottom.textContent += number;
    }

    function handleOperatorClick(operator) {
        if (screenBottom.textContent != "") {
            if (operators.includes(screenBottom.textContent[screenBottom.textContent.length - 1])) return;
            
            screenBottom.textContent += operator;
        }
        else return;
    }

    //Populate arguments object and call the operate() function
    function handleEqualsClick() {
        if (screenBottom.textContent != "") {
            let bottomArray = Array.from(screenBottom.textContent);
            console.log(bottomArray);
            bottomArray.forEach(item => {
                console.log(item);
                if (bottomArray.indexOf(item) !== 0 && operators.includes(item)) {
                    let firstNum = screenBottom.textContent.slice(0, screenBottom.textContent.indexOf(item));
                    let operator = item;
                    let secondNum = screenBottom.textContent.slice(screenBottom.textContent.indexOf(item) + 1);
                    if (secondNum == "") return;
                    let solution = operate(firstNum, operator, secondNum);
                    screenTop.textContent = screenBottom.textContent;
                    screenBottom.textContent = solution;
                    return;
                }
                else return;
            });
        }
        else return;
    }

    // Handle different button clicks based on their value
    if (numbers.includes(targetValue)) {
        handleNumberClick(targetValue);
    } else if (operators.includes(targetValue)) {
        handleOperatorClick(targetValue);
    } else if (targetValue === "=") {
        handleEqualsClick();
    }
});































/*

// Define function for calculator operations
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return +firstNum + +secondNum;
        case "-":
            return +firstNum - +secondNum;
        case "*":
            return +firstNum * +secondNum;
        case "/":
            return +firstNum / +secondNum;
   };
};


// Declare variables
let arguments = {};
let displayed = null;
let switched = false; 
const operators = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Access HTML elements
const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom");
const calculator = document.querySelector(".calculator-container");
const equals = document.querySelector("#equals");


calculator.addEventListener("click", item => {
    // Handle click event if target's value == number
    numbers.forEach(number => {
        if (item.target.value == number && equals.value == "") return;
        else if (item.target.value == number && switched == false) {
            screenBottom.textContent += item.target.value;
            displayed = screenBottom.textContent;
        }
        else if (item.target.value == number && switched == true) {
            screenBottom.textContent += item.target.value;
            displayed = screenBottom.textContent;
        }
    });

    // Handle click event if target's value == operator
    operators.forEach(operator => {
        if (item.target.value == operator && equals.value == "") {
            screenTop.textContent = screenBottom.textContent;
            arguments.firstNum = screenTop.textContent;
            screenTop.textContent += item.target.value;
            screenBottom.textContent = "";
            equals.value = "=";
            switched = false;
            arguments.operator = item.target.value;
        }
        else if (item.target.value == operator && screenBottom.textContent == "") return;
        else if (item.target.value == operator && displayed != null && switched == false) {
            arguments.firstNum = displayed;
            arguments.operator = item.target.value;
            screenBottom.textContent += item.target.value;
            screenTop.textContent = screenBottom.textContent;
            screenBottom.textContent = "";
            displayed = null;
            switched = true;
        }
    });

    // Handle click event if target's value == "="
    if (item.target.value == "=" && displayed != null && switched == true) { 
        arguments.lastNum = displayed;
        screenTop.textContent += displayed;
        let solution = operate(arguments.firstNum, arguments.operator, arguments.lastNum);
        screenBottom.textContent = solution;
        equals.value = "";
    }
    else if (item.target.value == "=" && displayed != null && switched == false) { 
        arguments.lastNum = screenBottom.textContent;
        screenTop.textContent += displayed;
        let solution = operate(arguments.firstNum, arguments.operator, arguments.lastNum);
        screenBottom.textContent = solution;
        equals.value = "";
    }
});
*/