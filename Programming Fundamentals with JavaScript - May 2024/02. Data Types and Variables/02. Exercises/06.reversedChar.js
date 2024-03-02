function reversedChar(char1, char2, char3) {

    const inputString = String(char1 + " " + char2 + " " + char3);

    reversedString = inputString.split('').reverse().join('');

    console.log(`${reversedString}`);
}

reversedChar("A", "B", "C");

reversedChar("1", "L", "&")
