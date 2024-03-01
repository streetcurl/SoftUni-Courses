function equalSumsOfEvenAndOddPositions(input) {

    const lowestNumber = Number(input[0]);
    const highestNumber = Number(input[1]);

    let printLine = "";

    for (let i = lowestNumber; i <= highestNumber; i++) {

        let generatedNumber = "" + i;  //Concenate with a string and it becomes a String;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j <= generatedNumber.length; j++) {

            let currenDigit = Number(generatedNumber.charAt(j));  //reading the charAt the index of generatedNumber;
            if (j % 2 === 0) {
                evenSum += currenDigit;
            } else {
                oddSum += currenDigit;
            }

        }

        if (evenSum === oddSum) {
            printLine += `${i} `;
        }

    }

    console.log(printLine);

}

equalSumsOfEvenAndOddPositions(["123456",
    "124000"]);

