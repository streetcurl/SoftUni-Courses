function degConverter(input) {
    let angleRad = Number(input[0]);
    let angleDeg = angleRad * 180 / Math.PI;
    console.log(angleDeg);
}

degConverter(["6.2832"]);