// function randomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
//   }
  
//   var counter = 0;
//   while ( counter < 10 ) {
//     var random = randomNumber(6);
//     document.write(random + ' ');
//     counter += 1;
//   }

const randomNumber = (upper) => Math.floor( Math.random() * upper ) + 1;
  
  let counter = 0;
  while ( counter < 10 ) {
    const random = randomNumber(6);
    document.write(random + ' ');
    counter += 1;
  }