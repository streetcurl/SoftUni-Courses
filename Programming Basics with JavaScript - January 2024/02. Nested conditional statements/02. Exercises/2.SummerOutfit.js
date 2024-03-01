function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = String(input[1]);
    let shoes = 0;
    let clothes = 0;
    debugger
    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfDay) {
            case "Morning":
                clothes = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfDay) {
            case "Morning":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                clothes = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else {
        switch (timeOfDay) {
            case "Morning":
                clothes = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                clothes = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);
}

summerOutfit(["28", "Evening"]);