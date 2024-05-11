//HomeWork_3.1
console.log("Home Work 3.1:");
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof 1: ${typeof 1}`);
console.log(`typeof NaN: ${typeof NaN}`);
console.log(`typeof Infinity: ${typeof Infinity}`);
console.log(`typeof "1": ${typeof "1"}`);
console.log(`typeof +"1": ${typeof +"1"}`);
console.log(`typeof typeof 1: ${typeof typeof 1}`);
console.log(`typeof true: ${typeof true}`);
console.log(`typeof function(){}: ${typeof function () { }}`);
console.log(`typeof Boolean: ${typeof Boolean}`);
console.log(`typeof Number: ${typeof Number}`);
console.log(`typeof String: ${typeof String}`);
console.log(`typeof null: ${typeof null}`);
console.log(`typeof Math: ${typeof Math}`);
console.log(`typeof {a: 1}: ${typeof { a: 1 }}`);
console.log(`typeof Symbol(): ${typeof Symbol()}`);
console.log("=============================================");

//HomeWork_3.2
let firstWord = prompt("Enter first word:");
let secondWord = prompt("Enter second word:");
let thirdWord = prompt("Enter third word:");

let allWords = [thirdWord, firstWord, secondWord].join(' ');

console.log(`Home Work 3.2: ${allWords}`);
console.log("=============================================");

// HomeWork_3.3
let num = 10369;
let result = num.toString().split('').join(' ');

console.log(`Home Work 3.3: ${result}`);