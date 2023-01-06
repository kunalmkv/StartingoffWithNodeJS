const fs = require('fs');
const { text } = require('stream/consumers');
let textInFile = fs.readFileSync('./input.txt', 'utf-8');
console.log(textInFile);
let content = `Data read from input.txt : ${textInFile} \n create date: ${new Date()}`
fs.writeFileSync('./output.txt', content);
