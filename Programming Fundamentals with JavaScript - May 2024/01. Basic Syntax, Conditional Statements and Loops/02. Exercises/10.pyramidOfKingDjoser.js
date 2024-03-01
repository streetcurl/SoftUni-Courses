function pyramidOfKingDjoser(base, increment) {

    const finalPyramidHeight = Math.floor(Math.ceil(base / 2));

    let stoneReq = 0;
    let marbleReq = 0;
    let lapLazReq = 0;
    let goldReq = 0;

    for (let i = 0; i < finalPyramidHeight; i++) {
        let rowSize = base - (i * 2);
        let stoneOnRow = Math.round((rowSize - 2) ** 2);

        if (i === (finalPyramidHeight - 1)) {
            goldReq = Math.round(rowSize * rowSize);
        } else if ((i + 1) % 5 === 0 && i !== 0) {
            stoneReq += stoneOnRow;
            lapLazReq += ((rowSize * rowSize) - stoneOnRow);
        } else {
            stoneReq += stoneOnRow;
            marbleReq += ((rowSize * rowSize) - stoneOnRow);
        }
    }

    console.log(`Stone required: ${Math.ceil(stoneReq * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleReq * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapLazReq * increment)}`);
    console.log(`Gold required: ${Math.ceil(goldReq * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(finalPyramidHeight * increment)}`);

}

// pyramidOfKingDjoser(11, 1);

// pyramidOfKingDjoser(11, 0.75);

// pyramidOfKingDjoser(12, 1);

pyramidOfKingDjoser(23, 0.5);