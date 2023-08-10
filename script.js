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


// 
let arguments = {};
let displayed = null;
let switched = false;
const operators = ["+", "-", "*", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom");
const calculator = document.querySelector(".calculator-container");
const equals = document.querySelector("#equals");

calculator.addEventListener("click", item => {
    numbers.forEach(number => {
        if (item.target.value == number && equals.value == "") return;
        else if (item.target.value == number && switched == false) {
            if(number == 0 && screenBottom.textContent == "") return;
            screenBottom.textContent += item.target.value;
            displayed = screenBottom.textContent;
        }
        else if (item.target.value == number && switched == true) {
            screenBottom.textContent += item.target.value;
            displayed = screenBottom.textContent;
        }
    });

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