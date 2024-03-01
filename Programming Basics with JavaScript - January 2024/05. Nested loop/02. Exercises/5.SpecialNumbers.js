function specialNumbers(input) {
    const inputNumber = Number(input[0]);
    let specialNumber = 0;
    let specialNumbers = "";

    debugger
    for (let i = 1111; i <= 9999; i++) {
        let activeNumber = String(i);

        for (let j = 0; j <= 3; j++) {
            let activeNumberIndex = Number(activeNumber[j]);

            if (inputNumber % activeNumberIndex === 0) {
                specialNumber++;
            }

        }

        if (specialNumber == 4) {
            specialNumbers += String(activeNumber) + " ";
            specialNumber = 0;
        } else {
            specialNumber = 0;
        }
    }

    console.log(specialNumbers);

}


specialNumbers(["11"]);