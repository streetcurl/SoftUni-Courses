function skiTrip(input) {
    let vacationDays = Number(input[0]);
    let typeOfRoom = String(input[1]);
    let experience = String(input[2]);
    let finalSum = 0;
    let discount = 0;
    debugger
    switch (experience) {
        case "positive":
            switch (typeOfRoom) {
                case "room for one person":
                    finalSum = ((vacationDays - 1) * 18 * 1.25).toFixed(2);
                    break;
                case "apartment":
                    if (vacationDays < 10) {
                        finalSum = ((vacationDays - 1) * 25 * .7 * 1.25).toFixed(2);
                    } else if (vacationDays >= 10 && vacationDays <= 15) {
                        finalSum = ((vacationDays - 1) * 25 * .65 * 1.25).toFixed(2);
                    } else {
                        finalSum = ((vacationDays - 1) * 25 * .5 * 1.25).toFixed(2);
                    }
                    break;
                case "president apartment":
                    if (vacationDays < 10) {
                        finalSum = ((vacationDays - 1) * 35 * .9 * 1.25).toFixed(2);
                    } else if (vacationDays >= 10 && vacationDays <= 15) {
                        finalSum = ((vacationDays - 1) * 35 * .85 * 1.25).toFixed(2);
                    } else {
                        finalSum = ((vacationDays - 1) * 35 * .8 * 1.25).toFixed(2);
                    }
                    break;
            }
            console.log(finalSum);
            break;
        case "negative":
            switch (typeOfRoom) {
                case "room for one person":
                    finalSum = ((vacationDays - 1) * 18 * .9).toFixed(2);
                    break;
                case "apartment":
                    if (vacationDays < 10) {
                        finalSum = ((vacationDays - 1) * 25 * .7 * .9).toFixed(2);
                    } else if (vacationDays >= 10 && vacationDays <= 15) {
                        finalSum = ((vacationDays - 1) * 25 * .65 * .9).toFixed(2);
                    } else {
                        finalSum = ((vacationDays - 1) * 25 * .5 * .9).toFixed(2);
                    }
                    break;
                case "president apartment":
                    if (vacationDays < 10) {
                        finalSum = ((vacationDays - 1) * 35 * .9 * .9).toFixed(2);
                    } else if (vacationDays >= 10 && vacationDays <= 15) {
                        finalSum = ((vacationDays - 1) * 35 * .85 * .9).toFixed(2);
                    } else {
                        finalSum = ((vacationDays - 1) * 35 * .8 * .9).toFixed(2);
                    }
                    break;
            }
            console.log(finalSum);
            break;
    }

}

skiTrip(["12", "room for one person", "positive"]);