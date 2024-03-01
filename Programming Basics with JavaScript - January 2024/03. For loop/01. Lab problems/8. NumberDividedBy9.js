function numbersDividedBy9(input) {
    let numberStart = Number(input[0]);
    let numberEnd = Number(input[1]);
    let sumOfNumbersThatCanBeDividedBy9 = 0;

    for (let i = numberStart; i < numberEnd; i++) {
        if (i % 9 == 0) {
            sumOfNumbersThatCanBeDividedBy9 = i + sumOfNumbersThatCanBeDividedBy9;
        }
    }
    console.log(`The sum: ${sumOfNumbersThatCanBeDividedBy9}`)

    for (let i = numberStart; i < numberEnd; i++) {

        if (i % 9 == 0) {
            console.log(i);
        }
    }

}

numbersDividedBy9(["100", "200"]);