function fitnessCard(input) {

    const budget = Number(input[0]);
    const gender = input[1];
    const age = Number(input[2]);
    const sport = input[3];
    let cardPrice = 0;

    switch (sport) {
        case "Gym":
            if (gender === "m") {
                cardPrice = 42;
            } else {
                cardPrice = 35;
            }

            break;

        case "Boxing":
            if (gender === "m") {
                cardPrice = 41;
            } else {
                cardPrice = 37;
            }

            break;

        case "Yoga":
            if (gender === "m") {
                cardPrice = 45;
            } else {
                cardPrice = 42;
            }

            break;

        case "Zumba":
            if (gender === "m") {
                cardPrice = 34;
            } else {
                cardPrice = 31;
            }

            break;

        case "Dances":
            if (gender === "m") {
                cardPrice = 51;
            } else {
                cardPrice = 53;
            }

            break;

        case "Pilates":
            if (gender === "m") {
                cardPrice = 39;
            } else {
                cardPrice = 37;
            }

            break;
        default:
            break;
    }

    if (age <= 19) {
        cardPrice *= .8;
    }

    if (cardPrice <= budget){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let neededMoney = cardPrice - budget;
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`); 
    }

}

// fitnessCard(["50", "m", "23", "Gym"]);

fitnessCard(["20", "f", "15", "Yoga"]);

// fitnessCard(["10", "m", "50", "Pilates"]);
