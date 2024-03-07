function equalSums(arr) {

    const nElements = arr.length;

    if (nElements == 1) {

        console.log(0);
        return;

    } else {

        for (let i = 0; i < nElements; i++) {

            let rightSum = 0;
            let leftSum = 0;

            for (let j = i + 1; j < nElements; j++) {
                if (typeof (j) == "undefined") {
                    rightSum += 0;
                } else (
                    rightSum += Number(arr[j])
                )
            }

            for (let k = i - 1; k >= 0; k--) {
                if (typeof (k) == "undefined") {
                    leftSum += 0;
                } else {
                    leftSum += Number(arr[k])
                }
            }

            if (leftSum == rightSum) {
                console.log(i);
                return;
            }
        }

        console.log("no");

    }

}


equalSums([1, 2, 3, 3]);

equalSums([1, 2]);

equalSums([1]);

equalSums([1, 2, 3]);

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);