const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const backQuotes = `<p>template quotes</p>`;

const result = singleQuotes + doubleQuotes + backQuotes;
document.querySelector('.basic').innerHTML = result;
