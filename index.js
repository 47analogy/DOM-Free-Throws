// reference to the container
const container = document.querySelector('#container');

// create a new div
const content = document.createElement('div');

// add a class and text
content.classList.add('content');
content.textContent = 'JS Did This!';

// add it to the container
container.appendChild(content);


// add a paragraph with purple text to container
const purpleParaText = document.createElement('p');
purpleParaText.textContent = 'Purple Paragraph Text Here';
container.appendChild(purpleParaText);
purpleParaText.style.color = 'purple';

// add a h2 tag with green text to the container
const greenHead2Text = document.createElement('h2');
greenHead2Text.textContent = 'Green H2 Text Here';
container.appendChild(greenHead2Text);
greenHead2Text.style.color = 'green';

// a div with a blue border and yellow background
// with an h3 tag and paragraph in it
const blueDivContent = document.createElement('div');
blueDivContent.style.border = '3px solid blue';
blueDivContent.style.backgroundColor = 'yellow';

const h3Tag = document.createElement('h3');
h3Tag.textContent = 'Here is a H3 Header';
blueDivContent.appendChild(h3Tag); // add to div

const newPara = document.createElement('p');
newPara.textContent = 'Here is a new Paragraph yo!';
blueDivContent.appendChild(newPara); // add to div

container.appendChild(blueDivContent); // add all to container

