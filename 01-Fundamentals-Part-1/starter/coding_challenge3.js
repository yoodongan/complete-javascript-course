// const averageDolphins = (96+108+89)/3;
// const averageKoalas = (88+91+110)/3;

// if (averageDolphins > averageKoalas) {
//     console.log('Dolphins Win!');
// }
// else if (averageDolphins < averageKoalas) {
//     console.log('Koalas Win!');
// }
// else{
//     console.log('Draw!');
// }

// Bonus 1
const averageDolphins = (97+112+101)/3;
const averageKoalas = (109+95+123)/3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('Dolphins Win!');
}
else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log('Koalas Win!');
}
else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log('Both Win!');
}
else{
    console.log('No one Wins!')
}

