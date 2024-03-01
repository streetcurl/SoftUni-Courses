function lunchBreak(input) {
    let nameSerial = String(input[0]);
    let timeLength = Number(input[1]);
    let breakLength = Number(input[2]);
    let timeLunch = (1 / 8 * breakLength);
    let timeBreak = (1 / 4 * breakLength);
    let timeLeft = breakLength - timeLunch - timeBreak;
    if (timeLeft > timeLength) {
        let breakTimeLeft = Math.ceil(timeLeft - timeLength);
        console.log(`You have enough time to watch ${nameSerial} and left with ${breakTimeLeft} minutes free time.`);
    } else {
        let breakTimeLeft = Math.abs(Math.ceil(timeLength - timeLeft));
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${breakTimeLeft} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);