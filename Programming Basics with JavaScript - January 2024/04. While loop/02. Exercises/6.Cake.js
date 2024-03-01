function cake(input) {
    let sizeOfCake = Number(input[0]) * Number(input[1]);
    let numberOfPiecesNeeded = 0;

    debugger
    for (let index = 2; index < input.length && input[index] !== "STOP"; index++) {
        let pieces = Number(input[index]);
        if (!isNaN(pieces)) {
            numberOfPiecesNeeded += pieces;
        }
    }

    let cakeNumberDiff = Math.abs(sizeOfCake - numberOfPiecesNeeded)

    if (numberOfPiecesNeeded > sizeOfCake) {
        console.log(`No more cake left! You need ${cakeNumberDiff} pieces more.`);
    } else {
        console.log(`${cakeNumberDiff} pieces are left.`);
    }

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
    ;