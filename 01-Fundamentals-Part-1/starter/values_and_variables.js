//1. values and variables
// let country = "Republic of south korea";
// let continent ="Asia";
let population = 4;
// console.log(country);
// console.log(continent);
// console.log(population);

//2. Data Types
// let isIsland = "Republic of south korea" == country;
let language;
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

//3. let, const and var
language = 'korean';
const country = "Repulbic of south korea";
const continent = "Asia";
const isIsland = false;
// continent = "Europe";      // impossible. syntax error.

//4. Basic Operators
population /= 2;
console.log(population);
population ++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
// const description = 
// country +
// ' is in '
// +continent+
// ', and its '
// +population+
// ' million people speak '+
//  language;
//  console.log(description);

 const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
 console.log(description);
