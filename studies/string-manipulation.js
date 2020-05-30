/*
* String manipulation
*
* 0. Strings can be maniulated in various ways by concatnation (+) operator or (+=) and string method.
*
*/ 

// 1. concat // 
const firstName = "Leslie";
const lastName = "Guan";
const fullName = firstName + " " + lastName;
console.log(fullName);
// prints => Leslie Guan 

// 2. trim method // 
const trimmed = '   nowhitespaces   ';
console.log(trimmed.trim()); 
// prints => nowhitespaces because it will trim off the whitespaces before and after

// 3. lower case & upper case//
// This method will change the case in a string to either lower or upper case 

let lowerCase = 'LESLIE';
console.log(lowerCase.toLowerCase());
// prints => leslie because it changed the whole string to lowercase 

let upperCase = 'leslie';
console.log(upperCase.toUpperCase());
// prints => LESLIE because it changed the whole string to uppercase

// 4. split method // 
// This will split a string into an array and separate it by it's own index 


var letters = 'abc';
console.log(letters.split());
// prints => ['abc']


var letters = 'abc';
console.log(letters.split(''));
// prints => ['a', 'b', 'b']

/*
* 5. indexOf method 
* This will return the position where it sees the value first in the string
* If the value is not in the string then it will return -1 
* case sensitive 
*/ 


var petName = 'Dulcee';
console.log(petName.indexOf('e'));
// prints => 4 index 
// because that is where the first e appears in the string

// 6. replace method //
// It will look for a specific value in a string and return a new string where that value is replaced

var replacement = 'I like coding!';
replacement = replacement.replace('like','love');
console.log(replacement);

 // print => I love coding!
 
 /* 
 * 7. slice method 
 *
 * The slice method will return the specific characters in an string, as a new string.
 * The first parameter wil start and end at the second parameter.
 * This will return the characters between the index of start and end. 
 * However, if it takes on one parameter it will return all the values from beginning to end.
 */
 
 var sliceItOff = 'icebaby';
 console.log(sliceItOff.slice(0,3)); // => 'ice'
 console.log(sliceItOff.slice(0)); // => 'icebaby'
 
 // 8. reassining with operators: += -= *= /= %/ //
 var school = 'home';
school += 'work';
console.log(school); // => 'homework'
// At the same time on one line, the variable is reassigned and concated
