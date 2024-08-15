const punkBands = ["Operation Ivy", "Rancid", "Dropkick Murphys", "River City Rebels"];

let favoriteBands = punkBands[Math.floor(Math.random() * punkBands.length)];
const displayBand = () => {console.log(`favoriteBands ${punkBands}`)}

console.log(favoriteBands);