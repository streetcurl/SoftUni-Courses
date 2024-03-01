function vacation(input) {
    const neededSum = Number(input[0]);
    let actualSum = Number(input[1]);
    let numberOfDays = 0;
    let spentDays = 0;

    while (actualSum < neededSum && spentDays < 5) {
        let typeOfMath = input[numberOfDays * 2 + 2];
        let sum = Number(input[numberOfDays * 2 + 3]);

        if (typeOfMath === "spend") {
            actualSum -= sum;
            spentDays++;
        } else if (typeOfMath === "save") {
            actualSum += sum;
            spentDays = 0;
        }

        if (actualSum < 0) {
            actualSum = 0;
        }

        numberOfDays++;
    }

    if (spentDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${numberOfDays}`);
    } else {
        console.log(`You saved the money for ${numberOfDays} days.`);
    }
}

console.log();

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);
