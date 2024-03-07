function sumEvenNumbers(input) {

    //Parse each number from string to number

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    //Calculating the sum of even numbers
    let sum = 0;

    for (let num of input) {
        if (num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);

}


sumEvenNumbers(['1', '2', '3', '4', '5', '6']);

sumEvenNumbers(['3', '5', '7', '9']);

sumEvenNumbers(['2', '4', '6', '8', '10']);