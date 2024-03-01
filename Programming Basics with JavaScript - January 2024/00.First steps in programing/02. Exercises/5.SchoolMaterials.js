function schoolMaterials(input) {
    const penPrice = 5.8;
    const markerPrice = 7.2;
    const detergentPrice = 1.2;
    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let percentdiscount = Number(input[3]);
    let penSumPrice = penCount * penPrice;
    let markerSumPrice = markerCount * markerPrice;
    let detergentSumPrice = litersDetergent * detergentPrice;
    let sumAllMaterials = penSumPrice + markerSumPrice + detergentSumPrice;
    let priceWithDiscount = sumAllMaterials - (sumAllMaterials * (percentdiscount / 100));

    console.log(priceWithDiscount);
}

schoolMaterials(["4", "2", "5", "13"]);