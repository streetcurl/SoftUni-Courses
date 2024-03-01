function trainTheTrainers(inputs) {
    const numberOfTrainers = Number(inputs[0]);
    let totalGrades = 0;
    let numberOfGrades = 0;

    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i] === "Finish") {
            break;
        } else {
            let presentationName = inputs[i];
            let presentationSumGrades = 0;

            for (let j = 1; j <= numberOfTrainers; j++) {
                presentationSumGrades += Number(inputs[i + j]);
            }

            i += numberOfTrainers;

            let averagePresentationGrade = presentationSumGrades / numberOfTrainers;
            console.log(`${presentationName} - ${averagePresentationGrade.toFixed(2)}.`);

            totalGrades += presentationSumGrades;
            numberOfGrades += numberOfTrainers;
        }
    }

    let averageGrade = totalGrades / numberOfGrades;
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