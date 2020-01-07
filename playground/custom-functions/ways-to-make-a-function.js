// **** Function keyword ****
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// **** Anon Function ****
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// **** Function Expression - anon function in a variable ****
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// **** HOISTING ****
// console.log(doctorize2('Jaymie')) // will get run - is hoisted to the top BEFORE function is called
// console.log(doctorize3('Jaymie')) // won't get run

// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// const doctorize3 = function(firstName) { // is not hoisting when a function is NOT declared in a variable
//   return `Dr. ${firstName}`;
// };

/**** ARROW FUNCTION ****/
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return inches * 2.54;
//   return cm;
// }
// const inchToCM = (inches) => {
//   return inches * 2.45
// }
// implicit return:
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;
console.log(add(2)) // only need to pass one argument, since the other param is already set as 3
// you can pass two arguments, but b = 3 will be overridden

// **** returning an object ****
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }
// console.log(makeABaby('Jaymie', 'Rosen'));

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// **** IIFE ****
// Immediately Invoked Function Expression
(function(age) {
  return `You are cool and age ${age}`;
})(10);

// **** Methods ****
const jaymie = {
  name: 'Jaymie Rosen',
  // Method -- function of object
  sayHi: function() {
    // console.log(`Hey ${this.name}`); // `this` keyword is referencing the jaymie object
    return `Hey ${this.name}`;
  },
  // Short hand Method
  yellHi() {
    console.log('HEY JJAYMIEEEE');
  },
  // Arrow function
  whisperHi: () => {
    // console.log(`Hey ${this.name}`); // `this` keyword does not work in an arrow func
    console.log(`hi jaymie i'm a mouse`);
  }
}

// **** Callback Functions ****
// Click Callback -- function that we give it access to
// here is the function and call the function WHEN someone clicks on the button
const button = document.querySelector('.clickMe');
button.addEventListener('click', jaymie.sayHi);

function handleClick() {
  console.log('great clicking')
}
button.addEventListener('click', handleClick); // handleClick is the callback function
// or
button.addEventListener('click', function() {
  console.log('awesome clicking')
});
// or 
button.addEventListener('click', () => {
  console.log('amazing clicking')
});
// **** Timer Callback ****
setTimeout(jaymie.yellHi, 1000);
// or
setTimeout(function(){
  console.log('hellooooo jaymie')
}, 2000)