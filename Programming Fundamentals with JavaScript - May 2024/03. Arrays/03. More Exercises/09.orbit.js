function orbit(input) {

    const cols = input[0];
    const rows = input[1];
    const starRow = input[2];
    const starCol = input[3];

    let orbitArr = [];

    for (let i = 0; i < rows; i++) {
        orbitArr.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            orbitArr[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(orbitArr.map(row => row.join(" ")).join("\n"));

}

orbit([10, 10, 1, 2]);

orbit([5, 5, 2, 2]);

orbit([3, 3, 2, 2]);