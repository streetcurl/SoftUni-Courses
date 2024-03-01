function bitCoinMining(input) {

    const oneBitCoin = 11949.16;
    const oneGramGold = 67.51;

    let numberOfDays = Number(input.length);
    let dayOfFirstBoughtBitCoin = 0;
    let countOfBitcoins = 0;
    let money = 0;

    for (let i = 0; i < numberOfDays; i++) {
        let minedGoldForTheDay = Number(input[i]);
        let day = (i+1);

        if (day % 3 === 0) {
            minedGoldForTheDay *= 0.7;
        } 

        money += (minedGoldForTheDay * oneGramGold);

        if(money >= oneBitCoin) {

            if(dayOfFirstBoughtBitCoin === 0) {
                dayOfFirstBoughtBitCoin = i+1;
            }

            while (money > oneBitCoin) {
            money -= oneBitCoin; 
            countOfBitcoins++;
            }

        }

    }

    console.log(`Bought bitcoins: ${countOfBitcoins}`);
    
    if(countOfBitcoins != 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBoughtBitCoin}`);
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

// bitCoinMining([50, 100]);

// bitCoinMining([100,200,300]);

bitCoinMining([3124.15, 504.212, 2511.124]);