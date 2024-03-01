function sumOfGlasniWords(input) {
    let word = String(input[0]);
    let sum = 0;

    for (i = 0; i < word.length; i++) {
        let letter = word[i];
        switch (letter) {
            case "a":
                sum = sum + 1;
                break;
            case "e":
                sum = sum + 2;
                break;
            case "i":
                sum = sum + 3;
                break;
            case "o":
                sum = sum + 4;
                break;
            case "u":
                sum = sum + 5;
                break;
        }
    }

    console.log(sum);
}

sumOfGlasniWords(["bamboo"]);