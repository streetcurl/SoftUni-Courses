function easterCompetition(input) {
    const numberOfEasterBreads = Number(input[0]);
    let winnerName = "";
    let winnerPoints = 0;
    let competitorName = "";
    let totalNumberOfPoints = 0;

    debugger

    for (let i = 1; i < input.length; i++) {

        if (input[i] === "Stop") {
            console.log(`${competitorName} has ${totalNumberOfPoints} points.`);


            if (totalNumberOfPoints > winnerPoints) {
                console.log(`${competitorName} is the new number 1!`);
                winnerName = competitorName;
                winnerPoints = totalNumberOfPoints;
            }

            totalNumberOfPoints = 0;

        } else if (isNaN(input[i])) {
            competitorName = input[i];
        } else {
            totalNumberOfPoints += Number(input[i]);
        }

    }

    console.log(`${winnerName} won competition with ${winnerPoints} points!`);

}

easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);
