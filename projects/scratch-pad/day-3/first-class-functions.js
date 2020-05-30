// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
 // i: base that is string or number
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
       // o: function 
         // declare an anonymous function that will take in a value 
    return value => {
       // check to see if the value is greater than the base 
       if (value > base){
           // return true if the condition is met 
           return true;
       }else {
           // return false, if the above condtion was not met 
           return false;
       }
    };
 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return value => {
       // check to see if the value is less than the base 
       if (value < base){
           // return true if the condition is met 
           return true;
       }else {
           // return false, if the above condtion was not met 
           return false;
       }
    };
 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 
 //i : SINGLE char
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // o: anonymous function 
// declare an anonymous function that takes an input of a string
return str => {
    // check to see if the str starts with the single char of the parent function
    if(str[0].toLowerCase() === startsWith.toLowerCase()){
        // if it checks out, return true
        return true;
    }else {
        // return false if the condition statement above is not met 
        return false;
    }
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      // o: anonymous function 
// declare an anonymous function that takes an input of a string
return str => {
    // check to see if the str end with the single char of the parent function by using bracket notation to access the last char
    if(str[str.length-1].toLowerCase() === endsWith.toLowerCase()){
        // if it checks out, return true
        return true;
    }else {
        // return false if the condition statement above is not met 
        return false;
    }
}  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
 // i: array of strings
 //i2: function 
 // declare and assign an array literal to store the results 
 const newArr = [];
 // implement a for loop to iterate through the array of strings 
    for (let i = 0; i <= strings.length-1; i++){
        // pushing in the modify function with the strings elements in the arr
        newArr.push(modify(strings[i]));
    }
// o: array of strings
// return the modify array
    return newArr;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // i: array & function 
    // declare and assign an array literal
  const strArr = [];
  // implement a for loop to iterare through the array of strings 
  for (let i = 0; i <= strings.length-1; i++){
      // check if the strings are true 
      if(test(strings[i]) === true){
          // pushing the true values into the array 
        strArr.push(i)  
      }
  }
    // check to see if the lengths are the same
if (strings.length === strArr.length) {
    //o: boolean
    // if it is, then it will be true 
    return true;
}   else {
    // o: boolean
    // otherwise, false 
    return false;
}
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}