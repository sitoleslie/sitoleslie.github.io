// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = value => {
    // i: value 
    // o: return the same value unchanged
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// i: any datatype 

_.typeOf = function(value){
// check if the value is a date
   if (value instanceof Date){
       // return date in string 
       return 'date';
       // check to see if the value is an array
   } else if (Array.isArray(value)){
       // return array in string 
       return 'array';
       // check if the value is null
   }else if (value === null){
       // return 'null'
       return 'null';
   }else {
       // else just return the value
       return typeof value;
   }

};





/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //check to see if the array is not an array 
    // or if the number is negative
    if(!Array.isArray(array) || number < 0){
        // return an empty array 
        return [];
        // check to see if the number is undefined and if the number is not a number
    }
    // if the number is undefined return the first element or return the first number of the array 
    return number === undefined ? array[0] : array.slice(0,number);
}








/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, x){
  //check if array is an array 
  // or if x is less than 0 
    if (!Array.isArray(array) || x < 0) {
      //if so, return an empty array
      return [];
    };

    //if x is undefined, return the last element in the array
    //if x is a number, return a slice of the array, from x to the end of the array
    return x === undefined ? array[array.length - 1] : array.slice(-x , array.length);
    
};













/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array,value){
    // i: array and value
  // c: do not use indexof   
    
    // iterate 
    for (let i = 0; i < array.length;i++){
     let element = array[i];
     // if the array's element is strictly equal to the value
     if(element === value){
         // then return that index 
         return i; 
     }
    }
    // return -1 if you do not find a match
    return -1;
};







/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array,value){
//     // checking if value is in the array and return true if it is, otherwise returns false
 return array.includes(value) ? true : false;

  
};






/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/



_.each = function(collection, callback){
    // check if the collection is an array 
    if(Array.isArray(collection)){
        // iterate 
        for (let i = 0; i < collection.length; i++){
            // using the call function on element, i, collection
            callback(collection[i], i, collection);
        }
        // if the collection is anything else 
    }else {
        // iterate 
        for (let key in collection){
            // using the call function on key, value, and collection
            callback(collection[key], key, collection);
        }
    }
    
    
    
};






/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/



_.unique = function(array){
    // i: array 

    // declare and assign an empty array storage 
const newArr = [];
   // iterate 
_.each(array, function(element){
 
 // console.log(newArr);
if(!(newArr.includes(element))){
newArr.push(element);
 }
});   
  // check each element to see if there are dups 
  
  return newArr;
  // push the element into the array once 
  
  //o: array with dups removed 

}





/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, callback){
  const filterArr = [];
  // implement the each function to iterate over and invoke the callback function 
  _.each(array, function(element, index, array){
      // if the call back function result in a true boolean 
      if(callback(element, index, array)){
          // push the element in the filterArr
          filterArr.push(element);
      }
  })
   // return
   return filterArr;
   
    
};






/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/




_.reject = function(array, callback){
const filterArr = [];
  // implement the each function to iterate over and invoke the callback function 
  _.each(array, function(element, index, array){
      // if the call back function result in a false boolean 
      if(!callback(element, index, array)){
          // push the element in the filterArr
          filterArr.push(element);
      }
  })
  // return
  return filterArr;




}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/



_.partition = function(array, test){
const output = [];

// o: an array of the truthy values 
// implement filter function to get all truthy elements 
output.push(_.filter(array, test));

// o: an array of the falsy values 
// implement reject function to get all falsy elements 

output.push(_.reject(array,test));

return output;
// push both of these outputs in the array 
//console.log(output);
};
















/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, callback){
const mapArr = [];

//use each function to loop through and run the iterator on all the elements in the array
_.each(collection, function(element, index, collection){
     //push the result of running the callback into the results array
    mapArr.push(callback(element, index, collection));
    
    
})
return mapArr;
};








/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function (arrayObj, property){
// i: array of objects
// i: property 

// const arr = []; 
// // o: array 




// // iterate 
// for (let i = 0; i < arrayObj.length; i++){
//   for (let key in arrayObj[i]){ 
//     if(key === property){
// // push in value in the new array 
//     arr.push(arrayObj[i][key]);
//   }
//     //console.log(arrayObj[i])
//     //console.log(arrayObj[i][key]);
//   }
  

// }


// using map to iterate through the arrayObj and invoking the callback on the element accessing it's value

return arrayObj.map(element => element[property]);

};



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, fun){
    // check if there is a function 
 if (typeof(fun) !== 'function') {
// implement contain to return back false 
      return !_.contains(collection, false);
   }
   // implement a new array to act as a container 
    var newArray = [];
    // using map to iterate through the collection
    newArray = _.map(collection, fun);
    //console.log(newArray);
    // using contains will return back a true or false 
    return !_.contains(newArray, false);

}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/



_.some =  function (collection,fun){
    // if the function is undefined 
   if (typeof(fun) !== 'function') {
       // test to see if the function has true values 
     return _.contains(collection, true);
  }
  // declare and assign an array literal 
   var newArray = [];
// using map to access the array or object 
   newArray = _.map(collection, fun);
   // contails will test for true
   return _.contains(newArray, true);

}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/





_.reduce = function(collection, iterator, accumulator) {
  let previous = accumulator;
  // if the acc is undefined 
  if (accumulator === undefined){
      // the acc will be assigned to the first index 
    previous = collection[0];
    // each is used to iterate 
    // function call on the element and index 
    _.each(collection, function(e, i){
        // if the index is not 0 
      if (i !== 0){
          // reassign the previous value to the next iteration 
        previous = iterator(previous, e, i);
      }
    });
  } else {
      // implement each to iterate through the collection 
      // function call on the element and index 
    _.each(collection, function(e, i){
     previous = iterator(previous, e, i);
    });
  }
  return previous;
  };












/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(...objArr){
// collect all the other objects into an array

// iterate 
// for (let i = 0; i < objArr.length; i++){
//     //iterate through each object 
//     for(let key in objArr[i]){
//         // copy values from object 2 into object 1
//         obj1[key] = objArr[i][key];
//     }
// }


// return obj1;

return Object.assign(...objArr);






};





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
