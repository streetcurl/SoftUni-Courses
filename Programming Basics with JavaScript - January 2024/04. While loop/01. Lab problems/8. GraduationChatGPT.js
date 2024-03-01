function graduation(input) {
    let nameStudent = String(input[0]);
    let grades = input.slice(1);
    let excluded = false;
    let totalGrades = 0;

    for (let grade = 0; grade < grades.length; grade++) {
        let yearGrade = Number(grades[grade]);

        if (yearGrade < 4) {
            excluded = true;
            console.log(`${nameStudent} has been excluded at ${grade + 1} grade`);
            break;
        }

        totalGrades += yearGrade;
    }

    if (!excluded) {
        let averageGrade = totalGrades / grades.length;
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "2"]);