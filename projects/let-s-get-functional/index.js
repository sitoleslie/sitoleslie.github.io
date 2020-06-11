// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-sitoleslie');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sitoleslie.github.io/projects/let-s-get-functional
 * // start from environment 
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
// I: array 
// O: number
// C: use filer 

// invoke filter function using array as my first argument

return _.filter(array, (customerObj) => {
    // filter out of all male customers
   customerObj.gender === 'male'; 
}).length;

};


var femaleCount = function(array){
    
  return _.reduce(array, (counter, customerObj) => {
      // I: customer array
      // O: number of female customers
      // C: must use reduce
      // we need a seed bc data type of the first element in array is not datatype of output value
      
      
      // check to see if the array has females 
      if(array.gender === 'female'){
          // reassign and add to the acc
          
          counter += 1; 
         
      }
      // returnn
      
      return counter;
     
  }, 0);
    
    
    
};







var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
