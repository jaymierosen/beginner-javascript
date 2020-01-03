/* eslint-disable */

/**** STRINGS ****/

const name = 'wes';
// const middle = "topher";
// const last = `bos`;

// const sentence = "shes's so \"cool\"";
// const sentence2 = `shes's so "cool"`;

// const song = `Ohhh ya I like pizza`;

const hello = 'hello my name is ' + name + ". Nice to meet you";
console.log(hello)

// let hello2 = 'hello my name is ';
// hello2 = hello2 + name;
// hello2 = hello2 + ' Nice to meet you';

// const html = `
//   <div>
//     <h2>${name}</h2>
//     <p>${hello}</p>
//   </div>
// `;

// document.body.innerHTML = html;

/**** NUMBERS ****/

// operators - add, sub, mult, divide
// integer - ex. 10
// float - ex. 10.5
const age = 100;
const a = 10;
const b = 20;
console.log(a + b) // 30
const smarties = 20;
const kids = 3;
/* helper functions:
Math.round - rounds up or down
Moth.floor - rounds only down
Math.ceil - rounds only up
Math.random - provides a random number
*/
const eachKidGets = Math.floor(smarties / kids); // how much each kid gets
const dadGets = smarties % kids; // Modulo --> how many are left over
console.log(`Each kid gets ${eachKidGets}. Dad gets ${dadGets}.`);

const price = 1034;

/**** OBJECTS ****/

// everything in JS is an object

const person = {
  first: 'Jaymie',
  last: 'Rosen',
  age: 30
};

console.log(person)
console.log(person.first)

/**** NULL & UNDEFINED ****/

let dog;
console.log(dog); // will be undefined until you set a value to it
dog = 'snickers';

let somethingUndefined; // no value
const somethingNull = null; // has a value of nothing

const cher = {
  first: 'cher'
};
console.log(cher.last) // is undefined because she has no last name

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller'; // Teller made his last name his first name
teller.last = null; // Teller got rid of his last name; is nothing


let isDrawing = false;
let myAge = 18;
const ofAge = myAge > 19;
console.log(ofAge);

age = 100;
let age2 = 100;

// = setting a value
// == values are the same; type is not
// === value and type are the same
