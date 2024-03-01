function bestPlayer (input) {

    let bestPlayerName = "";
    let bestGoals = 0;
    let index = 0;

    while(input[index] !== "END"){
        let curPlayerName = input[index];
        index++;

        let curPlayerGoals = Number(input[index]);
        index++;

        if(curPlayerGoals > bestGoals) {
            bestPlayerName = curPlayerName;
            bestGoals = curPlayerGoals; 

            if(bestGoals >= 10) {
                console.log(`${bestPlayerName} is the best player!`);
                console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
                return;
            }
        } 
    } 

    console.log(`${bestPlayerName} is the best player!`);

    if (bestGoals >= 3) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

// bestPlayer(["Neymar","2","Ronaldo","1","Messi","3","END"]);

// bestPlayer(["Silva","5","Harry Kane","10"]);

// bestPlayer(["Petrov","2","Drogba","11"]);

// bestPlayer(["Rooney","1","Junior","2","Paolinio","2","END"]);

// bestPlayer(["Zidane","1","Felipe","2","Johnson","4","END"]);

bestPlayer(["Silva","5","Harry Kane","10"]);