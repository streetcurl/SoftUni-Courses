function reverseInPlace(inputArr) {

    for (let i = 0; i < inputArr.length / 2; i++) {

        let oldEl = inputArr[i];
        let prevIndex = inputArr.length - 1 - i
        inputArr[i] = inputArr[prevIndex];
        inputArr[prevIndex] = oldEl;

    }

    console.log(inputArr.join(' '));

}


reverseInPlace(['a', 'b', 'c', 'd', 'e']);

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);

reverseInPlace(['33', '123', '0', 'dd']);