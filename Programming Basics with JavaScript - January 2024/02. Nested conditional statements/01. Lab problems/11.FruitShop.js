function fruitShop(input) {
    let fruit = String(input[0]);
    let day = String(input[1]);
    let pcs = Number(input[2]);
    let price = 0;
    debugger
    if ((day == "Saturday") || (day == "Sunday")) {
        switch (fruit) {
            case "banana":
                price = (pcs * 2.7).toFixed(2);
                console.log(price);
                break;
            case "apple":
                price = (pcs * 1.25).toFixed(2);
                console.log(price);
                break;
            case "orange":
                price = (pcs * 0.90).toFixed(2);
                console.log(price);
                break;
            case "grapefruit":
                price = (pcs * 1.60).toFixed(2);
                console.log(price);
                break;
            case "kiwi":
                price = (pcs * 3.00).toFixed(2);
                console.log(price);
                break;
            case "pineapple":
                price = (pcs * 5.60).toFixed(2);
                console.log(price);
                break;
            case "grapes":
                price = (pcs * 4.20).toFixed(2);
                console.log(price);
                break;
            default:
                price = "error";
                console.log(price);
                break;
        }
    } else if ((day == "Monday") || (day == "Tuesday") || (day == "Wednesday") || (day == "Thursday") || (day == "Friday")) {
        switch (fruit) {
            case "banana":
                price = (pcs * 2.50).toFixed(2);
                console.log(price);
                break;
            case "apple":
                price = (pcs * 1.20).toFixed(2);
                console.log(price);
                break;
            case "orange":
                price = (pcs * 0.85).toFixed(2);
                console.log(price);
                break;
            case "grapefruit":
                price = (pcs * 1.45).toFixed(2);
                console.log(price);
                break;
            case "kiwi":
                price = (pcs * 2.7).toFixed(2);
                console.log(price);
                break;
            case "pineapple":
                price = (pcs * 5.50).toFixed(2);
                console.log(price);
                break;
            case "grapes":
                price = (pcs * 3.85).toFixed(2);
                console.log(price);
                break;
            default:
                price = "error";
                console.log(price);
                break;
        }
    } else {
        console.log("error");
    }
}

fruitShop(["banana", "Monday", "5"])