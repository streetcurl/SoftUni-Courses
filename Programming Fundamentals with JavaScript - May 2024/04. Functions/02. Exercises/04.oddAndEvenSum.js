function oddAndEvenSum(number) {

    const numberArr = String(number).split("");

    const evenNumbers = numberArr.filter((number) => number % 2 === 0);

    const oddNumbers = numberArr.filter((number) => number % 2 !== 0);

    const sumEven = evenNumbers.reduce((acc, currentVal) => acc + parseInt(currentVal), 0);

    const sumOdd = oddNumbers.reduce((acc, currentVal) => acc + parseInt(currentVal), 0);

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

oddAndEvenSum(1000435);

oddAndEvenSum(3495892137259234);
