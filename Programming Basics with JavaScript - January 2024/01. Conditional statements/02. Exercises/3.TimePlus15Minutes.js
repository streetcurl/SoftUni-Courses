function timePlus15Minutes(input) {
    let minutesTillNow = Number(input[0]) * 60 + Number(input[1]);
    let timeAfter15minutes = (minutesTillNow + 15);
    if (timeAfter15minutes >= (24 * 60)) {
        let newHour = Math.floor(timeAfter15minutes / 60) - 24;
        let newMinutes = timeAfter15minutes % 60;
        if (newMinutes < 10) {
            console.log(`${newHour}:0${newMinutes}`);
        } else {
            console.log(`${newHour}:${newMinutes}`);
        }
    } else {
        let newHour = Math.floor(timeAfter15minutes / 60);
        let newMinutes = timeAfter15minutes % 60;
        if (newMinutes < 10) {
            console.log(`${newHour}:0${newMinutes}`);
        } else {
            console.log(`${newHour}:${newMinutes}`);
        }
    }
}

timePlus15Minutes(["23", "59"]);