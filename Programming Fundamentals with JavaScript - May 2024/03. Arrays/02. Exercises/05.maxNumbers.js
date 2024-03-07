function maxNumbers(arr) {

    let printArr = [];
    let printArrIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (j == arr.length) {
                printArr[printArrIndex] = arr[i];
                printArrIndex++;
            } else if (arr[i] > arr[j]) {

            } else {
                break;
            }


        }
    }

    console.log(printArr.join(" "));
}

maxNumbers([1, 4, 3, 2]);
maxNumbers([14, 24, 3, 19, 15, 17]);
maxNumbers([41, 41, 34, 20]);
maxNumbers([27, 19, 42, 2, 13, 45, 48]);