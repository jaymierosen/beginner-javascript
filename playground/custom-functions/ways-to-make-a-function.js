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
console.log(doctorize2('Jaymie')) // will get run - is hoisting to the top BEFORE function is called
console.log(doctorize3('Jaymie')) // won't get run

function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}

const doctorize3 = function(firstName) { // is not hoisting when a function is NOT declared in a variable
  return `Dr. ${firstName}`;
};

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

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });


// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
  name: 'Westopher Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY WESSSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wesss im a mouse');
  }
}

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', function() {
  console.log('NIce Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
