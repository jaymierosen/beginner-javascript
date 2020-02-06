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
console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/700';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
const heading = document.createElement('h2');
heading.textContent = 'Cool Heading'
myDiv.insertAdjacentElement('afterbegin', heading); // child of div.wrapper
myDiv.insertAdjacentElement('beforebegin', heading); // sibling of div.wrapper
document.body.appendChild(myDiv);

// const list = document.createElement('ul');
// list.classList.add('myList');

// let text = ["one", "two", "three", "four", "five"];
// let listItem;
// for(let i = 0; i < text.length; i += 1) {
//     listItem = document.createElement("li");
//     listItem.innerHTML = text[i];
//     console.log(listItem);
// }

// console.log(listItem);

// list.appendChild(listItem);
// document.body.appendChild(list);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);

// *** CHAPTER 7: HTML from string + XSS [cross site scripting] ***
