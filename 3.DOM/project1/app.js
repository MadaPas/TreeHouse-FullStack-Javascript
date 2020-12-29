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
//next task (getElementsByclassName )
//

//const errorNotPurple = document.getElementsByClassName('error-not-purple');
//
//for(let i = 0; i< errorNotPurple.length; i += 1) {
//  errorNotPurple[i].style.color = 'red';
//}

//
//next task (document.querySelector)
//

//document.querySelectorAll('li')
//document.querySelector('li')
//document.querySelector('#myHeading')
//document.querySelectorAll('.error-not-purple')
//document.querySelector('[title=label]')

const errorNotPurple = document.querySelectorAll('.error-not-purple');
for(let i = 0; i< errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for(let j = 0; j< evens.length; j += 1) {
  evens[j].style.backgroundColor = 'lightgrey';
}

const odds = document.querySelectorAll('li:nth-child(odd)');

for(let k = 0; k< odds.length; k += 1) {
  odds[k].style.backgroundColor = 'lightblue';
}
console.log()