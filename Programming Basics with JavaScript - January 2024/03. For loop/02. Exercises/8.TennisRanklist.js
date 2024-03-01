function tennisRanklist(input) {
    const numberGames = Number(input[0]);
    const startScore = Number(input[1]);
    let finalPoints = startScore;
    let averagePoints = 0;
    let numberOfWins = 0;

    for (let i = 0; i < numberGames; i++) {
        if (input[i + 2] == "W") {
            finalPoints += 2000;
            numberOfWins++;
        } else if (input[i + 2] == "F") {
            finalPoints += 1200;
        } else if (input[i + 2] == "SF") {
            finalPoints += 720;
        }
    }

    averagePoints = Math.floor((finalPoints - startScore) / numberGames).toFixed(0);

    let percentWonGames = ((numberOfWins / numberGames) * 100).toFixed(2);

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWonGames}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);