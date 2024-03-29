// const operations = {
//     "multiply": (a, b) => a * b,
//     "divide": (a, b) => a / b,
//     "add": (a, b) => a + b,
//     "subtract": (a, b) => a - b,
// };

// const calculate = (numOne, numTwo, operator) => {
//     const operation = operations[operator];
//     return operation(numOne, numTwo)
// }


// console.log(calculate(5, 5, 'multiply'));

// console.log(calculate(40, 8, 'divide'));

// console.log(calculate(12, 19, 'add'));

// console.log(calculate(50, 13, 'subtract'));

function simpleCalculator(a, b, operator) {

    switch (operator) {
        case "multiply":
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;

        case "divide":
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;

        case "add":
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;

        case "subtract":
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;

        default:
            break;
    }

}

simpleCalculator(5, 5, 'multiply');

simpleCalculator(40, 8, 'divide');

simpleCalculator(12, 19, 'add');

simpleCalculator(50, 13, 'subtract');

