function tournamentOfChristmas(input) {

    let numberOfDays = Number(input[0]);
    let dayCount = 0;

    let raisedTotalMoney = 0;
    let raisedMoneyForTheDay = 0;
    let lostGames = 0;
    let wonGames = 0;
    let daysWon = 0;
    let tournamentWin = false;


    for (let i = 1; i < input.length; i += 2) {

        let gameWinOrLose = input[i + 1];

        if (input[i] === "Finish") {
            dayCount++;
            if (dayCount - 1 <= numberOfDays) {
                if (wonGames > lostGames) {
                    raisedMoneyForTheDay *= 1.1;
                    raisedTotalMoney += raisedMoneyForTheDay;
                    raisedMoneyForTheDay = 0;
                    daysWon++;
                    i--;
                    wonGames = 0;
                    lostGames = 0;
                } else {
                    raisedTotalMoney += raisedMoneyForTheDay;
                    raisedMoneyForTheDay = 0;
                    i--;
                }
            }
        } else if (gameWinOrLose === "win") {
            raisedMoneyForTheDay += 20;
            wonGames++;

        } else if (gameWinOrLose === "lose") {
            lostGames++;
        }


    }

    if (daysWon / 2 >= numberOfDays / 2) {
        raisedTotalMoney *= 1.2;
    }

    if (daysWon > numberOfDays / 2) {
        tournamentWin = true;
    }

    if (tournamentWin === true) {
        console.log(`You won the tournament! Total raised money: ${raisedTotalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${raisedTotalMoney.toFixed(2)}`);
    }

    return;

}

// tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);

tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball", "win", "Finish"])

