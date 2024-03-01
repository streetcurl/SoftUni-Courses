function coins(input) {
    const coinValues = [2, 1, .5, .2, .1, .05, .02, .01]
    let change = Number(input[0]).toFixed(2);
    let numberOfCoins = 0;

    for (const coin of coinValues) {
        while (change >= coin) {
            change = parseFloat((change - coin).toFixed(2));
            numberOfCoins++;
        }
    }

    console.log(numberOfCoins);
}

coins(["0.73"]);