function smallestNumber(input) {
    let inputElement = Number(input[0]);
    let index = 1;
    let smallesttWholeNumber = Number.MAX_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let num = Number(inputElement);
        if (num < smallesttWholeNumber) {
            smallesttWholeNumber = num;
        }
        inputElement = input[index];
        index++;
    }

    console.log(`${smallesttWholeNumber}`);
}

smallestNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
