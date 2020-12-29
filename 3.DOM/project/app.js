////const myHeading = document.getElementById('myHeading');
//const myHeading = document.getElementsByTagName('h1')[0];
////const myHeading = document.getElementsByTagName('p')[0];
//const myButton = document.getElementById('myButton');
//const myInput = document.getElementById('myInput');
//
//myButton.addEventListener('click', () => {
//// myHeading.style.color = 'red';                         
//  myHeading.style.color = myInput.value;
//});


//
//next task (getElementsByTagName)
//

const myList = document.getElementsByTagName('li');

for(let i = 0; i< myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

//
//next task (getElementsByClassName )
//

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for(let i = 0; i< errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}