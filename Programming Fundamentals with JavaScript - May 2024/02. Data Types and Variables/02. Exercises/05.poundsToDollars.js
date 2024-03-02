function poundToDollars(pounds) {

    const poundsToDollarsRate = 1.31;

    let dollars = pounds * poundsToDollarsRate;

    console.log(`${dollars.toFixed(3)}`);

}

poundToDollars(80);

poundToDollars(39);