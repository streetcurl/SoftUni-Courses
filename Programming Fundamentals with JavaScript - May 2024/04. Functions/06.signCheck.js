function signCheck(numOne, numTwo, numThree) {

    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;

    console.log(negativeCount % 2 === 0 ? "Positive" : "Negative");

}

signCheck(5, 12, -15);

signCheck(-6, -12, 14);

signCheck(-1, -2, -3);

signCheck(-5, 1, 1);


// function signCheck(numOne, numTwo, numThree) {

//     let countNegative = 0;
//     let countPositive = 0;

//     numOne >= 0 ? countPositive++ : countNegative++;
//     numTwo >= 0 ? countPositive++ : countNegative++;
//     numThree >= 0 ? countPositive++ : countNegative++;

//     if (countNegative === 0) {
//         console.log("Positive");
//     } else if (countNegative === 1) {
//         console.log("Negative");
//     } else if (countNegative === 2) {
//         console.log("Positive");
//     } else if (countNegative === 3) {
//         console.log("Negative");
//     }

// }

// signCheck(5, 12, -15);

// signCheck(-6, -12, 14);

// signCheck(-1, -2, -3);

// signCheck(-5, 1, 1);