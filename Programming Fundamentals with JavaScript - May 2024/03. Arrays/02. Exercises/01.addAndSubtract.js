function addAndSubtract(input) {

    sumOrgArr = 0;
    modArr = [];
    sumModArr = 0;

    for (let i = 0; i < input.length; i++) {
        sumOrgArr += input[i];

        if (input[i] % 2 == 0) {
            sumModArr += (input[i] + i);
            modArr[i] = (input[i] + i);
        } else {
            sumModArr += (input[i] - i);
            modArr[i] = (input[i] - i);
        }
    }

    console.log(modArr);
    console.log(sumOrgArr);
    console.log(sumModArr);

}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);