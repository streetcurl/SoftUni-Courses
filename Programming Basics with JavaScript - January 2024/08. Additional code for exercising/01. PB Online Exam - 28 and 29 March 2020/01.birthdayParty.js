function birthdayParty(input) {
   
    const rent = Number(input);
    let cake = 0.2 * rent;
    let drinks = cake - (cake * .45);
    let animator = 1/3 * rent; 

    let birthdayCost = (rent+cake+drinks+animator).toFixed(1);

    console.log(`${birthdayCost}`);

}


// birthdayParty([2250]);

birthdayParty(3720);
