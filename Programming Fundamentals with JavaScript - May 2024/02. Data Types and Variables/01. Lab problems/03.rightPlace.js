function rightPlace(str, char, string) {

    const firstString = str.replace("_", char);

    let output = firstString == string ? "Matched" : "Not Matched";

    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong');

rightPlace('Str_ng', 'i', 'String');