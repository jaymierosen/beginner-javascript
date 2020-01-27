// *** CHAPTER 1: intro to the DOM ***
const p = document.querySelector('p');
const divs = document.querySelectorAll('.item');
const img = document.querySelectorAll('.item img');

// *** CHAPTER 2: selecting elements ***
const heading = document.querySelector('h2');
console.log(p);
console.log(divs);
console.log(img);

// *** CHAPTER 3: element properties and methods ***
console.dir(heading);
console.log(heading.textContent); // getter -- all of the contents
console.log(heading.innerText); // getter -- text only
// console.log(heading.textContent = 'Jaymie is cool.') // setter

console.log(heading.innerHTML); // text only
console.log(heading.outerHTML); // tags and text

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`; //causes re-rendering every time the browser refreshes
pizzaList.insertAdjacentText('beforeend', '🍕'); // method
pizzaList.insertAdjacentText('afterbegin', '🍕'); // method
// beforeend attaches at the end
// afterbegin attaches at the beginning

// *** CHAPTER 4: working with classes ***
const pic = document.querySelector('.nice');
pic.addEventListener('click', () => {
    pic.classList.toggle('round');
});
console.log(pic.classList);

// *** CHAPTER 5: attributes ***
pic.alt = 'Hello, this is an image'; // setter
console.log(pic.alt) // getter
window.addEventListener('load', () => {
    console.log(pic.naturalWidth);
    // only a getter, not a setter
});
console.log(pic.setAttribute('alt', 'really cute photo')); // setter
console.log(pic.getAttribute('alt')); // getter 

const custom = document.querySelector('.custom');
console.log(custom.dataset);

// *** CHAPTER 6: creating HTML ***
