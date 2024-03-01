function mountainRun(input) {
    
    const recordSeconds = Number(input[0]);
    const trackMeters = Number(input[1]);
    const speedAssendPerMeter = Number(input[2]);
    let georgiTime = 0;
    
    let additionalTimeInSeconds = (Math.floor(trackMeters / 50)) * 30;

  
    georgiTime = (trackMeters * speedAssendPerMeter) + additionalTimeInSeconds;

    if (georgiTime < recordSeconds) {
        
        console.log(` Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
    
    } else {

        let timeNeeded = georgiTime - recordSeconds;

        console.log(`No! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    
    }
}

mountainRun(["10164","1400","25"]);
