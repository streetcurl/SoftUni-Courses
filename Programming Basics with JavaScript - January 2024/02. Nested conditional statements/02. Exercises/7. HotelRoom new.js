function hotelRoom(input) {
    let month = String(input[0]);
    let numberOfNights = Number(input[1]);
    let staySumApartment = 0;
    let staySumStudio = 0;
    let studioPrice = 0;
    let apartmentPrice = 0;
    debugger

    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (numberOfNights > 7 && numberOfNights <= 14) {
            staySumStudio = (studioPrice * numberOfNights * .95).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights).toFixed(2);
        } else if (numberOfNights > 14) {
            staySumStudio = (studioPrice * numberOfNights * .7).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights * .9).toFixed(2);
        } else {
            staySumStudio = (studioPrice * numberOfNights).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights).toFixed(2);
        }
    } else if (month == "June" || month == "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (numberOfNights > 14) {
            staySumStudio = (studioPrice * numberOfNights * .80).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights * .9).toFixed(2);
        } else {
            staySumStudio = (studioPrice * numberOfNights).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights).toFixed(2);
        }
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
        if (numberOfNights > 14) {
            staySumStudio = (studioPrice * numberOfNights).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights * .9).toFixed(2);
        } else {
            staySumStudio = (studioPrice * numberOfNights).toFixed(2);
            staySumApartment = (apartmentPrice * numberOfNights).toFixed(2);
        }
    }

    console.log(`Apartment: ${staySumApartment} lv.`);
    console.log(`Studio: ${staySumStudio} lv.`);

}

hotelRoom(["May", "15"]);
