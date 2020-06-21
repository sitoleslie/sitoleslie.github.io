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
  return customerObj.gender === 'male'; 
}).length;

};


var femaleCount = function(array){
    
  return _.reduce(array, (counter, customerObj) => {
      // I: customer array
      // O: number of female customers
      // C: must use reduce
      // we need a seed bc data type of the first element in array is not datatype of output value
      
      
      // check to see if the array has females 
      if(customerObj.gender === 'female'){
          // reassign and add to the acc
          
          counter += 1; 
         
      }
      // return
      
      return counter;
     
  }, 0);
    
    
    
};






// find oldest customer's name 
var oldestCustomer = function(array){


// i: array

// setting a variable to have something to compare too 
let oldestAge = 0; 

// assign a new variable to use reduce to iterate through the array 
let oldestPerson = _.reduce(array, (acc, currV) => {
  
  // compare the curr customer age to the oldestAge variable
  if(currV.age > oldestAge){
    // reassign the oldestAge to the current age
    oldestAge = currV.age;
    // reassigning the acc to the customer's name 
    acc = currV.name;
  }
  // dont forget to return the acc
   return acc;
  
}, ''); // acc is set to an empty string 

// o: string of customer name 


// done 
return oldestPerson;


  
  
  
};

var youngestCustomer = function(array){
  // i: array 
// declare a variable to compare the youngest 

let youngest = 100; 

// use reduce on the array 

let youngestPerson = _.reduce(array, (acc, custObj) => {
  if(youngest > custObj.age){
    youngest = custObj.age;
    acc = custObj.name;
  }
  
    //o: string of oldest customer 
  return acc; 
}, ''); // seed of empty string 
  
// return 
return youngestPerson; 
};





var averageBalance = function(array){
    // reduce will iterate through the array and return the output
let total = _.reduce(array, function(acc, people) {
    // use parseFloat to make the string value into a number 
    // use the replace method to remove the char, so the numbers will be in that string
    // divide by array's length to get the average
let updatedBal = acc + parseFloat(people.balance.replace(/\$/g,'').replace(/\,/g,'')) / array.length
// now return the updatedBal 
return updatedBal; 
}, 0) 
return total; 
}


// `firstLetterCount`
// - **Objective**: Find how many customer's names begin with a given letter
// - **Input**: `Array`, `Letter`
// - **Output**: `Number`
// - **Constraints**:
var firstLetterCount = function(array,letter){
    // use the reduce function to iterate through the array 
  let newNum =  _.reduce(array, function(acc, people){
      // check if the first index of person's name will have the same letter 
        if (people.name[0].toUpperCase() === letter.toUpperCase()){
          // add one to the acc to keep track
            return acc + 1; 
        } else {
          // return the acc if nothing else if found
            return acc; 
        }
    }
    , 0)
return newNum;
}
  
  
  
var friendFirstLetterCount = function(array, customer, letter){
  // invoke the function call back
    let filteredArray = _.filter(array, function(e, i, a) {
       // check if the obj name is strictly equal to the customer string
       if (e.name === customer) {
           // return true
           return true;
       } 
    });
    
    return filteredArray[0].friends.reduce(function(acc, curr) {
       // check if the curr name first letter is lower case to the letter input
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
            // increase the acc by 1
            acc += 1;
        }
        // return the accumulator
        return acc;
    }, 0)


}



var friendsCount = function(array,name){
    
    
  return  _.reduce(array,function(acc,curr){
    // iterate through the friends array to find the name
        _.each(curr.friends,function(friend){
    
            // check if the customer has a friend with that given name
            if(friend.name === name){
              // push the name if found 
                acc.push(curr.name);
            }
                
        });
        return acc;
    },[]);
};

var topThreeTags = function(array) {
    let tag1 = _.reduce(array, function(tagsObj, curr) {
        let arrayOfTags = curr.tags;
        _.each(arrayOfTags, function(tag) {            
          if (tagsObj[tag]) {
                tagsObj[tag]++;
                //if none just set the tag count equal to 1
            } else { 
                tagsObj[tag] = 1;
            }
        });
        //return our tags obj counts
        return tagsObj; 
    }, {});
    let arr = []; 
    _.each(tag1, function(value, key, obj) {
      // push in the key and value 
        arr.push([key,value]); 
    });
    arr.sort(function(x, y) {
      // sort the array
        return y[1] - x[1]; 
    });
    // slice off the extra data 
    var topThree = arr.slice(0, 3); 
    // use map to test 
    let test = _.map(topThree, function(nested) { 
        return nested[0];
    });
    // done
    return test; 
};

var genderCount = function(array){
  
   return _.reduce(array, function(acc, personObj){
       //check each gender 
        if (personObj.gender === 'male'){
          //add one everytime a male exists 
        acc.male += 1; 
        // check if it is a female 
        } else if (personObj.gender === 'female'){
          // if a female exists it will add one
            acc.female += 1; 
            // check for 'non-binary'
        }else if (personObj.gender === 'non-binary'){
           //each time a non-binary exists it will add one
            acc['non-binary'] += 1;
        }
        return acc;
    }, {
        male: 0,
        female: 0,
        'non-binary':0 
    })
    
}

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
