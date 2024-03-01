function club(input) {
    let income = 0;
    let desiredProfit = input[0];

    for (let i = 1; i < input.length; i++) {
        let element = input[i];

        if (isNaN(element)) {

            if (element === "Party!") {
                let missingAmount = desiredProfit - income
                console.log(`We need ${missingAmount.toFixed(2)} leva more.`);
                console.log(`Club income - ${income.toFixed(2)} leva.`);
            } else {
                let priceOfCoctail = element.length;
                i++;
                let numberOfCoctails = input[i];
                let orderPrice = priceOfCoctail * numberOfCoctails;

                if (orderPrice % 2 === 0) {

                    income += (numberOfCoctails * priceOfCoctail)

                } else {
                    income += ((numberOfCoctails * priceOfCoctail) * .75)
                }
            }

        }

        if (income >= desiredProfit) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;
        }

    }

}

club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"]);