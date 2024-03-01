function building(input) {
    let numberOfLevels = Number(input[0]);
    let numberOfSpacesOnLevel = Number(input[1]);

    for (let floor = numberOfLevels; floor > 0; floor--) {
        let printLine = "";
        for (let room = 0; room < numberOfSpacesOnLevel; room++) {
            if (floor % 2 === 0 && floor !== numberOfLevels) {
                printLine += `O${floor}${room} `;
            } else if (floor === numberOfLevels) {
                printLine += `L${floor}${room} `;
            } else {
                printLine += `A${floor}${room} `;
            }
        }
        console.log(printLine);
    }
}



building(["9", "5"]);

