function addAndSubtract(num1, num2, num3) {

    const a = num1;
    const b = num2;
    const c = num3;

    const sum = (a, b) => a + b;
    const resultOfSum = sum(a, b);

    const subtract = (resultOfSum, c) => resultOfSum - c;
    const finalResult = subtract(resultOfSum, c);

    console.log(finalResult);
}

addAndSubtract(23, 6, 10);

addAndSubtract(1, 17, 30);

addAndSubtract(42, 58, 100);