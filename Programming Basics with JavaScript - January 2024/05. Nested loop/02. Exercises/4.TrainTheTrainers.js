function trainTheTrainers(inputs) {

    const numberOfTrainers = Number(inputs[0]);
    let numberOfGrades = 0;
    let sumOfAllGrades = 0;
    let presentationName = "";
    let numberOfPresentations = 0;

    debugger

    for (let i = 1; i < inputs.length; i++) {

        if (inputs[i] === "Finish") {
            break;
        } else {

            if (isNaN(inputs[i])) {
                presentationName = inputs[i];
            } else {
                let presentationSumGrades = 0;
                for (let j = 1; j <= numberOfTrainers; j++) {
                    presentationSumGrades += Number(inputs[i + j - 1]);
                }

                i += numberOfTrainers - 1;

                let averagePresentationGrade = presentationSumGrades / numberOfTrainers;

                console.log(`${presentationName} - ${averagePresentationGrade.toFixed(2)}.`);

                numberOfPresentations++;

                sumOfAllGrades += presentationSumGrades;

                numberOfGrades = numberOfTrainers * numberOfPresentations;
            }
        }


    }



    let averageGrade = sumOfAllGrades / numberOfGrades;

    console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);