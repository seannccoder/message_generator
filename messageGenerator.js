const punkBands = ["Operation ivy", "rancid", "dropkick Murphys", "river City Rebels"];

let favoriteBands = punkBands[Math.floor(Math.random() * punkBands.length)];
const displayBand = () => {console.log(`favoriteBands ${punkBands}`)}

console.log(favoriteBands);