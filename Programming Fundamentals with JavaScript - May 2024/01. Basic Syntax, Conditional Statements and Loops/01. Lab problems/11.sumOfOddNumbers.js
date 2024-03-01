function sumOfOddNumbers(numberOfOddNumbers) {

    let totalSum = 0;
    let previousPrintedNumber = 0;

    for(let i = 1; i <= numberOfOddNumbers; i++){
        if(i === 1) {
            console.log(i);
            previousPrintedNumber = i;
            totalSum += i; 
        } else {
            console.log(previousPrintedNumber+2);
            previousPrintedNumber += 2;
            totalSum += previousPrintedNumber;
        }
    }

    console.log(`Sum: ${totalSum}`);


}

sumOfOddNumbers(5);