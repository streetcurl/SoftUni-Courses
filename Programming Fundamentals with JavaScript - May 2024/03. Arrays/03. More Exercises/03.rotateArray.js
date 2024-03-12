function rotateArray(arr) {

    let numberOfRotations = Number(arr[arr.length - 1]);

    let resultingArray = arr.slice(0, arr.length - 1);

    while (numberOfRotations > 0) {

        let newNum = resultingArray[resultingArray.length - 1];

        resultingArray.unshift(newNum);
        resultingArray = resultingArray.slice(0, arr.length - 1);
        numberOfRotations--;

    }

    console.log(resultingArray.join(" "));

}

rotateArray(['1', '2', '3', '4', '2']);

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);