function uniquePINCodes(input) {

    const firstUpperLimit = Number(input[0]);
    const secondUpperLimit = Number(input[1]);
    const thirdUpperLimit = Number(input[2]);

    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;

    let printNum = "";

    for (let i = 1; i <= firstUpperLimit; i++) {
        if (i % 2 !== 0) {
            firstNum = 0;
        } else {
            firstNum = i;
        }
        for (let j = 1; j <= secondUpperLimit; j++) {
            if (j % 2 === 0 && j !== 2 || j % 3 === 0 && j !== 3 || j === 1) {
                secondNum = 0;
            } else {
                secondNum = j;
            }
            for (let g = 1; g <= thirdUpperLimit; g++) {
                if (g % 2 !== 0) {
                    thirdNum = 0;
                } else {
                    thirdNum = g;
                    if (firstNum === 0 || secondNum === 0 || thirdNum === 0) {
                    } else {
                        printNum = "" + firstNum + " " + secondNum + " " + thirdNum;
                        console.log(`${printNum}`);
                    }
                }
            }

        }
    }



}


uniquePINCodes(["3", "5", "5"]);

// uniquePINCodes(["8", "2", "8"]);
