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