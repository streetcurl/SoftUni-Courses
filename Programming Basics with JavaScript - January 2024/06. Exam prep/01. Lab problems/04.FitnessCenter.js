function fitnessCenter(input) {
    const numberOfFitnessManiacs = Number(input[0]);

    let backTrain = 0;
    let chestTrain = 0;
    let legsTrain = 0;
    let absTrain = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let workOut = 0;
    let protein = 0;
    debugger
    for (let i = 1; i < input.length; i++) {

        let activeArrayElement = input[i];

        if (activeArrayElement == "Back") {
            backTrain++;
            workOut++;
        } else if (activeArrayElement == "Chest") {
            chestTrain++;
            workOut++;
        } else if (activeArrayElement == "Legs") {
            legsTrain++;
            workOut++;
        } else if (activeArrayElement == "Abs") {
            absTrain++;
            workOut++;
        } else if (activeArrayElement == "Protein shake") {
            proteinShake++;
            protein++;
        } else if (activeArrayElement == "Protein bar") {
            proteinBar++;
            protein++;
        }
    }

    console.log(`${backTrain} - back`);
    console.log(`${chestTrain} - chest`);
    console.log(`${legsTrain} - legs`);
    console.log(`${absTrain} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${((workOut / numberOfFitnessManiacs) * 100).toFixed(2)}% - work out`);
    console.log(`${((protein / numberOfFitnessManiacs) * 100).toFixed(2)}% - protein`);
}

fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"]);