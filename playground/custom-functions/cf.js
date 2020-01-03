// const billAmount = 100;
// const taxRate = 0.13;
// const tipRate = 0.15;

/* ^ you can use variables to use in the function, but the values may change */
// don't want to reach outside to get information, rather, pass in information

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) { // paramaters
  // this is the function body
  // console.log('Running Calculate Bill!!');
  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate); // variable is only available in function
  return total;
}
// Function Call or Run
// console.log(calculateBill(100, 0.13, 0.15))
// to capture the `total` variable in the function, you have to use another variable; `total` is not available outside the function
const myTotal = calculateBill(100, 0.13, 0.15) // arguments
console.log(`Your total is $${myTotal}.`)
// or using a function in interpolation
console.log(`Your total is $${calculateBill(100, 0.13, 0.15)}.`)
console.log(`Your total is $${calculateBill(100, undefined, 0.20)}.`) // using undefined here is defaulting to the taxRate set in the param
const jaymieTotal = 500;
const jaymieTaxRate = 0.3;
const jaymieTipRate = 0.2

// you can also pass a reference to a variable; does not have to be a value "hardcoded" in the ()
console.log(`Your total is $${calculateBill(jaymieTotal, jaymieTaxRate, jaymieTipRate)}.`)

function sayHiTo(firstName) {
  return `Hello ${firstName}`
}
const greeting = sayHiTo('Jaymie'); //you can change the value to anything
// const greeting = sayHiTo(); // undefined
console.log(greeting)

function doctorize(name) {
  return `Dr. ${name}`
}
function yell(name = '') { // you can safe guard and have the param set to empty
  return `HEY ${name.toUpperCase()}`
}
console.log(yell(doctorize('Jaymie')))