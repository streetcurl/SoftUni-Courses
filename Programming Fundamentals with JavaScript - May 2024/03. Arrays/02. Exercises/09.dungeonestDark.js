function dungeonestDark(dungeonsRooms) {

    let currentHealth = 100;
    let totalCoins = 0;
    let resultArray = [];
    let inputString = "";

    //Turn the initial array to string and then to resultArray without "|"

    if (typeof dungeonsRooms[0] === 'string') {
        inputString = dungeonsRooms[0];
        resultArray = inputString.split('|');
    }

    //Turn the resultArray to string and hen to currentArray without " "

    for (let i = 0; i < resultArray.length; i++) {
        let currentArrayString = resultArray[i];
        let currentArray = currentArrayString.split(" ");

        //Potion case
        if (currentArray[0] === "potion") {
            let health = Number(currentArray[1]);

            if ((currentHealth + health) > 100) {
                health = 100 - currentHealth;
                currentHealth = 100;

            } else {
                currentHealth += health;
            }

            console.log(`You healed for ${health} hp.`);
            console.log(`Current health: ${currentHealth} hp.`);

            //Chest case
        } else if (currentArray[0] === "chest") {
            let coins = Number(currentArray[1]);

            console.log(`You found ${coins} coins.`);
            totalCoins += coins;

            //Attack case
        } else {
            let monsterAttack = Number(currentArray[1]);
            let monsterName = currentArray[0];

            currentHealth -= monsterAttack;

            // Killed
            if (currentHealth <= 0) {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${i + 1}`);
                return;

                //Slay
            } else {
                console.log(`You slayed ${monsterName}.`);
            }

        }
    }

    //End of game
    console.log(`You've made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${currentHealth}`);

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);


