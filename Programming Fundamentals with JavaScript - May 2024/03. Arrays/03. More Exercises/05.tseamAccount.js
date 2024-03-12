function tseamAccount(arr) {

    let petersAcc = arr[0];

    petersAcc = petersAcc.split(" ");

    for (let i = 1; i < arr.length; i++) {
        let commands = arr[i];

        commands = commands.split(" ");

        let command = commands[0];
        let gameName = commands[1];

        switch (command) {
            case "Play!":
                break;

            case "Install":
                petersAcc.push(gameName);
                break;

            case "Uninstall":
                petersAcc = petersAcc.filter(game => game !== gameName);
                break;

            case "Update":
                if (petersAcc.includes(gameName)) {
                    petersAcc = petersAcc.filter(game => game !== gameName);
                    petersAcc.push(gameName);
                }
                break;

            case "Expansion":
                game = gameName.split("-");
                let updateGameName = game[0];

                if (petersAcc.includes(updateGameName)) {
                    let index = petersAcc.indexOf(updateGameName);
                    petersAcc[index] = updateGameName + " " + game.join(":");
                }

                break;

            default:
                break;
        }


    }

    console.log(petersAcc.join(" "));
}


tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
);

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Expansion Diablo-Incredible',
    'Play!']
);