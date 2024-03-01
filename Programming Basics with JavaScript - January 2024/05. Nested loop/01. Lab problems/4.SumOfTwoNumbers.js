function sumOfTwoNumbers(input) {
    const firstNumber = Number(input[0]);
    const secondNumber = Number(input[1]);
    const magicNumber = Number(input[2]);

    let combinationNumber = 0;
    debugger
    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let j = firstNumber; j <= secondNumber; j++) {
            combinationNumber++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationNumber} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }

    }

    console.log(`${combinationNumber} combinations - neither equals ${magicNumber}`);


}

sumOfTwoNumbers(["1",
    "10",
    "5"]
);