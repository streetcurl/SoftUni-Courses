function oscars(input) {
    let nameActor = String(input[0]);
    const scoreAcademy = Number(input[1]);
    const numberOfJudges = Number(input[2]);
    let judgeName = 0;
    let judgeScore = 0;
    let totalScore = scoreAcademy;
    let leftScore = 0;

    for (let i = 0; i < numberOfJudges; i++) {
        if (totalScore >= 1250.5) {
            break;
        } else {
            judgeName = String(input[i * 2 + 3]);
            judgeScore = Number(input[i * 2 + 4]);
            totalScore += ((judgeName.length * judgeScore) / 2);
        }
    }

    if (totalScore < 1250.50) {
        leftScore = (1250.50 - totalScore).toFixed(1);
        console.log(`Sorry, ${nameActor} you need ${leftScore} more!`);
    } else {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
