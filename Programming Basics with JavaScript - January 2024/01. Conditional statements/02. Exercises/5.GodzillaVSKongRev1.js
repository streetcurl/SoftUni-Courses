function GodzillaVSKong(input) {
    let budget = Number(input[0]);
    let statisti = Number(input[1]);
    let priceClothingStatist = Number(input[2]);
    let allDecor = .1 * budget;
    let newPriceClothingStatist = 0;
    let totalSumClothes = 0;
    let totalSumFilm = 0;
    let leftOfBudget = 0;

    if (statisti > 150) {
        newPriceClothingStatist = priceClothingStatist - (priceClothingStatist * .1);
        totalSumClothes = newPriceClothingStatist * statisti;
        totalSumFilm = allDecor + totalSumClothes;
        leftOfBudget = Math.abs((budget - totalSumFilm)).toFixed(2);
    } else {
        newPriceClothingStatist = priceClothingStatist;
        totalSumClothes = newPriceClothingStatist * statisti;
        totalSumFilm = allDecor + totalSumClothes;
        leftOfBudget = Math.abs((budget - totalSumFilm)).toFixed(2);
    }

    if (totalSumFilm > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${leftOfBudget} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftOfBudget} leva left.`);
    }
}

GodzillaVSKong(["9587.88", "222", "55.68"]);