function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses;
    let helmetsBroken = 0;
    let swordsBroken = 0;
    let shieldsBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lostFights; i++) {


        if (i % 2 == 0 && i % 3 == 0) {

            helmetsBroken++;
            swordsBroken++;
            shieldsBroken++;

        } else if (i % 2 == 0) {

            helmetsBroken++;
            currentHelmetBroken = true;

        } else if (i % 3 == 0) {

            swordsBroken++;
            currentSwordBroken = true;

        }

    }

    armorBroken = Math.floor(shieldsBroken / 2);

    expenses = (helmetPrice * helmetsBroken) + (swordPrice * swordsBroken) + (shieldPrice * shieldsBroken) + (armorPrice * armorBroken);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5)

gladiatorExpenses(23, 12.50, 21.50, 40, 200)