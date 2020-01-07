/* **** GLOBAL SCOPE **** */
// ** const and let are NOT attached to the window object **
// const jaymie = 'jaymie';
const city = 'Toronto';
// ** var is attached to the window object **
// console.log(window.name)
// var name = 'jaymie';
// functions are also attached to the window object
// console.log(window.sayHi)

// **** FUNCTION SCOPE ****
function go() {
  const city = 'NYC'; // overwrites the global city variable
  // when variables are created in a function
  // they are only avail inside the function
  // if you console.log(hair) inside the go() function it will run
  const hair = 'dirty blonde';
  console.log(hair);
  console.log(city); // goes up a level to find variable IF NOT avail inside function scope
}
go();

console.log(city);
// console.log(hair);

// **** BLOCK SCOPED ****
function isCool(name) {
  // let cool; // cool is available in function scope
  if (name === 'jaymie') {
    cool = true;
    // var cool = true; // var would be function scoped
    // let cool = true; // cool is scoped to if/else block
  } else {
    cool = false;
    // var cool = false; // var would be function scoped
    // let cool = false; // cool is scoped to if/else block
  }
  console.log(cool);
  return cool;
}
isCool('jaymie');

// using let here allows for block scoping so `i` variable does not leak outside of for loop
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = 'jerry';
  logDog(dog);
}
go(); // console logs 'snickers' because logDog() was defined not inside the go() function about outside of it
// if logDog has param, go() will console.log() 'jerry' because there is an argument of `dog` being passed in the logDog function

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell(); // yell() function is scoped so if it's called outside of function scope it won't run
}
// yell(); // it won't run
sayHi('jaymie');

