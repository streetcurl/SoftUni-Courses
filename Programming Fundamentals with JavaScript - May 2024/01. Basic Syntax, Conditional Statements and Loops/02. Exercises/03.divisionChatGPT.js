function division(number) {

    let divisors = [10, 7, 6, 3, 2];
    let divisibleBy = "Not divisible";

    for (const divisor of divisors) {
        if (number % divisor === 0) {
            divisibleBy = divisor;
            break; 
        }
    }

    console.log(divisibleBy === "Not divisible" ? divisibleBy : `The number is divisible by ${divisibleBy}`); 
    
    //console.log(condition ? expressionIfTrue : expressionIfFalse);
}

division(30);