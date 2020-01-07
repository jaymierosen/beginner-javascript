/* esline-disable */
let age;
console.log(age); // won't run because age does not been defined yet
age = 10;

// when you run JS, it will take function declarations at the top of the page before it exists

sayHi();

function sayHi() {
  console.log('hi');
}