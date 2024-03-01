function foodDelivery(input) {
    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const vegMenu = 8.15;
    const delivery = 2.50;
    let sumChickenMenus = Number(input[0]) * chickenMenu;
    let sumFishMenus = Number(input[1]) * fishMenu;
    let sumVegMenus = Number(input[2]) * vegMenu;
    let dessert = (sumChickenMenus + sumFishMenus + sumVegMenus) * .2;
    let sumPrice = sumChickenMenus + sumFishMenus + sumVegMenus + dessert + delivery;

    console.log(sumPrice);
}

foodDelivery(["9", "2", "6"]);