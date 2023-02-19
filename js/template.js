//multiline string befor ES6

/* const person = "Adam Sand";
const person2 = "Ben White";
const person3 = `Donald Trump`;
const multiline =
  "First Line Text \n" + "second line of Code \n" + "third line of code \n";
// console.log(multiline); */

// multiline after ES6
/* const newMultiLine = `first line
second line
third lin`;
console.log(newMultiLine); */

const a = 20;
const b = 30;
// const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);//before ES6
const summary = `sum of: ${a} and ${b} is: ${(a + b)}`;// new ystem after ES6
console.log(summary);