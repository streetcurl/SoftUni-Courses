function examPreparation(input) {
    let numberOfUnsatisfiedProblems = 0;
    const numberOfAllowedUnsatisfiedProblems = Number(input[0]);
    let nameOfProblem = String("");
    let problemGrade = 0;
    let problemScore = 0;
    let averageGrade = 0;
    let index = 0;
    debugger
    while (numberOfUnsatisfiedProblems < numberOfAllowedUnsatisfiedProblems) {
        nameOfProblem = input[index * 2 + 1];
        problemGrade = Number(input[index * 2 + 2]);
        if (nameOfProblem == "Enough") {
            nameOfProblem = input[index * 2 - 1];
            break;
        } else if (problemGrade <= 4) {
            index++;
            numberOfUnsatisfiedProblems++;
            problemScore += problemGrade;
        } else {
            index++;
            problemScore += problemGrade;
        }
    }

    if (numberOfUnsatisfiedProblems === numberOfAllowedUnsatisfiedProblems) {
        console.log(`You need a break, ${numberOfUnsatisfiedProblems} poor grades.`);
    } else {
        averageGrade = (problemScore / index).toFixed(2);
        console.log(`Average score: ${averageGrade}`);
        console.log(`Number of problems: ${index}`);
        console.log(`Last problem: ${nameOfProblem} `);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]
);
