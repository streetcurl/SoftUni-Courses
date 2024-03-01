function streamOfSymbols(input) {
    let word = String(input[0]);
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        console.log(letter);
    }
}

streamOfSymbols(["softuni"]);