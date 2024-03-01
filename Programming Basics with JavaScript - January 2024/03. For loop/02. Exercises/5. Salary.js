function salary(input) {
    const numberOfOpenTabs = Number(input[0]);
    let salary = Number(input[1]);
    let siteOpened = 0;

    for (let i = 2; i <= numberOfOpenTabs + 2; i++) {
        siteOpened = String(input[i])
        if (siteOpened == "Facebook") {
            salary -= 150;
        } else if (siteOpened == "Instagram") {
            salary -= 100;
        } else if (siteOpened == "Reddit") {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${salary}`);
    }

}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);