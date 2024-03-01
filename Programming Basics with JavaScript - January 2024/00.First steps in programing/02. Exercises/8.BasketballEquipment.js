function basketballEquipment(input) {
    let taxForAYear = Number(input[0]);
    let shoes = taxForAYear - (.4 * taxForAYear);
    let outfit = shoes - (.2 * shoes);
    let ball = 1 / 4 * outfit;
    let accessories = 1 / 5 * ball;
    let sumOfEquipment = taxForAYear + shoes + outfit + ball + accessories;
    console.log(sumOfEquipment);
}

basketballEquipment(["550"]);