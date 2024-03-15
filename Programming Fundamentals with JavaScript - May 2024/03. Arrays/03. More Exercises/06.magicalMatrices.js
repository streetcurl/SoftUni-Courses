function magicalMatrices(matrice) {

    let n = matrice.length;

    //declaring variables for checks
    let rowTotal = matrice[0].reduce((a, b) => a + b);
    let colTotal = 0;
    let colArr = [];

    for (let currentCol = 0; currentCol < n; currentCol++) {
        for (let currentRow = 0; currentRow < n; currentRow++) {
            colArr[currentRow] = matrice[currentRow][currentCol];
        }

        colTotal = colArr.reduce((a, b) => a + b);

        if (colTotal !== rowTotal) {
            console.log("false");
            return;
        }
    }

    console.log("true");

}

magicalMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);

magicalMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);

magicalMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);