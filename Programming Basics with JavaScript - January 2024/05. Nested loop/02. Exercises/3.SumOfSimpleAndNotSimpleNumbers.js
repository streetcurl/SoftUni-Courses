function sumOfSimpleAndNotSimpleNumbers(input) {

    let sumPrime = 0;
    let sumNonPrime = 0;

    debugger
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "stop") {
            break;
        }

        let currentNumber = Number(input[i]);

        if (currentNumber < 0) {
            currentNumber = "Number is negative."
            console.log(`${currentNumber}`);
        } else if (currentNumber % 2 === 0 && currentNumber !== 2 || currentNumber % 3 === 0 && currentNumber !== 3) {
            sumNonPrime += currentNumber;
        } else {
            sumPrime += currentNumber;
        }
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}

sumOfSimpleAndNotSimpleNumbers(["0",
    "-9",
    "0",
    "stop"]);