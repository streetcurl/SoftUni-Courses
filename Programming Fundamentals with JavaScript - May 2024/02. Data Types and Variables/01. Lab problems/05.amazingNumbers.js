function amazingNumber(num) {

    num = num.toString()
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes("9");

    console.log(result ? `${sum} Amazing? True` : `${sum} Amazing? False`);


}

amazingNumber(1233);

amazingNumber(999);