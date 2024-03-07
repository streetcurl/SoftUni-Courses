function arrayRotation(arr, numOfRotations) {

    while (numOfRotations > 0) {

        let newNum = arr[0];
        arr[arr.length] = newNum;
        arr = arr.slice(1);
        numOfRotations--;
    }

    console.log(arr.join(" "));

}


arrayRotation([51, 47, 32, 61, 21], 2);

arrayRotation([32, 21, 61, 1], 4);

arrayRotation([2, 4, 15, 31], 5);