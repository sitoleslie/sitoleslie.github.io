/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* Let:
*0. Let is similar to Var due to the fact they both can declare and can reassign different datatypes such as strings, numbers, booleans, and etc. 
*However, let is declared only once in the local scope and is limited in the block that it is in.
*
*1. First, create a variable using the keyword, let. 
*
*2. Let does not have to be declared and defined right away within the block scope.
*
*/

//1. declaration //
let firstName;

console.log(firstName); 
//prints => undefined
//At this phase, firstName will print undefined because the variable is uninitialzed and not defined. 

// 2. declaration //
firstName = 'Les';
console.log(firstName); 
// prints => Les

//3. reassignment
firstName = 'Leslie';
console.log(firstName);
// prints => Leslie

/* 
* Const:
*
* 0. It is a constant reference to it's value and can never change. 
*However, it's values can still be updated if it is an array [] or object literal {}. 
*
* 1. They are blocked scoped and can't be hosited to the top of their block.
*
* 2. To declare a const variable, use the keyword, const along with it's name and value.
*
* 3. There is only one phase: declaration & assignment 
*/

// 1. declaration & assignment //
const middleName = 'Sito';
console.log(middleName); 
// prints => "Sito"


/* 
* Hoisting: 
*
* 0. Hoisting will bring var declartions to the top of the scope, not the initilzation.
*
* 1. The variable var will be hoisted to the top of the global or local scope. 
*
*/ 

// 1. var //

var hairColor = 'blonde';
console.log(hairColor); 
// prints => 'blonde'
// hairColor was declared and initlized before it was called

console.log(color);
var color = 'pink';
// prints => undefined
// The declartion will be hoisted to the top and not the assignment. 

// 2. let and const //
// Both are hoisted to the top of their code block but are not accessible

//console.log(age); 
//let age = 24; 
// prints => refError because age is not defined because this error will stop running the code

//console.log(hometown); 
//const hometown = 'nola'; 
// prints => refError because age is not defined because this error will stop running the code

