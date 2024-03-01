function printAndSum(startNum, endNum) {
    
    let numbers = "";
    let sum = 0;

    for(let i = startNum; i <= endNum; i++) {
        numbers += i + " ";
        sum += i;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(50,60)