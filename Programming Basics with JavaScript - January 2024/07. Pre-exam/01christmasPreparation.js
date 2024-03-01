function christmasPreparation(input) {

    const quantityPaperRolls = Number(input[0]);
    const quantityClothRolls = Number(input[1]);
    const litersGlue = Number(input[2]);
    const percentDiscount = Number(input[3]);

    let totalPrice = ((quantityPaperRolls * 5.8) + (quantityClothRolls * 7.2) + (litersGlue * 1.2)) * (1 - (percentDiscount / 100))

    console.log(totalPrice.toFixed(3));

}

christmasPreparation(["2", "3", "2.5", "25"]);

christmasPreparation(["4", "2", "5", "13"]);

christmasPreparation(["7", "8", "0.5", "45"]);
