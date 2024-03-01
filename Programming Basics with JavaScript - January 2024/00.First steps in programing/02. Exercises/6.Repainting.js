function repainting(input) {
    const nylon = 1.5;
    const paint = 14.50;
    const thinner = 5;
    const plasticBag = 0.40;
    let sumOfNeededNylon = (Number(input[0]) + 2) * nylon;
    let sumOfNeededPaint = (Number(input[1]) * 1.10) * paint;
    let sumOfNeededThinner = Number(input[2]) * thinner;
    let neededHoursWork = Number(input[3]);
    let sumMaterials = sumOfNeededNylon + sumOfNeededPaint + sumOfNeededThinner + plasticBag;
    let sumForWork = (sumMaterials * .3) * neededHoursWork;
    console.log(sumMaterials + sumForWork);
}

repainting(["5", "10", "10", "1"]);