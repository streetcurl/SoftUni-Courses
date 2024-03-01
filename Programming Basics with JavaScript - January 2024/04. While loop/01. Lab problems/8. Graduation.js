function graduation(input) {
    let nameStudent = String(input[0]);
    let newArray = input.slice(1);
    let yearGrade = 0;
    let excluded = 0;
    let grade = 0;
    let averageGrade = 0;

    debugger
    while (grade < newArray.length) {
        yearGrade = Number(newArray[grade]);
        if (yearGrade == 2 || yearGrade == 3) {
            grade++;
            break;
        } else {
            grade++;
            averageGrade += yearGrade;
        }
    }

    if (grade != newArray.length) {
        console.log(`${nameStudent} has been excluded at ${grade} grade`);
    } else {
        averageGrade /= newArray.length;
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}


graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "2"]);