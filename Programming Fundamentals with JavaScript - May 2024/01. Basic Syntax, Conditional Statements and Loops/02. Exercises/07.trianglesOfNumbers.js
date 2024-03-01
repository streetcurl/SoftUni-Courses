function triangleOfNumbers(number) {

    let printRow = "";

    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++) {
            printRow += i + " ";
        }

        console.log(printRow);
        printRow = "";
    }
    
}

triangleOfNumbers(3);