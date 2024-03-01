function toyShop(input) {
    const pricePuzzle = 2.60;
    const priceTalkingDoll = 3;
    const priceBear = 4.10;
    const priceMinion = 8.20;
    const priceTruck = 2;

    let priceTrip = Number(input[0]);
    let puzzlePcs = Number(input[1]);
    let talkingDollPcs = Number(input[2]);
    let bearPcs = Number(input[3])
    let minionPcs = Number(input[4])
    let truckPcs = Number(input[5])

    let sumPrice = (puzzlePcs * pricePuzzle) + (talkingDollPcs * priceTalkingDoll) + (bearPcs * priceBear) + (minionPcs * priceMinion) + (truckPcs * priceTruck);
    let toyPcs = puzzlePcs + talkingDollPcs + bearPcs + minionPcs + truckPcs;

    if (toyPcs >= 50) {
        let discountForQuantity = .25 * sumPrice;
        let finalPrice = sumPrice - discountForQuantity;
        let rentSum = .10 * finalPrice;
        let profitSum = finalPrice - rentSum;
        let leftOver = Math.abs(((profitSum - priceTrip))).toFixed(2);
        if (profitSum >= priceTrip) {
            console.log(`Yes! ${leftOver} lv left.`);
        } else {
            console.log(`Not enough money! ${leftOver} lv needed.`);
        }
    } else {
        let finalPrice = sumPrice;
        let rentSum = .10 * finalPrice;
        let profitSum = finalPrice - rentSum;
        let leftOver = Math.abs(((profitSum - priceTrip))).toFixed(2);
        if (profitSum > priceTrip) {
            console.log(`Yes! ${leftOver} lv left.`);
        } else {
            console.log(`Not enough money! ${leftOver} lv needed.`);
        }
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);