function barcodeGenerator(input) {
 
    const start = String(input[0]);
    const end = String(input[1]);
 
    let printString = "";
 
    for (let i = Number(start[0]); i <= Number(end[0]); i++) {
        if (i % 2 !== 0) {
            for (let j = Number(start[1]); j <= Number(end[1]); j++) {
                if (j % 2 !== 0) {
                    for (let g = Number(start[2]); g <= Number(end[2]); g++) {
                        if (g % 2 !== 0) {
                            for (let h = Number(start[3]); h <= Number(end[3]); h++) {
                                if (h % 2 !== 0) {
                                    printString += "" + i + j + g + h + " ";
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