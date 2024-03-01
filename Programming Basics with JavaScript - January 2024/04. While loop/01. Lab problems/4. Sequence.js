function sequence(input) {
    const inputNumber = Number(input[0]);
    let numberOutput = 0;

    while (((numberOutput * 2) + 1) <= inputNumber) {
        numberOutput = (numberOutput * 2) + 1;
        console.log(numberOutput);
    }

}

sequence(["8"]);