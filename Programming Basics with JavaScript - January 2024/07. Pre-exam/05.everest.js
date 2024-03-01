function everest(input) {

    let goalReached = false;
    let numberOfDays = 1;
    let reachedHeight = 5364;
    let inputElement = "";

    for (i = 0; i <= input.length; i++) {
        inputElement = input[i];

        if (reachedHeight >= 8848) {
            console.log(`Goal reached for ${numberOfDays} days!`);
            return;
        } else if (numberOfDays > 5) {
            console.log(`Failed!`);
            console.log(`${reachedHeight}`);
            return;
        } else if (inputElement === "Yes") {
            numberOfDays++;
        } else if (inputElement === "No") {

        } else if (inputElement === "END") {
            if (goalReached === true) {
                console.log(`Goal reached for ${numberOfDays} days!`);
            } else {
                console.log(`Failed!`);
                console.log(`${reachedHeight}`);
            }
            return;
        } else {
            reachedHeight += Number(inputElement);
        }
    }

}


everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);

everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);

everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);

everest(["Yes", "700", "END"]);
