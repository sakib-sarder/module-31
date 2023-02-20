//break with var
// no more use of var
// let reassignable -- let it to reassign
// const: dont allow it to reassign

/* let money = 34;
money = 64;
console.log(money); */

// reassign kora jabe na
/* const bird = 'jaan pakhi';
bird = 'monyna-pakhi';
console.log(bird); */

//kintu useable
/* const bird = 'jaan pakhi';
const message = bird + 'potas potas';
console.log(message); */

/* const numbers = [12, 86, 45, 75];
// reassign is not allow
// numbers = [465, 85, 655];
numbers[1] = 56;
console.log(numbers); */

// error because of reassign
/* const student = {
    name: 'mofiz',
    add: 'rangpur'
};
const student = {
    name: 'mofazzol'
} */
// -------------------Problem------------------------------------
// var is
/* let sum = 0;
const numbers = [12, 78, 55, 72, 46];
for (let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum += number;
}
console.log(number); */

/* function newFunction() {
  var hello = "hello";
}
console.log(hello); */

//hoisting related issue
/* console.log(hoisting);
var hoisting = 'hello I am Var'; */

// -----------------------------------------------------------

const hello = 'hey you';
console.log(hello);
