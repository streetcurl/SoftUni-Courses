function agencyProfit(input) {

    const airCompany = input[0];
    const adultTickets = Number(input[1]);
    const kidTickets = Number(input[2]);
    const priceAdultTicket = Number(input[3]);
    const priceServiceFee = Number(input[4]);

    const priceKidTicket = priceAdultTicket * 0.3;

    let sumSoldTickets = (adultTickets * (priceAdultTicket + priceServiceFee)) + (kidTickets * (priceKidTicket + priceServiceFee));
    let airCompanyProfit = sumSoldTickets * 0.2;

    console.log(`The profit of your agency from ${airCompany} tickets is ${airCompanyProfit.toFixed(2)} lv.`);

}

// agencyProfit(["WizzAir", "15", "5", "120", "40"])
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"])

