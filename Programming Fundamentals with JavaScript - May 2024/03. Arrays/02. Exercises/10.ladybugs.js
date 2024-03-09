function ladybugs(inputArray) {

    const fieldSize = Number(inputArray[0]); // Reading field size

    const ladybugIndxs = inputArray[1].split(" ").map(Number); //Initial indexes of ladybugs

    let initialField = Array.from({ length: fieldSize }, () => 0); //InitialArray with size the fieldSize

    let currentArray = [];

    //Fill ladybugs on currentArray
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIndxs.includes(i)) {
            currentArray[i] = 1;
        } else {
            currentArray[i] = 0;
        }
    }

    //Ladybugs move instructions from String to Array
    for (let i = 2; i < inputArray.length; i++) {
        let tokens = inputArray[i].split(" ");

        let ladybugIndx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);


        // Is there a ladybug here ? If yes let it fly
        if (!currentArray[ladybugIndx]) {
            continue;
        }

        currentArray[ladybugIndx] = 0;

        if (flyLength < 0) {
            flyLength *= -1; // Make it positive
            direction = (direction === "right") ? "left" : "right"; // Change direction
        }

        // is there a ladybug here ? Can I land ? If not I continue to fly with the same length. 
        let newIndx = (direction === "right") ? ladybugIndx + flyLength : ladybugIndx - flyLength;

        while (currentArray[newIndx] === 1) {
            newIndx = (direction === "right") ? ladybugIndx + flyLength : ladybugIndx - flyLength;
            flyLength += flyLength;
        }

        if (newIndx >= 0 && newIndx < fieldSize) {
            currentArray[newIndx] = 1;
        }
    }
    console.log(currentArray.join(" "));
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);

ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);

ladybugs([5, '3', '3 left 2', '1 left -2']);

ladybugs([10, '0 5', '0 right 5', '5 left 1', '4 left 2']);

ladybugs([0, '0', '0 right 5']);

ladybugs([10, '0 5  7 ', '0 right 5']);

ladybugs([5, '1 0 2 3 4', "0 right 2", "2 left 1", "1 right -3", "4 left 5"]);

ladybugs([10, '3 7 5', "2 left 4", "1 right 3", "0 right 2", "8 left 6"]);

ladybugs([8, '0 4 7', "3 left -5", "6 right 4", "2 left 3", "5 right -2"]);

ladybugs([3, '2 1', "0 left 1", "2 right -1", "1 left -2"]);

ladybugs([6, '4 2 0', "3 left -4", "1 right 2", "5 right 3", "0 left 1"]);
