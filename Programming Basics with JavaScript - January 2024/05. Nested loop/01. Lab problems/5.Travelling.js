function travelling(input) {

    let destination = "";
    let minimalBudget = 0;
    let savedMoney = 0;

    for (let i = 0; i < input.length; i++) {

        const currentInput = input[i];

        if (isNaN(currentInput)) {
            if (currentInput === "End") {
                return;
            } else {
                destination = currentInput;
                minimalBudget = Number(input[++i]);
                savedMoney = 0;
            }
        } else {
            savedMoney += Number(currentInput);
            if (savedMoney >= minimalBudget) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}


//function travelling(input) {
//    input.forEach(item => {
//        if (isNaN(Number(item) && item !== 'End') {
//            console.log(`Going to ${item}!`);
//        }
//    });
//}


travelling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);