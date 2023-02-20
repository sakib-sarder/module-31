/* const max = Math.max(14, 85, 78, 899);
console.log(max); */

// get  max number from an array
/* const numbers = [15, 48, 79, 855, 1000];
console.log(Math.max(...numbers)); */

const numbers = [45, 15, 245, 789];
const numbers2 = [...numbers];
numbers.push(154);
numbers2.push(1455);
console.log(numbers);
console.log(numbers2);
const numbers3 = [111, 222, ...numbers, 333, 444];
console.log(numbers3);