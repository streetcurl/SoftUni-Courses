function ladybugs(inputArray) {

    const fieldSize = Number(inputArray[0]);

    //InitialArray with size the FiledSize

    let initialField = [];

    for (let i = 0; i < fieldSize; i++) {
        initialField[i] = 0;
    }

    //Initial indexes of ladybugs

    const initialIndexString = inputArray[1];
    const initialPositions = initialIndexString.split(" ");

    //Ladybugs on currentArray

    let currentArray = initialField;

    for (let i = 0; i < initialPositions.length; i++) {
        currentArray[initialPositions[i]] = 1;
    }

    //Ladybugs move instructions
    let moveInstructionString;
    let moveInstructionArray;

    //Ladybugs move instructions from String to Array
    for (let i = 2; i < inputArray.length; i++) {
        moveInstructionString = inputArray[i];
        moveInstructionArray = moveInstructionString.split(" ");
        let ladybugToMove = Number(moveInstructionArray[0]);
        let flyPath = moveInstructionArray[1];
        let flyLength = Number(moveInstructionArray[2]);

        if (currentArray[ladybugToMove] === 1) {
            if (flyPath === "right") {

                currentArray[ladybugToMove] = 0;

                let newPosition = ladybugToMove + flyLength;

                while (currentArray[newPosition] === 1) {
                    flyLength++;
                    newPosition = ladybugToMove + flyLength;
                }

                if (newPosition < fieldSize) {
                    currentArray[newPosition] = 1;
                } else {

                }

            } else {
                currentArray[ladybugToMove] = 0;

                let newPosition = ladybugToMove - flyLength;

                while (currentArray[newPosition] === 1) {
                    flyLength++;
                    newPosition = ladybugToMove - flyLength;
                }

                if (newPosition >= 0) {
                    currentArray[newPosition] = 1;
                } else {

                }

            }
        }

    }

    console.log(currentArray.join(" "));

}


ladybugs([3, '0 1', '0 right 1', '2 right 1']);

ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

ladybugs([5, '3', '3 left 2', '1 left -2']);