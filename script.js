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
const events = ["click", "keydown"];

// Access HTML elements
const screenTop = document.querySelector(".screen-top");
const screenBottom = document.querySelector(".screen-bottom");


// Define handler functions
function handleNumberClick(number) {
    if (screenBottom.textContent == "" && number == 0) return;
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


// Event delegation and handlers
events.forEach(listenEvent => {
    document.addEventListener(listenEvent, (event) => {
        let targetValue;
        if (event.target.value) targetValue = event.target.value;
        else if (event.key) targetValue = event.key;

        // Handle different button clicks based on their value
        if (numbers.includes(targetValue)) {
            handleNumberClick(targetValue);
        } else if (operators.includes(targetValue)) {
            handleOperatorClick(targetValue);
        } else if (targetValue === "Enter") {
            handleEqualsClick();
        }
    });
});

// Event handler for "clear" and "delete" buttons
events.forEach(listenEvent => {
    document.addEventListener(listenEvent, (event) => {
        let target;
        if (event.target.id) target = event.target.id;
        else if (event.key) target = event.key;
    
        if (target == "Delete") {
            screenTop.textContent = "";
            screenBottom.textContent = "";
        } else if (target == "Backspace") {
            screenBottom.textContent = screenBottom.textContent.slice(0, -1)
        }
    }); 
});