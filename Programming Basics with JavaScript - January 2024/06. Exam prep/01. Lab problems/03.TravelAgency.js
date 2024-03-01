function travelAgency(input) {
    const travelCity = input[0];
    const packageType = input[1];
    const vipDiscount = input[2];

    let numberOfDays = Number(input[3]);
    let priceSum = 0;

    if (numberOfDays <= 0) {

        console.log(`Days must be positive number!`);
        return;

    } else if (numberOfDays > 7) {
        numberOfDays--;
    }

    if (
        (travelCity !== "Bansko" && travelCity !== "Borovets" && travelCity !== "Varna" && travelCity !== "Burgas") ||
        (packageType !== "noEquipment" && packageType !== "withEquipment" && packageType !== "noBreakfast" && packageType !== "withBreakfast")
    ) {

        console.log(`Invalid input!`);
        return;

    } else {

        switch (travelCity) {
            case "Bansko":
            case "Borovets":
                switch (packageType) {
                    case "noEquipment":
                        priceSum = 80 * numberOfDays;
                        if (vipDiscount == "yes") {
                            priceSum *= .95;
                        } else {
                            priceSum *= 1;
                        }
                        break;
                    case "withEquipment":
                        priceSum = 100 * numberOfDays;
                        if (vipDiscount == "yes") {
                            priceSum *= .90;
                        } else {
                            priceSum *= 1;
                        }
                        break;
                }
                break;
            case "Varna":
            case "Burgas":
                switch (packageType) {
                    case "noBreakfast":
                        priceSum = 100 * numberOfDays;
                        if (vipDiscount == "yes") {
                            priceSum *= .93;
                        } else {
                            priceSum *= 1;
                        }
                        break;
                    case "withBreakfast":
                        priceSum = 130 * numberOfDays;
                        if (vipDiscount == "yes") {
                            priceSum *= .88;
                        } else {
                            priceSum *= 1;
                        }
                        break;
                }
                break;
            default:
                break;
        }

        console.log(`The price is ${priceSum.toFixed(2)}lv! Have a nice time!`);
    }
}

travelAgency(["Bansko",
    "noEquipment",
    "no",
    "100"]);
