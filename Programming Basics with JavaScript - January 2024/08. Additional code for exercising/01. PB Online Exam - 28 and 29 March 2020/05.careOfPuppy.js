function careOfPuppy(input) {

    const boughtPuppyFood = Number(input[0]) * 1000;
    let days = 1;
    let foodEaten = 0;

    while (input[days] !== "Adopted") {
        foodEaten += Number(input[days]);
        days++;
    }

    if (foodEaten <= boughtPuppyFood) {

        let leftfood = boughtPuppyFood - foodEaten;

        console.log(`Food is enough! Leftovers: ${leftfood} grams.`);

    } else {
        let foodNeeded = foodEaten - boughtPuppyFood;

        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }

}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);

careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);

careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
