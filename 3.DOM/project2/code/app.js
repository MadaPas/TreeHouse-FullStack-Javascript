//
//let myHeading = document.querySelector('h1')
//myHeading.textContent
//myHeading.textContent = "This is a newwwww heading"

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => { 
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
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

//p.style
//p.style.color = 'darkblue'
//p.style.backgroundColor = 'lightblue'

//
// document.createElement()
// Node.appendChild(childElement)
//

addItemButton.addEventListener('click', () => {
   let ul = document.getElementsByTagName('ul')[0];
   let li = document.createElement('li');
   li.textContent = addItemInput.value;
   ul.appendChild(li);
   addItemInput.value = '';
});



