function diagonalMatrix(inputMatrix) {

    let numberOfRows = inputMatrix.length;
    let fullArr = [];
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    //Filling fullArr with all elements of the matrix (Making a multidimensional array);
    for (let i = 0; i < numberOfRows; i++) {
        fullArr.push(inputMatrix[i].split(" "));
    }

    //Calculating the sum of the diagonals from multidimensional array
    for (let i = 0; i < numberOfRows; i++) {

        sumFirstDiagonal += Number(fullArr[i][i]);
        sumSecondDiagonal += Number(fullArr[i][numberOfRows - i - 1])
    }

    //Check for the equal sum of diagonals
    if (sumFirstDiagonal !== sumSecondDiagonal) {
        // Diagonals are not equal, just print the original matrix
        fullArr = fullArr.forEach(row => console.log(row.join(" ")));
    } else {
        // Diagonals are equal, modify the matrix
        for (let i = 0; i < numberOfRows; i++) {
            for (let j = 0; j < numberOfRows; j++) {
                if (i !== j && i !== numberOfRows - 1 - j) {
                    fullArr[i][j] = sumFirstDiagonal;
                }
            }
        }

        // Print the modified matrix
        fullArr = fullArr.forEach(row => console.log(row.join(" ")));
    }
}


diagonalMatrix(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

diagonalMatrix(['1 1 1',
    '1 1 1',
    '1 1 0']
);