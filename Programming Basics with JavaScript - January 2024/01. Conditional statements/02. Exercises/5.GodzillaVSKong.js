function GodzillaVSKong(input) {
    let budget = Number(input[0]);
    let statisti = Number(input[1]);
    let priceClothingStatist = Number(input[2]);
    let allDecor = .1 * budget;
    let newPriceClothingStatist = 0;

    if (statisti > 150) {
        newPriceClothingStatist = priceClothingStatist - (priceClothingStatist * .1);
        let totalSumClothes = newPriceClothingStatist * statisti;
        let totalSumFilm = allDecor + totalSumClothes;
        let leftOfBudget = Math.abs((budget - totalSumFilm)).toFixed(2);
        if (totalSumFilm > budget) {
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${leftOfBudget} leva more.`);
        }
        else {
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${leftOfBudget} leva left.`);
        }
    } else {
        newPriceClothingStatist = priceClothingStatist;
        let totalSumClothes = newPriceClothingStatist * statisti;
        let totalSumFilm = allDecor + totalSumClothes;
        let leftOfBudget = Math.abs((budget - totalSumFilm)).toFixed(2);
        if (totalSumFilm > budget) {
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${leftOfBudget} leva more.`);
        }
        else {
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${leftOfBudget} leva left.`);
        }
    }
}

GodzillaVSKong(["20000", "120", "55.5"]);