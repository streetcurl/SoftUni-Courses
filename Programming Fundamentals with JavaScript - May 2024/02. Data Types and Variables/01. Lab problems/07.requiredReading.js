function requiredReading(bookPages, pagesPerHour, days) {

    const numberOfHoursNeeded = (bookPages / pagesPerHour);
    const reqHoursPerDay = (numberOfHoursNeeded / days);

    console.log(reqHoursPerDay);
}


requiredReading(212, 20, 2);
requiredReading(432, 15, 4);