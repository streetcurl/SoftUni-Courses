function hotelRoom(input) {
    let month = String(input[0]);
    let numberOfNights = Number(input[1]);
    let staySumApartment = 0;
    let staySumStudio = 0;
    debugger
    if (month == "May" || month == "October") {
        if (numberOfNights <= 14 && numberOfNights > 7) {
            staySumApartment = (65 * numberOfNights).toFixed(2);
            staySumStudio = (50 * numberOfNights * .95).toFixed(2);
        } else if (numberOfNights > 14) {
            staySumApartment = (65 * numberOfNights * .90).toFixed(2);
            staySumStudio = (50 * numberOfNights * .70).toFixed(2);
        }
    } else if (month == "June" || month == "September") {
        if (numberOfNights > 14) {
            staySumApartment = (68.70 * numberOfNights * .90).toFixed(2);
            staySumStudio = (75.20 * numberOfNights * .80).toFixed(2);
        } else {
            staySumApartment = (68.70 * numberOfNights).toFixed(2);
            staySumStudio = (75.20 * numberOfNights).toFixed(2);
        }
    } else if (month == "July" || month == "August") {
        if (numberOfNights > 14) {
            staySumApartment = (77 * numberOfNights * .90).toFixed(2);
            staySumStudio = (76 * numberOfNights).toFixed(2);
        } else {
            staySumApartment = (77 * numberOfNights).toFixed(2);
            staySumStudio = (76 * numberOfNights).toFixed(2);
        }
    }

    console.log(`Apartment: ${staySumApartment} lv.`);
    console.log(`Studio: ${staySumStudio} lv.`);

}

hotelRoom(["August", "20"]);
