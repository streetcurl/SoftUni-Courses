function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);
    let examTime = hourExam * 60 + minuteExam;
    let arrivalTime = hourArrival * 60 + minuteArrival;
    let status = 0;
    let timeDiff = 0;
    let timeDiffHours = 0;
    let timeDiffMinutes = 0;

    debugger
    if ((arrivalTime >= (examTime - 30)) && (arrivalTime <= examTime)) {
        status = "On time";
        timeDiff = examTime - arrivalTime;
        if (timeDiff == 0) {
            console.log(`${status}`);
        } else {
            console.log(`${status}`);
            console.log(`${timeDiff} minutes before the start`);
        }
    } else if (arrivalTime > examTime) {
        status = "Late";
        timeDiff = arrivalTime - examTime;
        if (timeDiff > 60) {
            timeDiffHours = Math.floor((arrivalTime - examTime) / 60);
            timeDiffMinutes = ((arrivalTime - examTime) % 60).toFixed(0);
            if (timeDiffMinutes < 10) {
                console.log(`${status}`);
                console.log(`${timeDiffHours}:0${timeDiffMinutes} hours after the start`);
            } else {
                console.log(`${status}`);
                console.log(`${timeDiffHours}:${timeDiffMinutes} hours after the start`);
            }
        } else if (timeDiff == 60) {
            timeDiffHours = Math.floor((arrivalTime - examTime) / 60);
            console.log(`${status}`);
            console.log(`${timeDiffHours}:00 hours after the start`);
        } else {
            timeDiffMinutes = ((arrivalTime - examTime) % 60).toFixed(0);
            console.log(`${status}`);
            console.log(`${timeDiffMinutes} minutes after the start`);
        }
    } else if (arrivalTime < (examTime - 30)) {
        status = "Early";
        timeDiff = examTime - arrivalTime;
        if (timeDiff > 60) {
            timeDiffHours = Math.floor((examTime - arrivalTime) / 60);
            timeDiffMinutes = ((examTime - arrivalTime) % 60).toFixed(0);
            if (timeDiffMinutes < 10) {
                console.log(`${status}`);
                console.log(`${timeDiffHours}:0${timeDiffMinutes} hours before the start`);
            } else {
                console.log(`${status}`);
                console.log(`${timeDiffHours}:${timeDiffMinutes} hours before the start`);
            }
        } else if (timeDiff == 60) {
            timeDiffHours = Math.floor((examTime - arrivalTime) / 60);
            console.log(`${status}`);
            console.log(`${timeDiffHours}:00 hours before the start`);
        } else {
            timeDiffMinutes = ((examTime - arrivalTime) % 60).toFixed(0);
            console.log(`${status}`);
            console.log(`${timeDiffMinutes} minutes before the start`);
        }

    }
}

onTimeForExam(["2", "23", "1", "22 "]);