function tradeCommissions(input) {
    let town = String(input[0]);
    let sales = Number(input[1]);
    let commission = 0;
    debugger
    switch (town) {
        case "Sofia":
            if ((sales >= 0) && (sales <= 500)) {
                commission = (.05 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 500) && (sales <= 1000)) {
                commission = (.07 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 1000) && (sales <= 10000)) {
                commission = (.08 * sales).toFixed(2);
                console.log(commission);
            } else if (sales > 10000) {
                commission = (.12 * sales).toFixed(2);
                console.log(commission);
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        case "Varna":
            if ((sales >= 0) && (sales <= 500)) {
                commission = (.045 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 500) && (sales <= 1000)) {
                commission = (.075 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 1000) && (sales <= 10000)) {
                commission = (.1 * sales).toFixed(2);
                console.log(commission);
            } else if (sales > 10000) {
                commission = (.13 * sales).toFixed(2);
                console.log(commission);
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if ((sales >= 0) && (sales <= 500)) {
                commission = (.055 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 500) && (sales <= 1000)) {
                commission = (.08 * sales).toFixed(2);
                console.log(commission);
            } else if ((sales > 1000) && (sales <= 10000)) {
                commission = (.12 * sales).toFixed(2);
                console.log(commission);
            } else if (sales > 10000) {
                commission = (.145 * sales).toFixed(2);
                console.log(commission);
            } else if (sales < 0) {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}

tradeCommissions(["Plovdiv", "499.99"]);