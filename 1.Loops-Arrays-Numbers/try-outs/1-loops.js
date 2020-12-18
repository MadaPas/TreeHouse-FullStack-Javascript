// browser console script 

let rgbColor, html ='';

const randomColor = () => Math.floor(Math.random() * 256);

const printColors = html => document.write(html);

for (let i = 1; i <= 10; i++){ 

  rgbColor = randomColor() + ',' + randomColor() + ',' + randomColor();

  html += '<div style="width:30px;height:30px;background-color:rgb('+rgbColor+')"></div>'
  
}

printColors(html);

/////

"use strict"

const red, green, blue, rgbColor, html;

for (let i = 1; i <= 10; i++){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  rgbColor = red + ',' + green + ',' + blue;

  html = '<div style="width:30px;height:30px;background-color:rgb('+rgbColor+')"></div>'
  
  document.write(html);
}


