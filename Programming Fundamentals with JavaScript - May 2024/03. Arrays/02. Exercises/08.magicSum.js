function magicSum(arr, targetSum) {

    for (let j = 0; j < arr.length; j++) {
        let currentArrElement = arr[j];

        for (let i = j + 1; i < arr.length; i++) {

            if (currentArrElement + arr[i] === targetSum) {
                let printArr = [currentArrElement, arr[i]];
                console.log(printArr.join(" "));
            }
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23], 8);

magicSum([14, 20, 60, 13, 7, 19, 8], 27);

magicSum([1, 2, 3, 4, 5, 6], 6);