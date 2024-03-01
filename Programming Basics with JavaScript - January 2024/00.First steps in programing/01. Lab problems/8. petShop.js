function petShop(input) {
    let petFoodForDogs = Number(input[0]);
    let petFoodForCats = Number(input[1]);
    let costFood = petFoodForDogs * 2.5 + petFoodForCats * 4

    console.log(` ${costFood} lv.`)
}

petShop(["13", "9"]);