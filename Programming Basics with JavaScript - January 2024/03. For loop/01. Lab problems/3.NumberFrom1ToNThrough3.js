function numberFrom1ToNThrough3(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numberFrom1ToNThrough3(["10"]);