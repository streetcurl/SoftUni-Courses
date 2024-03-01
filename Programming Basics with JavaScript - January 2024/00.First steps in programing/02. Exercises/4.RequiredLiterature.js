function requiredLiterature(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalTimeForReading = numberOfPages / pagesPerHour;
    let neededHoursPerDay = totalTimeForReading / numberOfDays;
    console.log(neededHoursPerDay);
}

requiredLiterature(["432", "15", "4"]);