const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue *0.15 : billValue*0.2;

const result = `The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`;
console.log(result);