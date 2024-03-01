debugger

function poolDay(input) {
    const numberOfPeople = Number(input[0]);
    const entranceFee = Number(input[1]);
    const bedFee = Number(input[2]);
    const umbrellaFee = Number(input[3]);

    let sumToPay = 0;

    sumToPay = (numberOfPeople * entranceFee) + (Math.ceil((numberOfPeople) / 2) * umbrellaFee) + (Math.ceil(numberOfPeople * .75) * bedFee)

    console.log(`${sumToPay.toFixed(2)} lv.`);

}

poolDay([50,
    6,
    8,
    4]);