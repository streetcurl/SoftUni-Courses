function suitcasesLoad(input) {

    const loadCapacity = Number(input[0]);
    let bagCount = 0;
    let volumeOfUsedBags = 0;

    while (input[bagCount + 1] !== "End") {

        let volumeOfSelectedBag = Number(input[++bagCount]);

        if (bagCount % 3 === 0) {
            volumeOfSelectedBag *= 1.1;
        }

        volumeOfUsedBags += volumeOfSelectedBag;

        if (volumeOfUsedBags > loadCapacity) {
            console.log(`No more space!`);
            bagCount--;
            break;
        } else if (volumeOfUsedBags === loadCapacity) {
            break;
        }
    }

    if (loadCapacity >= volumeOfUsedBags) {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${bagCount} suitcases loaded.`);

}


// suitcasesLoad(["550", "100", "252", "72", "End"]);

// suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);

// suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);

suitcasesLoad(["700.5", "180", "340.6", "126", "41.3"]);
