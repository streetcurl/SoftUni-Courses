function newHouse(input) {
    const priceRoses = 5
    const priceDahlias = 3.8;
    const priceTulips = 2.8;
    const priceNarcissus = 3;
    const priceGladiolus = 2.5;
    debugger
    let typeOfFlowers = String(input[0]);
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let priceAllFlowers = 0;
    let leftSum = 0;

    if (typeOfFlowers == "Roses" && numberOfFlowers > 80) {
        priceAllFlowers = ((priceRoses * numberOfFlowers) * .9).toFixed(2);
    } else if (typeOfFlowers == "Dahlias" && numberOfFlowers > 90) {
        priceAllFlowers = ((priceDahlias * numberOfFlowers) * .85).toFixed(2);
    } else if (typeOfFlowers == "Tulips" && numberOfFlowers > 80) {
        priceAllFlowers = ((priceTulips * numberOfFlowers) * .85).toFixed(2);
    } else if (typeOfFlowers == "Narcissus" && numberOfFlowers < 120) {
        priceAllFlowers = ((priceNarcissus * numberOfFlowers) * 1.15).toFixed(2);
    } else if (typeOfFlowers == "Gladiolus" && numberOfFlowers < 80) {
        priceAllFlowers = ((priceGladiolus * numberOfFlowers) * 1.20).toFixed(2);
    } else {
        switch (typeOfFlowers) {
            case "Roses":
                priceAllFlowers = (numberOfFlowers * priceRoses).toFixed(2);
                break;
            case "Dahlias":
                priceAllFlowers = (numberOfFlowers * priceDahlias).toFixed(2);
                break;
            case "Tulips":
                priceAllFlowers = (numberOfFlowers * priceTulips).toFixed(2);
                break;
            case "Narcissus":
                priceAllFlowers = (numberOfFlowers * priceNarcissus).toFixed(2);
                break;
            case "Gladiolus":
                priceAllFlowers = (numberOfFlowers * priceGladiolus).toFixed(2);
                break;
        }
    }


    if (budget >= priceAllFlowers) {
        leftSum = (budget - priceAllFlowers).toFixed(2);
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${leftSum} leva left.`)
    } else {
        leftSum = Math.abs(priceAllFlowers - budget).toFixed(2);
        console.log(`Not enough money, you need ${leftSum} leva more.`);
    }
}

newHouse(["Tulips", "88", "260"]);