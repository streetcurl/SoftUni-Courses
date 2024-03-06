function binaryToDecimal(binaryNum) {

    let decimal = parseInt(binaryNum, 2);
    console.log(decimal);

}

binaryToDecimal("00001001");

binaryToDecimal("11110000");


function binaryToDecimal(binaryNum) {

    let decimal = Number("0b" + binaryNum);
    console.log(decimal);

}

binaryToDecimal("00001001");

binaryToDecimal("11110000");

