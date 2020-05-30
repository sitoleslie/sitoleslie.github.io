// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // i: array
  // implement a for loop to iterate through the array
  for (let i = 0; i < array.length; i++){
  // o: print the values of the array by acessing each of the array index
  // constraints: must use console.log
  console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //i: array
// declare a new variable to hold the new value

  //implement a BACKWARD for loop to iterate through the array
  for(let i = array.length-1; i > -1; i--){
  
  //o: the array's values backwards 
  //c: use console.log
  console.log(array[i]);
  }
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //i: object
  // declare a variable to hold the new values 
  const arr = [];
  // implement a for in loop to iterate through the object 
  for (let key in object){
  // push in the keys into the arr variable
 
 arr.push(key);
  }
   // o: array with the object keys 
  return arr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
//i: object 

// implement a for in loop to iterate through the obj
for (let key in object){
//o: print it's keys
 console.log(key) 
}  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //i: object
 
 // declare a new variable to hold the new values
 const array = [];
 // implement a for in loop to iterate through the object 
  for (let key in object){
    
  // push in the values to the new array
  array.push(object[key]);
  }
  
  //o: ARRAY with it's object's values 
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
    
  //i: object
  // implement a for in loop to iterate through the object 
for (let key in object){
   
  //o:  object's values 
  //c: use console.log
  console.log(object[key]);
}


    
 
 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //i: object
  //inplement a for loop to iterate through the object
  
for (let key in object){
  
  //o: object's length
  //must use the object.key method to return an array of object properties 
  // using.length to count the length
  return Object.keys(object).length;
}  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
//i: object 
//return an array of the object properties by using object.key
// chain on the reverse method to reverse the array's elements
// use forEach to iterate through the object 
Object.keys(object).reverse()
.forEach((key) =>  console.log(object[key]) );

// o: print the object's value in reverse 
//c: use console.log
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
