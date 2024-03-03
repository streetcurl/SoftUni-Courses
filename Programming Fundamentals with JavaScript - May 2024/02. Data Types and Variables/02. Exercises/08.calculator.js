function calculator(num1, operator, num2) {

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.error("Error: Division by zero is not allowed.");
                return;
            }
            break;
    }

    console.log(`${result.toFixed(2)}`);

}

calculator(5, "+", 10);

calculator(25.5, "-", 3);

calculator(25, "*", -4);

calculator(25.5, "/", 0);

calculator(25.5, "/", -5);