function catWalking(input) {

    const minutesWalkingPerDay = Number(input[0]);
    const numberOfWalksPerDay = Number(input[1]);
    const caloriesPerDay = Number(input[2]);

    let burnedCalories = minutesWalkingPerDay * numberOfWalksPerDay * 5;

    if (burnedCalories > (caloriesPerDay/2) ) {

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
    
}

// catWalking(["30","3","600"]);

catWalking(["15","2","500"]);

// catWalking(["40","2","300"]);
