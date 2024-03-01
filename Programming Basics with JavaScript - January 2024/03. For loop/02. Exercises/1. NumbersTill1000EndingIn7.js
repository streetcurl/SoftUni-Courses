function numberEndingIn7() {
    for (let i = 1; i <= 1000; i++) {
        if ((i / 7) === 1 || (i % 10) === 7) {
            console.log(i);
        } else {
        }
    }

}

numberEndingIn7(["1000"])