function maxSequenceOfEqualElements(arr) {

    let currArrElement = arr[0];
    let currArrLength = 1;
    let longestElement = arr[0];
    let longestLength = 1;

    for (let i = 1; i < arr.length; i++) {

        if (currArrElement === arr[i]) {
            currArrLength++;
        } else {
            currArrElement = arr[i];
            currArrLength = 1;
        }

        if (currArrLength > longestLength) {
            longestElement = currArrElement;
            longestLength = currArrLength;
        }
    }

    const longestSequence = Array.from({ length: longestLength }, () => longestElement);

    console.log(longestSequence.join(" "));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);

maxSequenceOfEqualElements([4, 4, 4, 4]);

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);