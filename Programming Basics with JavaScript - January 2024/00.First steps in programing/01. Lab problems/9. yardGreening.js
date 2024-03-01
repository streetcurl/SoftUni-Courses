function yardGreening(input) {

    let thePrice = Number(input[0]) * 7.61;
    let theDiscount = thePrice * 0.18;
    let theFinalPrice = thePrice - theDiscount;

    console.log(`The final price is: ${theFinalPrice} lv. The discount is: ${theDiscount} lv.`);
}

yardGreening(["150"]);