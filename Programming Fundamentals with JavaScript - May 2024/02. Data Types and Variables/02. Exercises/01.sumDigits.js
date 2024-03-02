function sumDigits(numInput) {

    let numberAsString = numInput.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        sum += Number(numberAsString[i]);

    }

    console.log(`${sum}`);

}

sumDigits(245678);

sumDigits(97561);

sumDigits(543);