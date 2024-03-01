function readingWords(input) {
    let index = 0;
    while (true) {
        let str = input[index];
        index++;
        if (str === "Stop") {
            break;
        }
        console.log(str)
    }

}

readingWords(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"]
);
