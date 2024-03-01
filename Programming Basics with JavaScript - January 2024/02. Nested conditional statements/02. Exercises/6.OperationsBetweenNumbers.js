function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = String(input[2]);
    let calculation = 0;
    let leftover = 0;

    if ((operator == "+") || (operator == "-") || (operator == "*")) {
        switch (operator) {
            case "+":
                calculation = n1 + n2;
                if (calculation % 2 == 0) {
                    leftover = "even";
                } else {
                    leftover = "odd";
                }
                console.log(`${n1} ${operator} ${n2} = ${calculation} - ${leftover} `);
                break;

            case "-":
                calculation = n1 - n2;
                if (calculation % 2 == 0) {
                    leftover = "even";
                } else {
                    leftover = "odd";
                }
                console.log(`${n1} ${operator} ${n2} = ${calculation} - ${leftover} `);
                break;

            case "*":
                calculation = n1 * n2;
                if (calculation % 2 == 0) {
                    leftover = "even";
                } else {
                    leftover = "odd";
                }
                console.log(`${n1} ${operator} ${n2} = ${calculation} - ${leftover} `);
                break;
        }
    } else if (operator == "/" && n2 != 0) {
        calculation = (n1 / n2).toFixed(2);
        console.log(`${n1} ${operator} ${n2} = ${calculation}`);
    } else if (operator == "%" && n2 > 0) {
        leftover = (n1 % n2);
        console.log(`${n1} % ${n2} = ${leftover}`);
    } else if (operator == "/" && n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator == "%" && n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
    }
}

operationsBetweenNumbers(["7", "3", "*"]);