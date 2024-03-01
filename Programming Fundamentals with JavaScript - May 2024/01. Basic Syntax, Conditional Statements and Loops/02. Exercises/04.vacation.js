function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                price = Number(groupOfPeople) * 8.45;
            } else if (dayOfWeek === "Saturday") {
                price = Number(groupOfPeople) * 9.80;
            } else if (dayOfWeek === "Sunday") {
                price = Number(groupOfPeople) * 10.46;
            }

            if (groupOfPeople >= 30) {
                price *= 0.85;
            }
            break;

        case "Business":
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            if (dayOfWeek === "Friday") {
                price = Number(groupOfPeople) * 10.90;
            } else if (dayOfWeek === "Saturday") {
                price = Number(groupOfPeople) * 15.60;
            } else if (dayOfWeek === "Sunday") {
                price = Number(groupOfPeople) * 16;
            }
            break;

        case "Regular":
            if (dayOfWeek === "Friday") {
                price = Number(groupOfPeople) * 15;
            } else if (dayOfWeek === "Saturday") {
                price = Number(groupOfPeople) * 20;
            } else if (dayOfWeek === "Sunday") {
                price = Number(groupOfPeople) * 22.50;
            }

            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price *= 0.95; 
            }

            break;

        default:
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}

// vacation(30, "Students", "Sunday");

vacation(40,"Regular","Saturday");