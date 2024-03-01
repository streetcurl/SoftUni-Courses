function changeDesk(input) {

    const countBitcoin = Number(input[0]);
    const chineeseJoan = Number(input[1]);
    const commisionRate = Number(input[2])/100;

    let sumEuro = ((countBitcoin * 1168) + (chineeseJoan * 0.15 * 1.76)) / 1.95;
    let comisionSum = sumEuro * commisionRate;

    console.log((sumEuro-comisionSum).toFixed(2));
    
}

// changeDesk(["1","5","5"]);

// changeDesk(["20","5678","2.4"]);

// changeDesk(["7","50200.12","3"]);

changeDesk(["20","5678","2.4"])