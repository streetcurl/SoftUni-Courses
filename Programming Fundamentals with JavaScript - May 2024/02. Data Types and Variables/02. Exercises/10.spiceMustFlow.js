function spiceMustFlow(startingYield) {

    let totalAmountOfSpice = 0;
    let daysMined = 0;

    while (startingYield >= 100) {
        daysMined++;
        totalAmountOfSpice += startingYield - 26;
        startingYield -= 10;
    }

    if (totalAmountOfSpice > 26) {

        totalAmountOfSpice -= 26;

    }

    console.log(daysMined);
    console.log(totalAmountOfSpice);
}


spiceMustFlow(111);

spiceMustFlow(450);