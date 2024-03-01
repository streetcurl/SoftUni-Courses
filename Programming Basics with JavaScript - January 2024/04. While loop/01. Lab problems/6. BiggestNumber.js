function biggestNum(input) {
    let inputElement = Number(input[0]);
    let index = 1;
    let biggestWholeNumber = Number.MIN_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num > biggestWholeNumber) {
            biggestWholeNumber = num;
        }
        inputElement = input[index];
        index++;
    }

    console.log(`${biggestWholeNumber}`);
}

biggestNum(["-100", "-99", "-80", "-70", "Stop"]);
