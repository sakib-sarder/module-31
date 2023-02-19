//Before ES6
/* function add(first, second) {
    second = second || 0; // shorthand
    // if (second === undefined) {
    //  second = 0;
    //} 
    const total = first + second;
    return total;
} */

//After ES6
/* function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(30);
console.log(result); */

/* function fullName(first, last ='Chawdhuri') {
    return first + ' ' + last;
}
console.log(fullName('Aslam')); */