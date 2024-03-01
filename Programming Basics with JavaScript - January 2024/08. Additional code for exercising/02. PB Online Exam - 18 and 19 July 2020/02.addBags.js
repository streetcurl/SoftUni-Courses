function addBags(input) {
    let priceAbove20Kg = Number(input[0]);
    const allBagsKilos = Number(input[1]);
    const daysToFlight = Number(input[2]);
    const numberOfBags = Number(input[3]);

    let priceOfLuggage = 0;

    if (allBagsKilos < 10) {
        priceAbove20Kg *= 0.2;
    } else if (allBagsKilos <= 20) {
        priceAbove20Kg *= 0.5;
    }

    if (daysToFlight > 30) {
        priceAbove20Kg *= 1.10;
    } else if (daysToFlight >= 7) {
        priceAbove20Kg *= 1.15;
    } else {
        priceAbove20Kg *= 1.40;
    }

    priceOfLuggage = priceAbove20Kg * numberOfBags;

    console.log(`The total price of bags is: ${priceOfLuggage.toFixed(2)} lv. `);
}

// addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
// addBags(["63.80", "23", "3", "1"]);
