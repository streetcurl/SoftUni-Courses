function charsInRange(charOne, charTwo) {

    //Check min and max ASCII code numbers
    const startCharCode = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    const endCharCode = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

    //Print in range chars

    let printArr = [];

    for (let i = startCharCode + 1; i < endCharCode; i++) {
        printArr.push(String.fromCharCode(i));
    }

    console.log(printArr.join(" "));

}

charsInRange('a', 'd');

charsInRange('#', ':');

charsInRange('C', '#');