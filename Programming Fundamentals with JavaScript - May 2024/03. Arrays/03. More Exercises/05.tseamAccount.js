function tseamAccount(arr) {

    let petersAcc = arr[0].split(" ");

    for (let i = 1; i < arr.length; i++) {
        let commands = arr[i].split(" ");
        let command = commands[0];
        let gameName = commands[1];
        let expansion = "";

        switch (command) {
            case "Play!":
                console.log(petersAcc.join(" "));
                return;

            case "Install":
                if (!petersAcc.includes(gameName)) {
                    petersAcc.push(gameName);
                }
                break;

            case "Uninstall":
                // petersAcc = petersAcc.filter(games => games !== gameName);
                if (petersAcc.includes(gameName)) {
                    petersAcc.splice(petersAcc.indexOf(gameName), 1)
                }
                break;

            case "Update":
                if (petersAcc.includes(gameName)) {
                    petersAcc = petersAcc.filter(games => games !== gameName);
                    petersAcc.push(gameName);
                }
                break;

            case "Expansion":
                expansion = gameName.split("-");
                let updateGameName = expansion[0];

                if (petersAcc.includes(updateGameName)) {
                    let index = petersAcc.indexOf(updateGameName);

                    petersAcc.splice(index + 1, 0, expansion.join(":"));
                }

                break;

            default:
                break;
        }

    }

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