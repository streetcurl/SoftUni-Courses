function cinema(input) {
    let typeProjection = String(input[0]);
    let numberOfRows = Number(input[1]);
    let numberOfColumns = Number(input[2]);
    let ticketSum = 0;

    switch (typeProjection) {
        case "Premiere":
            ticketSum = (numberOfColumns * numberOfRows * 12).toFixed(2);
            break;
        case "Normal":
            ticketSum = (numberOfColumns * numberOfRows * 7.50).toFixed(2);
            break;
        case "Discount":
            ticketSum = (numberOfColumns * numberOfRows * 5).toFixed(2);
            break;
    }

    console.log(ticketSum + " leva");

}

cinema(["Normal", "21", "13"]);