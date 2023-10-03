
let day = 'Tuesday';
const soup = 10;
const burgers = 3 * 8;
const iceCream = 5;
const total = soup + burgers + iceCream;
const friends = ['Burt', 'Ernie'];
const toaster = 18.50;
const shirt = 7.50 * 2;
const toasterTwo = 1899;
const basketball = 2095;
const tShirts = 799;
const totalTwo = toasterTwo + basketball + tShirts + 499;
console.log(`It cost me $${total} to treat my wife and myself to lunch on ${day}.`);
console.log(`I just had lunch with ${friends[0]} and ${friends[1]}. We each paid $${total / 3} for our meals.`);
console.log(`My Amazon order for a toaster and 2 shirts cost me a total of $${toaster + shirt}.`);
console.log((toaster + shirt) * 0.1);
console.log((toaster + shirt) * 0.2);
console.log(totalTwo);
console.log(Math.round(totalTwo * 0.1) / 100);
console.log(totalTwo + 5.29);

console.log(Math.floor(2.8)); // The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.ceil(2.8)); // The Math.ceil() method rounds a number rounded UP to the nearest integer.

let Celsius = 25;
let Fahrenheit = 86;

//console.log((Celsius * 9/5) + 32);
//console.log((Fahrenheit - 32) * 5/9);
console.log(`It is ${(Celsius * 9/5) + 32}°F outside.`);
console.log(`It is ${(Fahrenheit - 32) * 5/9}°C outside.`);

Celsius = -5;
console.log(`It is ${(Celsius * 9/5) + 32}°F outside.`);
