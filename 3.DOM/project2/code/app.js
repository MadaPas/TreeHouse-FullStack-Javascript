//
//let myHeading = document.querySelector('h1')
//myHeading.textContent
//myHeading.textContent = "This is a newwwww heading"

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const removeItemButton = document.querySelector('button.removeItemButton');

//const listItems = document.getElementsByTagName('li');
//for (let i = 0; i < listItems.length; i += 1) {
//listItems[i].addEventListener('mouseover', () => {
//  listItems[i].textContent = listItems[i].textContent.toUpperCase();
//});
//
//listItems[i].addEventListener('mouseout', () => {
//  listItems[i].textContent = listItems[i].textContent.toLowerCase();
//});
//}
//


//listDiv.addEventListener('mouseover', (event) => {
//  if (event.target.tagName == 'LI') {
//  event.target.textContent = event.target.textContent.toUpperCase();
//  }
//});
//
//
//listDiv.addEventListener('mouseout', (event) => {
//    if (event.target.tagName == 'LI') {
//  event.target.textContent = event.target.textContent.toLowerCase();
//   }
//});


listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
   if (event.target.className == 'up') {
     let li = event.target.parentNode;
     let prevLi = li.previousElementSibling;
     let ul = li.parentNode;
     if (prevLi) {
        ul.insertBefore(li, prevLi);
     }
    }
   if (event.target.className == 'down') {
     let li = event.target.parentNode;
     let nextLi = li.nextElementSibling;
     let ul = li.parentNode;
     if (nextLi) {
        ul.insertBefore(mextLi, li);
     }
    }
  }
});

document.addEventListener('click', () => {
console.log(event.target);
});

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

descriptionP.title = "List description";

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

removeItemButton.addEventListener('click', () => {
   let ul = document.getElementsByTagName('ul')[0];
   let li = document.querySelector('li:last-child');
   ul.removeChild(li);
});



