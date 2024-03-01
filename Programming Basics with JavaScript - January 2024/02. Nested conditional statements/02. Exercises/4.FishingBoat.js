function fishingBoat(input) {
    const priceShipSpring = 3000;
    const priceShipWinter = 2600;
    const priceShip = 4200;

    let budget = Number(input[0]);
    let season = String(input[1]);
    let numberOfFishermen = Number(input[2]);
    let leftSum = 0;
    let fishingAmount = 0;
    debugger
    switch (season) {
        case "Spring":
            fishingAmount = priceShipSpring;
            break;
        case "Summer":
        case "Autumn":
            fishingAmount = priceShip;
            break;
        case "Winter":
            fishingAmount = priceShipWinter;
            break;
    }

    if (numberOfFishermen <= 6) {
        fishingAmount = (fishingAmount * .9).toFixed(2);
    } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
        fishingAmount = (fishingAmount * .85).toFixed(2);
    } else {
        fishingAmount = (fishingAmount * .75).toFixed(2);
    }

    if (numberOfFishermen % 2 == 0 && season != "Autumn") {
        fishingAmount = fishingAmount * .95;
        if ((budget - fishingAmount) >= 0) {
            leftSum = (budget - fishingAmount).toFixed(2);
            console.log(`Yes! You have ${leftSum} leva left.`);
        } else {
            leftSum = (fishingAmount - budget).toFixed(2);
            console.log(`Not enough money! You need ${leftSum} leva.`);
        }
    } else {
        if ((budget - fishingAmount) >= 0) {
            leftSum = (budget - fishingAmount).toFixed(2);
            console.log(`Yes! You have ${leftSum} leva left.`);
        } else {
            leftSum = (fishingAmount - budget).toFixed(2);
            console.log(`Not enough money! You need ${leftSum} leva.`);
        }
    }
}

fishingBoat(["1", "Spring", "4"]);