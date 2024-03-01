function computerFirm(input) {

    const numberOfComputers = Number(input[0]);

    let averageRaiting = 0;
    let madeSales = 0;

    for (let i = 1; i <= numberOfComputers; i++) {
        let currentInput = input[i];
        let currentRaiting = 0;
        let potensialSales = 0;

        if (currentInput.length < 3) {
            currentRaiting = Number(currentInput[1]);
            potensialSales = Number(currentInput[0]);
        } else {
            currentRaiting = Number(currentInput[2]);
            potensialSales = currentInput[0] + currentInput[1];


        }
        if (currentRaiting === 2) {
            potensialSales *= 0;
        } else if (currentRaiting === 3) {
            potensialSales *= 0.5;
        } else if (currentRaiting === 4) {
            potensialSales *= 0.7;
        } else if (currentRaiting === 5) {
            potensialSales *= 0.85;
        } else if (currentRaiting === 6) {
            potensialSales *= 1;
        }

        madeSales += potensialSales;
        averageRaiting += currentRaiting;

    }

    console.log(madeSales.toFixed(2));
    console.log((averageRaiting / numberOfComputers).toFixed(2));

}


computerFirm(["3", "103", "103", "103"]);

computerFirm(["5", "122", "156", "202", "214", "185"]);

computerFirm(["2", "204", "206"]);
