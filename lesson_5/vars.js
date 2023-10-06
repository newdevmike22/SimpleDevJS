// let is a variable whose value can be changed.
let variable1 = 3;
console.log(variable1);

let calculation = 2 + 2;
console.log(calculation);
console.log(calculation + 2);

console.log(variable1 + calculation);

let result = calculation * variable1;
console.log(result);

let message = 'Hola mi amor.';
console.log(message);

// The value of variable1 was re-assigned.
variable1 = 5;
console.log(variable1); console.log(`Paola just turned ${variable1} today.`);

variable1 = variable1 + 5;
console.log(variable1); console.log(`Ken and Barbara have now been married ${variable1} years.`);

// const is a variable whose value remains the same. It's best to use const.
const variable2 = 10;

// var is another way to write a variable. However var is now outdated.
var variable3 = 55;

// typeof is used to tell us what type of value our variable is storing.
console.log(typeof variable3);

const myName = 'Shake Zula The Mic Ruler';
console.log(typeof myName); console.log(`My name is ${myName}. The world's greatest MC!`);

const cost = 2 * 3 + 5 + 9;
console.log(`Yesterday I spent $${cost} at the Bread Company.`);

const tax = cost * 0.1;
console.log(`My tax on the meal at the Bread Co. was $${tax}.`);

const totalCost = cost + tax;
console.log(`My total meal cost was $${totalCost}.`);

