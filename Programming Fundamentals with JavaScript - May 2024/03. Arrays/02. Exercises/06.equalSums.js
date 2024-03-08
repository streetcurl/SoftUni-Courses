function equalSums(arr) {

    const nElements = arr.length;

    if (nElements === 1) {

        console.log(0);
        return;

    }

    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nElements; i++) {
        const rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            console.log(i);
            return;
        }

        leftSum += arr[i]

    }


    console.log("no");

}

equalSums([1, 2, 3, 3]);

equalSums([1, 2]);

equalSums([1]);

equalSums([1, 2, 3]);

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);