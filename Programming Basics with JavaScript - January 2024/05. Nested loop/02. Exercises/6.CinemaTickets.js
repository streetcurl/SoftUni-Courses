function cinemaTickets(input) {
    let filmArray = input;
    let numberOfTicketsForSelling = 0;
    let allSoldTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0; 6
    let kidTickets = 0;
    let soldTickets = 0;
    let movieName = "";

    for (let i = 0; i < filmArray.length; i++) {

        let inputValue = filmArray[i];

        if (soldTickets >= numberOfTicketsForSelling && soldTickets !== 0) {
            console.log(`${movieName} - ${((soldTickets / numberOfTicketsForSelling) * 100).toFixed(2)}% full.`);
            allSoldTickets += soldTickets;
            soldTickets = 0;
            i--;
        }

        else if (isNaN(inputValue)) {

            if (inputValue === "student") {
                studentTickets++;
                soldTickets++;
            }

            else if (inputValue === "standard") {
                standardTickets++;
                soldTickets++;
            }

            else if (inputValue === "kid") {
                kidTickets++;
                soldTickets++;
            }

            else if (inputValue === "Finish") {
                break;
            }

            else if (inputValue === "End") {
                console.log(`${movieName} - ${((soldTickets / numberOfTicketsForSelling) * 100).toFixed(2)}% full.`);
                allSoldTickets += soldTickets;
                soldTickets = 0;
            }

            else {
                movieName = String(inputValue);
            }

        }

        else {
            numberOfTicketsForSelling = Number(inputValue);
        }

    }

    console.log(`Total tickets: ${allSoldTickets}`);
    console.log(`${((studentTickets / allSoldTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / allSoldTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / allSoldTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish",
]);