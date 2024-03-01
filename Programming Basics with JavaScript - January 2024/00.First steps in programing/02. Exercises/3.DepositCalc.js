function depositCalc(input) {
    let depositedAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearIntrestRate = Number(input[2]);
    let accruedInterest = depositedAmount * (yearIntrestRate / 100);
    let monthlyInterest = accruedInterest / 12;
    let sum = depositedAmount + (depositPeriod * monthlyInterest);
    console.log(sum);
}

depositCalc(["2350", "6", "7"]);