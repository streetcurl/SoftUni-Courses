function coneVolume(radius, height) {

    let volume = ((1 / 3) * Math.PI * radius ** 2 * height);
    let totalSurfaceArea = (Math.PI * radius) * (radius + Math.sqrt(radius ** 2 + height ** 2));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);


}

coneVolume(3, 5)
coneVolume(3.3, 7.8)