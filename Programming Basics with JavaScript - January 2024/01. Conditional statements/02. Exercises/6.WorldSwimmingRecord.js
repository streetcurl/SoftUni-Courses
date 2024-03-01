function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let lengthInMeters = Number(input[1]);
    let velocity = Number(input[2]);
    let ivanTimeInSeconds = ((lengthInMeters * velocity) + (Math.floor(lengthInMeters / 15) * 12.5)).toFixed(2);
    if (ivanTimeInSeconds < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTimeInSeconds} seconds.`);
    } else {
        let newWorldRecordDiff = (-((recordInSeconds - ivanTimeInSeconds))).toFixed(2);
        console.log(`No, he failed! He was ${newWorldRecordDiff} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);