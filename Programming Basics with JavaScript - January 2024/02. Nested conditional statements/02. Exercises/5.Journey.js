function journey(input) {
    let budget = Number(input[0]);
    let season = String(input[1]);
    let destination = 0;
    let hotelType = 0;
    let night = 0;
    debugger
    if (budget <= 100) {
        destination = "Bulgaria"
        switch (season) {
            case "summer":
                night = (budget * .3).toFixed(2);
                hotelType = "Camp";
                break;
            case "winter":
                night = (budget * .7).toFixed(2);
                hotelType = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer":
                night = (budget * .4).toFixed(2);
                hotelType = "Camp";
                break;
            case "winter":
                night = (budget * .8).toFixed(2);
                hotelType = "Hotel";
        }
    } else {
        destination = "Europe";
        night = (budget * .9).toFixed(2);
        hotelType = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${hotelType} - ${night}`);

}

journey(["1500", "summer"]);