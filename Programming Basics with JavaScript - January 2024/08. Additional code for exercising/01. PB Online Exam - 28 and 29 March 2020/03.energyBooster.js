function energyBooster(input) {

    const typeFruit = input[0];
    const setSize = input[1];
    const numberOfSets = Number(input[2]);

    let sumOfEnergyBooster = 0;

    switch (typeFruit) {
        case "Watermelon":
            if(setSize === "small") {
                sumOfEnergyBooster = 56 * 2 * numberOfSets;
            } else {
                sumOfEnergyBooster = 28.70 * 5 * numberOfSets;
            }
            break;

            case "Mango":
                if(setSize === "small") {
                    sumOfEnergyBooster = 36.66 * 2 * numberOfSets;
                } else {
                    sumOfEnergyBooster = 19.60 * 5 * numberOfSets;
                }
            break;

            case "Pineapple":
                if(setSize === "small") {
                    sumOfEnergyBooster = 42.10 * 2 * numberOfSets;
                } else {
                    sumOfEnergyBooster = 24.80 * 5 * numberOfSets;
                }
            break;

            case "Raspberry":
                if(setSize === "small") {
                    sumOfEnergyBooster = 20 * 2 * numberOfSets;
                } else {
                    sumOfEnergyBooster = 15.20 * 5 * numberOfSets;
                }
            break;
    
        default:
            break;
    }

    if(sumOfEnergyBooster >= 400 && sumOfEnergyBooster <= 1000) {
        sumOfEnergyBooster *= .85;
    } else if (sumOfEnergyBooster > 1000) {
        sumOfEnergyBooster /= 2;
    }

    console.log(`${sumOfEnergyBooster.toFixed(2)} lv.`);
    
}

energyBooster(["Watermelon","big","4"]);

energyBooster(["Pineapple","small","1"]);

energyBooster(["Raspberry","small","50"]);

energyBooster(["Mango","big","8"]);
