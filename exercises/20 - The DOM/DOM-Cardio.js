// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);
// or document.querySelector('body').appendChild(div);

// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// // make an unordered list
// const list = document.createElement('ul');

// // add three list items with the words "one, two three" in them
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// li1.textContent = 'one';
// li2.textContent = 'two';
// li3.textContent = 'three';

// li1.classList.add('first');
// li2.classList.add('second');
// li3.classList.add('third');

// list.appendChild(li1);
// list.appendChild(li2);
// list.appendChild(li3);

// put that list into the above wrapper
// list.insertAdjacentElement('beforeend', div);

// create an image
const img = document.createElement('img');

// set the source to an image
const width = 250;
const height = 250;
img.src = `https://picsum.photos/${width}/${height}`;
// set the width to 250
img.width = width;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute photo.';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const htmlContent = `
    <div class="myDiv">
        <p>Lorem ipsum.</p>
        <p>Lorem ipsum.</p>
    </div>
`;
// turn a string into a DOM element
const ulElement = div.querySelector('ul');

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', htmlContent);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
// myDiv.children[1].classList.add('warning');
myDiv.lastElementChild.classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
    </div>
  `;
  return html;
}

generatePlayerCard('Jaymie', 30, '5,4')

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
let cardsHTML = generatePlayerCard('wes', 12, 150);
console.log(cardsHTML)
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(e) {
  const buttonThatGotClicked = e.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
