const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";


const vegetableList = 
  `<ul>
    <li>Carrot</li>
    <li>Potato</li>
    <li>Brocoli</li>
  </ul>`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;
