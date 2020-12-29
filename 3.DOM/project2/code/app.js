//
//let myHeading = document.querySelector('h1')
//myHeading.textContent
//myHeading.textContent = "This is a newwwww heading"

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => { 
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});


//let ul = document.querySelector('ul')
//ul.innerHTML
//ul.innerHTML = "<li>red cabbage</li>"
//

//
//Element.attribute
//

//input.type
//input.className
//input.type = 'checkbox'

p.title = "List description";

//
// element.style
//

p.style
p.style.color = 'darkblue'
p.style.backgroundColor = 'lightblue'
