function shopping(input) {
    const priceVideocard = 250;
    let budgetPeter = Number(input[0]);
    let pcsVideocards = Number(input[1]);
    let pcsProcesors = Number(input[2]);
    let pcsRam = Number(input[3]);
    let boughtVideocards = priceVideocard * pcsVideocards;
    let priceProcesors = .35 * boughtVideocards;
    let priceRam = .1 * boughtVideocards;
    let sumProducts = (priceProcesors * pcsProcesors) + (boughtVideocards) + (priceRam * pcsRam);
    let neededSum = 0;

    if (pcsVideocards > pcsProcesors) {
        sumProducts = sumProducts - (sumProducts * .15);
    }

    neededSum = (Math.abs(sumProducts - budgetPeter)).toFixed(2);

    if (sumProducts > budgetPeter) {
        console.log(`Not enough money! You need ${neededSum} leva more!`);
    } else {
        console.log(`You have ${neededSum} leva left!`);
    }
}

shopping(["900", "2", "1", "3"]);