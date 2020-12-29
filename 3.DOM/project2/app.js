//
//let myHeading = document.querySelector('h1')
//myHeading.textContent
//myHeading.textContent = "This is a newwwww heading"

const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});


//let ul = document.querySelector('ul')
//ul.innerHTML
//ul.innerHTML = "<li>red cabbage</li>"
//
