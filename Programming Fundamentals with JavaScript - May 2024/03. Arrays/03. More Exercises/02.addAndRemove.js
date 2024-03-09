function addAndRemove(arr) {

    let lastNumber = 0;

    let printArr = [];

    for (const command of arr) {
        lastNumber++;

        if (command === "remove") {
            if (printArr.length > 0) {
                printArr.pop();
            }
        } else if (command === "add") {
            printArr.push(lastNumber);
        }
    }
    if (printArr.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(printArr.join(" "));
    }
}


addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);