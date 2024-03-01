function Aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let volumeInLiters = volume * 0.001;
    let filledVolume = volumeInLiters * (1 - (percent / 100));
    console.log(filledVolume);
}

Aquarium(["105", "77", "89", "18.5"]);