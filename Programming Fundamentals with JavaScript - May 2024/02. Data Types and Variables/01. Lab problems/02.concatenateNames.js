function concatenateNames2(first, second, delimiter) {

    console.log(`${first}${delimiter}${second}`);

}


function concatenateNames(first, second, delimiter) {

    const concatenated = first + delimiter + second;
    console.log(concatenated);

}

concatenateNames('John', 'Smith', '->');

concatenateNames('Jan', 'White', '<->');

concatenateNames('Linda', 'Terry', '=>');