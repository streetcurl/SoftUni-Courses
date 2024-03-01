function balls(input) {

    const numberOfBalls = Number(input[0]); // from 1 to 1000

    let totalPoints = 0;
    let totalRedBalls = 0;
    let totalOrangeBalls = 0;
    let totalYellowBalls = 0;
    let totalWhiteBalls = 0;
    let totalBlackBalls = 0;
    let totalOtherColorBalls = 0;

    for (let i = 1; i < input.length; i++) {
        ballColor = input[i];

        if (ballColor === "red") {
            totalPoints += 5;
            totalRedBalls++;
        } else if (ballColor === "orange") {
            totalPoints += 10;
            totalOrangeBalls++;
        } else if (ballColor === "yellow") {
            totalPoints += 15;
            totalYellowBalls++;
        } else if (ballColor === "white") {
            totalPoints += 20;
            totalWhiteBalls++;
        } else if (ballColor === "black") {
            totalPoints = Math.floor(totalPoints / 2);
            totalBlackBalls++;
        } else {
            totalOtherColorBalls++;
        }

    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${totalRedBalls}`);
    console.log(`Orange balls: ${totalOrangeBalls}`);
    console.log(`Yellow balls: ${totalYellowBalls}`);
    console.log(`White balls: ${totalWhiteBalls}`);
    console.log(`Other colors picked: ${totalOtherColorBalls}`);
    console.log(`Divides from black balls: ${totalBlackBalls}`);

}

balls(["3", "white", "black", "pink"]);

// balls(["5","red","red","ddd","ddd","ddd"]);
