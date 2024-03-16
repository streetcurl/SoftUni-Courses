function repeatString(string, numberOfRepeats) {

    let result = "";

    for (let i = 0; i < numberOfRepeats; i++) {
        result += string;
    }

    return result;
}

repeatString("abc", 3);

repeatString("String", 2)