function moving(input) {
    const widthFreeSpace = Number(input[0]);
    const lengthFreeSpace = Number(input[1]);
    const heightFreeSpace = Number(input[2]);
    let freeSpace = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
    debugger

    for (let index = 3; index < input.length && input[index] !== "Done"; index++) {
        freeSpace -= Number(input[index]);
    }


    if (freeSpace > 0) {
        console.log(`${Math.abs(freeSpace)} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
    ;