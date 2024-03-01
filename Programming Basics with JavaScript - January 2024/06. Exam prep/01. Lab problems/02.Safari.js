function famillyTrip(input) {
    const priceFuelLitre = 2.1;
    const travelGuide = 100;
    const discountSaturday = .90;
    const discountSunday = .80;

    let budget = Number(input[0]);
    let litresFuelNeeded = Number(input[1]);
    let dayOfWeek = input[2];
    let discount = 0;

    if (dayOfWeek == "Saturday") {
        discount = discountSaturday;
    } else if (dayOfWeek == "Sunday") {
        discount = discountSunday;
    }


    let safariCost = ((litresFuelNeeded * priceFuelLitre) + travelGuide) * discount;

    let diffSum = Math.abs(budget - safariCost);

    if (budget >= safariCost) {
        console.log(`Safari time! Money left: ${diffSum.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${diffSum.toFixed(2)} lv.`);
    }

}

famillyTrip(["120",
    "30",
    "Saturday"]);

