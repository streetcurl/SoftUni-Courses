function workTime(input) {
    let hour = Number(input[0]);
    let day = String(input[1]);

    if (day == "Sunday") {
        console.log("closed")
    } else {
        if (hour >= 10 && hour <= 18) {
            console.log("open")
        } else {
            console.log("closed")
        }
    }
}

workTime(["11", "Sunday"]);