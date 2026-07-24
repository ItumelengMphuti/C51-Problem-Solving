function Calculator(name) {
  this.name = name; //1
  this.history = [];
}

Calculator.prototype.calculate = function (a, operator, b) {
  let result;

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b; //2
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0){ //4
        return "Cannot divide by 0";
    }
    result = a / b;
  } else {
    return "Invalid operator";
  }

  this.history.push({
    a,
    operator,
    b,
    result
  });

  return result;
};

//"12 + 5"
function parseExpression(expression) {
  const parts = expression.split(" ");

  return {
    a: Number(parts[0]),
    operator: parts[1],
    b: Number(parts[2]) //6
  };
}


// Is this a valid number?

function isValidNumber(value) {
  return !Number.isNaN(Number(value)); //7
}

// Add all previous answers

function getHistoryTotal(history) {
  return history.reduce((total, item) => total + item.result, 0); //5
}


// Show every calculation
function showHistory(history) {
  history.forEach(item => {
    console.log(`${item.a} ${item.operator} ${item.b} = ${item.result}`); //8
  });
}

// Shorten long answers

function displayResult(result) {
  let output = String(result);

  if (output.length > 10) {
    return output = output.slice(0, 10);  //9
  }

}


const calc = new Calculator("Basic");

const values = parseExpression("12 + 5");

calc.calculate(values.a, values.operator, values.b);
calc.calculate(10, "-", 4);
calc.calculate(3, "*", 6);

showHistory(calc.history); //3

console.log(getHistoryTotal(calc.history));

console.log(isValidNumber("banana"));

console.log(displayResult(123456789012345));