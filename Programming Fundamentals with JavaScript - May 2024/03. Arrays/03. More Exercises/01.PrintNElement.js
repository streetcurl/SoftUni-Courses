function printNElement(arr) {

    let step = Number(arr[arr.length - 1]);
    let printElements = [];

    for (i = 0; i < arr.length - 1; i += step) {

        printElements.push(arr[i]);

    }

    console.log(`${printElements.join(" ")}`);

}


printNElement(['5', '20', '31', '4', '20', '2']);

printNElement(['dsa', 'asd', 'test', 'test', '2']);

printNElement(['1', '2', '3', '4', '5', '6']);