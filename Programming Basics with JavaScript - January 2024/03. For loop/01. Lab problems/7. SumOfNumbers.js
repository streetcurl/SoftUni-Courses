function sumOfNumbers(input) {
    let inputNumber = String(input[0]);
    let sumOfNumbers = 0;
    for (let i = 0; i < inputNumber.length; i++) {
        sumOfNumbers = Number(inputNumber[i]) + sumOfNumbers;
    }
    console.log(`The sum of the digits is:${sumOfNumbers}`);
}

sumOfNumbers(["564891"])