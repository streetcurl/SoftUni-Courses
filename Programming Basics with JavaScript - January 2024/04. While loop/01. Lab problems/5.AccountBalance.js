function accountBalance(input) {
    let index = 0;
    let total = 0;

    debugger
    while (input[index] !== "NoMoreMoney") {
        if (input[index] == "NoMoreMoney") {
            break;
        } else if (input[index] < 0) {
            console.log(`Invalid operation!`);
            index++;
            break;
        } else {
            let increaseNumber = Number(input[index]).toFixed(2);
            console.log(`Increase: ${increaseNumber}`);
            total += Number(input[index]);
            index++;
        }
    }

    console.log(`Total: ${total.toFixed(2)}`);

}


accountBalance(["120", "45.55", "-150"]);
;
