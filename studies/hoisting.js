/*
* Hoisting 
*
* 0. Variables declaration are hoisted to the top of their scope, not the assignment. 
*
* 1. Function declrations are hoisted to the top, unlike function expressions. 
*
*/

// 1. var //

var car = 'mazda';
console.log(car); 
// prints => 'mazda'
// the variable was declared and initlized before it was called

console.log(pet);
var pet = 'dog';
// prints => undefined
// The declartion will be hoisted to the top and not the assignment. 

// 2. let and const //
// Both are hoisted to the top of their code block but are not accessible

//console.log(student); 
//let student = true; 
// prints => refError because student is not defined because this error will stop running the code

//console.log(city); 
//const city = 'metairie'; 
// prints => refError because age is not defined because this error will stop running the code

// 3. function delcartion //
console.log(number()); 
// prints => 2 
// Declarations are loaded before any code is ran.
function number() { return 2; }

// 4. function expression //
console.log(foo()); 
// prints => typeError
// foo wasn't loaded yet
var foo = function() { return 2; };