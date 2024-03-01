function barcodeGenerator(input) {

    const startOfBracode = String(input[0]);
    const endOfBarcode = String(input[1]);

    let numberStartIndex0 = Number(startOfBracode[0]);
    let numberStartIndex1 = Number(startOfBracode[1]);
    let numberStartIndex2 = Number(startOfBracode[2]);
    let numberStartIndex3 = Number(startOfBracode[3]);

    let numberEndIndex0 = Number(endOfBarcode[0]);
    let numberEndIndex1 = Number(endOfBarcode[1]);
    let numberEndIndex2 = Number(endOfBarcode[2]);
    let numberEndIndex3 = Number(endOfBarcode[3]);

    let printString = "";


    for(let i = numberStartIndex0; i <= numberEndIndex0; i++){
        if (i % 2 !== 0) {

            for(let j = numberStartIndex1; j <= numberEndIndex1; j++) {
                if (j % 2 !== 0) {

                    for(let g = numberStartIndex2; g <= numberEndIndex2; g++) {
                        if (g % 2 !== 0) {

                            for(let h = numberStartIndex3; h <= numberEndIndex3; h++) {
                                if (h % 2 !== 0) {
                                    printString += String(i) + String(j) + String(g) + String(h) + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(printString);

}



barcodeGenerator(["2345","6789"]);

// barcodeGenerator(["3256","6579"]);

// barcodeGenerator(["1365","5877"])


