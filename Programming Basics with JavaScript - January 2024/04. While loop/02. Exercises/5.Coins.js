function coins(input) {
    let change = Number(input[0]).toFixed(2);
    let numberOfCoins = 0;
    debugger
    while (change > 0) {
        if (change > 2) {
            change -= 2;
        } else if (change >= 1) {
            change = parseFloat((change - 1).toFixed(2));
        } else if (change >= .5) {
            change = parseFloat((change - 0.5).toFixed(2));
        } else if (change >= .2) {
            change = parseFloat((change - 0.2).toFixed(2));
        } else if (change >= .1) {
            change = parseFloat((change - 0.1).toFixed(2));
        } else if (change >= .05) {
            change = parseFloat((change - 0.05).toFixed(2));
        } else if (change >= .02) {
            change = parseFloat((change - 0.02).toFixed(2));
        } else if (change >= .01) {
            change = parseFloat((change - 0.01).toFixed(2));
        }
        numberOfCoins++;
    }

    console.log(numberOfCoins);
}

coins(["1.23"]);