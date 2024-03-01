function trekingMania(input) {
    const groupClimbers = Number(input[0]);
    let numberOfClimbers = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    debugger
    for (let i = 1; i <= groupClimbers; i++) {
        numberOfClimbers += Number(input[i]);
        if (input[i] <= 5) {
            musala += Number(input[i]);
        } else if (input[i] > 5 && input[i] <= 12) {
            monblan += Number(input[i]);
        } else if (input[i] > 12 && input[i] <= 25) {
            kilimandjaro += Number(input[i]);
        } else if (input[i] > 25 && input[i] <= 40) {
            k2 += Number(input[i]);
        } else if (input[i] > 40) {
            everest += Number(input[i]);
        }
    }

    musala = (musala / numberOfClimbers * 100).toFixed(2);
    monblan = (monblan / numberOfClimbers * 100).toFixed(2);
    kilimandjaro = (kilimandjaro / numberOfClimbers * 100).toFixed(2);
    k2 = (k2 / numberOfClimbers * 100).toFixed(2);
    everest = (everest / numberOfClimbers * 100).toFixed(2);


    console.log(`${musala}%`);
    console.log(`${monblan}%`);
    console.log(`${kilimandjaro}%`);
    console.log(`${k2}%`);
    console.log(`${everest}%`);

}

trekingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])