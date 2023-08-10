// Define function for calculator operations
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
   };
};


// Get button values to screen (with event delegation), store the number in currentValue
const screen = document.querySelector(".operation-screen");
let currentValue;
const calculator = document.querySelector(".calculator-container");
calculator.addEventListener("click", item => {
    if(item.target.value) {
        screen.textContent += item.target.value;
        currentValue = +screen.textContent;
    };
});
