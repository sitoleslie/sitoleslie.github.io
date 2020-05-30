// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // input: any value 
    // check to see if the value is an array by using array.isarray method 
    if(Array.isArray(value)){
    // output: boolean
    return true;
    }else {
        //output: return false if, it is not an array
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // check to see if it is strictly an object and does not equal anything else 
 if (typeof value === 'object' && value != null && value != Date() && Array.isArray(value) != true){
     return true;
 }else {
     // it will return false if it is not strictly an object 
     return false
 }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // check to see if it is an object or an array 
     if (Array.isArray(value) || typeof value === 'object' && value != null && value != Date()){
     return true;
 }else {
     // return false if it does not strictly equal object
     return false
 }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // check to see if the value is 'date'
    if (value instanceof Date){
        // return it in string 
        return 'date'; 
        // check to see if the value is an array
    } else if (Array.isArray(value)){
        // return array in string 
        return 'array';
        // check to see if the value is null 
    }else if (value === null){
        // return null in string 
        return 'null';
    }else {
        // anything else just return the value
        return typeof value;
    }

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
