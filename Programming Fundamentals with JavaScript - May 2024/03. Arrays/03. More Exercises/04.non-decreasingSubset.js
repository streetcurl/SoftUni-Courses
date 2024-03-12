function nonDecreasingSubset(arr) {

    let lastBiggestNumber = Number.MIN_SAFE_INTEGER;

    // let printArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     let currNumber = arr[i];

    //     if (currNumber >= lastBiggestNumber) {
    //         lastBiggestNumber = arr[i];
    //         printArr.push(arr[i]);
    //     }
    // }


    const printArr = arr.filter(currNumber => {
        if (currNumber >= lastBiggestNumber) {
            lastBiggestNumber = currNumber;
            return true;
        }
        return false;
    });

    console.log(printArr.join(" "));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);

nonDecreasingSubset([1, 2, 3, 4]);

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);