// FIRST TRY
// function specialNums(n) {

//     let sum = 0;

//     for (let i = 1; i <= n; i++) {

//         let numString = i.toString();

//         for (let j = 0; j < numString.length; j++) {
//             sum += Number(numString[j]);
//         }

//         if (sum == 5 || sum == 7 || sum == 11) {
//             console.log(`${i} -> True`);
//         } else {
//             console.log(`${i} -> False`);
//         }

//         sum = 0;
//     }


// }

// specialNums(15);

// specialNums(20);




// SECOND TRY - After I saw the hint
function specialNums(n) {
    for (let i = 1; i <= n; i++) {
        let num = i;
        let digitSum = 0;

        while (num > 0) {
            digitSum += num % 10;
            num = parseInt(num / 10);
        }

        if (digitSum === 5 || digitSum === 7 || digitSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNums(15);
specialNums(20);
