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
            if (secondNum == 0){
                alert("Cant divide by 0!");
                return;
            }
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
        if (screenBottom.textContent == "0" && number == 0) return;
        screenBottom.textContent += number;
    }

    function handleOperatorClick(operator) {
        if (screenBottom.textContent != "") {
            if (operators.includes(screenBottom.textContent[screenBottom.textContent.length - 1])) return;
            arr = Array.from(screenBottom.textContent);
            filteredArr = arr.filter( item => operators.includes(item));
            if (filteredArr.length == 0) screenBottom.textContent +=operator;
            else if (filteredArr.length == 1 && screenBottom.textContent[0] == "-") {
                screenBottom.textContent +=operator;
            } else if (filteredArr.length > 1) return;
        }
        else if (screenBottom.textContent == "" && operator == "-") screenBottom.textContent +=operator;
        else return;
    }

    //Populate arguments object and call the operate() function
    function handleEqualsClick() {
        if (screenBottom.textContent != "") {
            let bottomArray = Array.from(screenBottom.textContent);
            bottomArray.forEach((item, index) => {
                if (index != 0 && operators.includes(item)) {
                    let firstNum = screenBottom.textContent.slice(0, index);
                    let operator = item;
                    let secondNum = screenBottom.textContent.slice(index + 1);
                    if (secondNum == "") return;
                    let solution = operate(firstNum, operator, secondNum);
                    screenTop.textContent = screenBottom.textContent;
                    screenBottom.textContent = +solution.toFixed(3);
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


// Event handler for "clear" and "delete" buttons
calculator.addEventListener("click", (event) => {
    const targetId = event.target.id;

    if (targetId == "clear") {
        screenTop.textContent = "";
        screenBottom.textContent = "";
    } else if (targetId == "delete") {
        screenBottom.textContent = screenBottom.textContent.slice(0, -1)
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