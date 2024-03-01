function examPreparation(input) {
    const numberOfAllowedUnsatisfiedProblems = Number(input[0]);
    let numberOfUnsatisfiedProblems = 0;
    let problemScore = 0;
    let index = 1;

    while (numberOfUnsatisfiedProblems < numberOfAllowedUnsatisfiedProblems) {
        const nameOfProblem = input[index++];
        if (nameOfProblem === "Enough") {
            break;
        }

        const problemGrade = Number(input[index++]);

        if (problemGrade <= 4) {
            numberOfUnsatisfiedProblems++;
        }

        problemScore += problemGrade;
    }

    if (numberOfUnsatisfiedProblems === numberOfAllowedUnsatisfiedProblems) {
        console.log(`You need a break, ${numberOfUnsatisfiedProblems} poor grades.`);
    } else {
        const averageGrade = (problemScore / (index / 2 - 1)).toFixed(2);
        console.log(`Average score: ${averageGrade}`);
        console.log(`Number of problems: ${Math.floor(index / 2)}`);
        console.log(`Last problem: ${input[index - 2]}`);
    }
}
