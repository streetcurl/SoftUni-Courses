function cleverLily(input) {
    const age = Number(input[0]);
    const priceWashingMachine = Number(input[1]);
    const price1Toy = Number(input[2]);
    let numberOfToys = 0;
    let savedFromBirthdays = 0;
    let stolenFromBrother = 0;
    let numberOfBirthdaysWithMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            numberOfBirthdaysWithMoney++;
            savedFromBirthdays = savedFromBirthdays + (numberOfBirthdaysWithMoney * 10);
            stolenFromBrother++;
        } else {
            numberOfToys++;
        }
    }

    let total = ((savedFromBirthdays) + (numberOfToys * price1Toy) - (stolenFromBrother * 1)).toFixed(2);
    let leftSum = Math.abs(total - priceWashingMachine).toFixed(2);

    if (total >= priceWashingMachine) {
        console.log(`Yes! ${leftSum}`)
    } else {
        console.log(`No! ${leftSum}`)
    }

}

cleverLily(["21", "1570.98", "3"]);