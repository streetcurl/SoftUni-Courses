function theOldLibrary(input) {
    const searchedBook = String(input[0]);
    let checkedBooks = 0;
    let listOfSearchedBooks = input.slice(1);
    debugger
    while (checkedBooks < listOfSearchedBooks.length) {
        if (searchedBook == listOfSearchedBooks[checkedBooks]) {
            break;
        } else if (listOfSearchedBooks[checkedBooks] == "No More Books") {
            break;
        } else {
            checkedBooks++;
        }
    }

    if (listOfSearchedBooks[checkedBooks] == searchedBook) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }

}

theOldLibrary(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    ;
