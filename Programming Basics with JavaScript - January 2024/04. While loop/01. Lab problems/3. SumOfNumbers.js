function sumOfNumbers(input) {
    const firstNumber = Number(input[0]);
    let index = 1;
    let sumOfNumbers = 0;

    while (sumOfNumbers < firstNumber) {
        sumOfNumbers += Number(input[index]);
        index++;
    }

    console.log(sumOfNumbers);

}

sumOfNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);
