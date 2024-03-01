function stepGoals(input) {
    const goaLSteps = 10000;
    let stepsReached = 0;
    let index = 0;
    debugger
    while (index < input.length) {
        if (input[index] === "Going home") {
            index++;
        } else {
            stepsReached += Number(input[index]);
            index++;
        }
    }

    let stepDiff = Math.abs(stepsReached - goaLSteps);

    if (stepsReached >= goaLSteps) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepDiff} steps over the goal!`);
    } else {
        let stepUnderGoal = goaLSteps - stepsReached;
        console.log(`${stepDiff} more steps to reach goal.`);
    }

}

stepGoals(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])

    ;