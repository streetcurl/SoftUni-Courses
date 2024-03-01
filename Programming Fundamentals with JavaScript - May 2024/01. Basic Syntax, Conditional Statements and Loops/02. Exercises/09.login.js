function login(input) {

    const userName = String(input[0]);
    let numberOfTries = 0;


    for (let i = 1; i <= input.length; i++) {
        let inputPass = input[i];
        let correctPassword = userName.split('').reverse().join('');

        if(inputPass === correctPassword) {
            console.log(`User ${userName} logged in.`);
            return;
        } else {
            numberOfTries++;
            if(numberOfTries > 3) {
                console.log(`User ${userName} blocked!`);
                return;
            } else {
            console.log(`Incorrect password. Try again.`);

            }
            
        }

    }

}


login(['Acer', 'login', 'go', 'let me in', 'recA']);

login(['momo', 'omom']);

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);