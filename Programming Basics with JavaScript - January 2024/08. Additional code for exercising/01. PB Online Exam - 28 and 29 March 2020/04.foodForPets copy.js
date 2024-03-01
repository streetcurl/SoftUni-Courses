function foodForPets(input) {
    
    const days = Number(input[0]);
    const totalFood = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let eatenFood = 0;
    let biscuits = 0;
    let dayCount = 0;
    let indexCounter = 1; 


    while (dayCount < days) {
        let dogDayFood = Number(input[++indexCounter]);
        let catDayFood = Number(input[++indexCounter]); 
        dogFood += dogDayFood;
        catFood += catDayFood;
        dayCount++;
        
        if(dayCount % 3 === 0) {
            biscuits += (dogDayFood + catDayFood) * .10;
        }

    }

    eatenFood = dogFood + catFood;
    let procentEatenFood = (eatenFood / totalFood) * 100; 
    let procentDogEatenFood = (dogFood / eatenFood) * 100;
    let procentCatgEatenFood = (catFood / eatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${procentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${procentDogEatenFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${procentCatgEatenFood.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["9","10000","300","20","100","30","110","40","300","20","100","30","110","40","300","20","100","30","110","40"]);

foodForPets(["3","500","100","30","110","25","120","35"]);