function projectCreation(input) {
    let architectName = input[0];
    let project = Number(input[1]);
    let hours = (project * 3);

    console.log(`The architect ${architectName} will need ${hours} hours to complete ${project} project/s.`);

}

projectCreation(["George", "9"]);