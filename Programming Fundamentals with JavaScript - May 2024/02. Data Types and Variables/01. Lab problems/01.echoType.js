function echoType(param) {

    const dataType = typeof (param)

    console.log(dataType);


    if (dataType == 'number' || dataType == 'string') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}

echoType('Hello, JavaScript!');

echoType(18);

echoType(null);