function aluminumJoinery(input) {

    const numberOfWindows = Number(input[0]);
    const typeOfWindows = input[1];
    const wayOfDelivery = input[2];

    let finalSum = 0;

    if (numberOfWindows <= 10) {
        console.log("Invalid order");
        return;
    }

    let priceOfWindow = 0;

    switch (typeOfWindows) {
        case "90X130":

            if (numberOfWindows >= 60) {
                priceOfWindow = .92 * 110;
            } else if (numberOfWindows >= 30) {
                priceOfWindow = .95 * 110;
            } else {
                priceOfWindow = 110;
            }

            break;

        case "100X150":

            if (numberOfWindows >= 80) {
                priceOfWindow = .90 * 140;
            } else if (numberOfWindows >= 40) {
                priceOfWindow = .94 * 140;
            } else {
                priceOfWindow = 140;
            }

            break;

        case "130X180":
            if (numberOfWindows >= 50) {
                priceOfWindow = .88 * 190;
            } else if (numberOfWindows >= 20) {
                priceOfWindow = .93 * 190;
            } else {
                priceOfWindow = 190;
            }

            break;

        case "200X300":
            if (numberOfWindows >= 50) {
                priceOfWindow = .86 * 250;
            } else if (numberOfWindows >= 25) {
                priceOfWindow = .91 * 250;
            } else {
                priceOfWindow = 250;
            }

            break;
    }

    finalSum = priceOfWindow * numberOfWindows;

    if (wayOfDelivery === "With delivery") {
        finalSum += 60;
    }

    if (numberOfWindows > 99) {
        finalSum *= .96;
    }

    console.log(`${finalSum.toFixed(2)} BGN`);


}

// aluminumJoinery(["40", "90X130", "Without delivery"])

// aluminumJoinery(["105", "100X150", "With delivery"])

aluminumJoinery(["2", "130X180", "With delivery"])

