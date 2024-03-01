function finalCompetition(input) {

    const numberOfDancers = Number(input[0]);
    const numberOfPoints = Number(input[1]);
    const season = input[2];
    const place = input[3];

    let sumWon
    let sumCharity = 0;
    let moneyPerDancer = 0;

    switch (place) {
        case "Bulgaria":
            sumWon = (numberOfDancers * numberOfPoints);
            if (season === "summer") {
                sumWon *= 0.95;
            } else if (season === "winter") {
                sumWon *= 0.92;
            }
            break;

        case "Abroad":
            sumWon = (numberOfDancers * numberOfPoints) * 1.5;
            if (season === "summer") {
                sumWon *= 0.90;
            } else if (season === "winter") {
                sumWon *= 0.85;
            }
            break;

    }

    sumCharity = sumWon * 0.75;
    moneyPerDancer = (sumWon - sumCharity) / numberOfDancers


    console.log(`Charity - ${sumCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}

finalCompetition(["1", "89.5", "summer", "Abroad"]);

finalCompetition(["25", "98", "winter", "Bulgaria"]);
