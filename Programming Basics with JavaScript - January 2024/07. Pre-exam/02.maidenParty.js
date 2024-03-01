function maidenParty(input) {

    const priceParty = Number(input[0]);
    const loveLetters = Number(input[1]);
    const waxRoses = Number(input[2]);
    const keyHolders = Number(input[3]);
    const cartoons = Number(input[4]);
    const goodLuckSurprises = Number(input[5]);

    let numberOfItemsOrdered = loveLetters + waxRoses + keyHolders + cartoons + goodLuckSurprises;

    let moneyFromSales = (loveLetters * 0.6) + (waxRoses * 7.2) + (keyHolders * 3.6) + (cartoons * 18.2) + (goodLuckSurprises * 22);

    if (numberOfItemsOrdered >= 25) {
        moneyFromSales *= .65;
    }

    moneyFromSales *= .9;

    if (moneyFromSales >= priceParty) {
        let moneyLeft = moneyFromSales - priceParty;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = priceParty - moneyFromSales;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }



}

maidenParty(["40.8", "20", "25", "30", "50", "10"]);

maidenParty(["320", "8", "2", "5", "5", "1"])
