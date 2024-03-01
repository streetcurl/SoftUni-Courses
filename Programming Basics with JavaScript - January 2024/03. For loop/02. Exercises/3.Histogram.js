function histogram(input) {
    const numberOfNumbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;

    for (let i = 1; i <= numberOfNumbers; i++) {
        if (input[i] < 200) {
            countP1++;
        } else if (input[i] >= 200 && input[i] < 400) {
            countP2++;
        } else if (input[i] >= 400 && input[i] < 600) {
            countP3++;
        } else if (input[i] >= 600 && input[i] < 800) {
            countP4++;
        } else {
            countP5++;
        }
    }

    p1 = (countP1 / numberOfNumbers * 100).toFixed(2)
    p2 = (countP2 / numberOfNumbers * 100).toFixed(2)
    p3 = (countP3 / numberOfNumbers * 100).toFixed(2)
    p4 = (countP4 / numberOfNumbers * 100).toFixed(2)
    p5 = (countP5 / numberOfNumbers * 100).toFixed(2)

    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);

}

histogram(["3", "1", "2", "999"])