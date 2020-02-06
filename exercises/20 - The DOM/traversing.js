console.log('hello world');

// <p class="jaymie">I am Jaymie, I <em>love</em> to bbq and <strong>make websites!</strong></p>

const jaymie = document.querySelector('.jaymie');
console.log(jaymie.children) // elements - em, strong
console.log(jaymie.childNodes) // nodes - text, em, text, strong

// **** ELEMENTS **** -- ONLY WRAPPED IN TAGS
console.log(jaymie.firstElementChild); // em
console.log(jaymie.lastElementChild); // strong
console.log(jaymie.previousElementSibling); // null
console.log(jaymie.nextElementSibling); // img
console.log(jaymie.parentElement); // body

// $0 = gives you currently selecting item in dev tools

// **** NODES ****
console.log(jaymie.childNodes); // nodeList
console.log(jaymie.firstChild); // first piece of text
console.log(jaymie.lastChild); // strong
console.log(jaymie.previousSibling); // text
console.log(jaymie.nextSibling); // text
console.log(jaymie.parentNode); // body

// CREATING ELEMENTS AND THEN REMOVING THEM
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove(); // removing elements from DOM

console.log(p); // still exists!

document.body.appendChild(p);