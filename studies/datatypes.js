/*
* Datatypes: 
*
* 1. Primitive/Simple & Complex are two different datatypes that are values store in variables.
*
* 2. Primitive/Simple types are numbers, strings, booleans, NaN, undefined, and null.
* 
* 3. Complex data types are functions, arrays, and objects because they can be any size and hold/collect values unlike simple datatypes 
*/

/*
* Primitive/Simple:
*
* 0. Numbers: numberical value, with/without decimal, postive or negative.
* Not written in strings. 
*/


var number = 2;
console.log(number); 
// => print out 2

/*
* Strings: 
*
* 0. Strings are simple data types that are unmutable with words as it's value wrapped in single or double quotes.
*
* 1. String has length property to see how many characters are in that string.
*
* 2. In a string, each character is accessed by bracket notation or charAt() which will give access to a specific character in the string.
* 0 is the start of the index and .length-1 is the end of the index.
* 
*/ 

// 1. declaring/initilizing a string //
var str = 'string';
console.log(str);
// print => 'string'

// 2. finding the length in a string //
console.log(str.length);
// prints => 6

// 3. accessing a character // 
console.log(str[0]); 
// => prints out s
console.log(str.charAt(2)); 
// => prints out r

/*
* Booleans: 
*
* 0. Booleans are true or false values.
*
* 1. Booleans are not strings!
*/

var x = 9; 
console.log(x === 9);
// prints => true

/*
* Undefined: 
*
* 0. A variable has been declared but has no value.
*/

var empty;
console.log(empty); 
// => prints out undefined

/*
* Null: 
*
* 0. Assignment value with no value. 
*
* 1. Null can be declared and assigned using the keyword null.
*
* 2. Can be used get rid of the variables assigned value by reassigning it to null
*/

var nothing = null;
console.log(nothing);
// prints => null


var school = {
    name:"OS", 
    student: true
};
school = null;  
// prints => null

/*
* NaN:
*
*0. Not a number 
*
*1. Using math calculation with a value that is not a number
*
*/ 

var times = 'number' * 2;
//prints => NaN

/* Complex data types:
*
* Array: 
*
* 0. This is a collection in JS. The values are grouped together inside an array literal [] (bracket notation) with the values seperated by a comma.
*
* 1. Hold or collect any data type values. 
*
* 2. Arrays have different methods: 
*.length to find the length of the array 
* push - add elements to the back 
* unshift -  are used to add elements to the beginning
* shift - remove elements from the beginning 
* pop - used to remove elements from the end
*
* 3. Arrays can be accessed by bracket notation with the first index starting at 0 and ending in .length-1
*
* 4. Elements in an array can change since it is mutable 
*/

// 1. declaring and assigning an array //
const arr = [1, true];
console.log(arr);
// prints => [1, true]

// 2. Manipulating: 
// push: 
arr.push('string');
// prints => [1, true, 'string'];

// unshift: 
arr.unshift({});
console.log(arr);
// prints => [{}, 1, true, 'string'];

// shift: 
arr.shift();
console.log(arr);
// prints => [1, true, 'string'];

// pop:
arr.pop();
console.log(arr);
// prints => [1, true]

// 3. accessing values //
console.log(arr[0]);
// prints => 1 because it is accessing the first element at 0 index

console.log(arr[arr.length-1]);
// prints => true because it is access the last element at the last index

// 4. Length //
console.log(arr.length);
// prints => 2 because there is only 2 elements in the array

// 5. changing an element in the array //
arr[0] = 2;
console.log(arr); // => [2, true]

/*
* Object: 
*
* 0. Object is a complex data that is a collection of any data types which contains key and it's values pair. 
* Unlike arrays, objects do not have indexes and are not ordered therefore it can't use the .length method.
*
* 1. Object are declared by an object literal of curly brackets/braces {}.
*
* 2. Key/value pairs are added inside the {} by using dot or bracket notation and separated by commas.
*
*/ 

// 1. declaring and assigning //
const obj = {};
console.log(obj);
// prints => {} (an object literal)

// 2. adding key/value pair using dot notation //

obj.name = 'Leslie';
console.log(obj);
// prints => {name: 'Leslie'}

// 3. accessing it's value using dot or backet notation //
console.log(obj.name);
// prints => Leslie
console.log(obj['name']);
// prints => Leslie


/*
* Functions:
*
* 0. Functions are complex data types, it is a resuable block of code that will perform a specific action multiples times.
* It will take an input as a parameter which will act as a place holder.
* It will process the input and return or print a new value
*
*/

// 1. declaring a function contains: parameter, function body, and return statement

function sub(number){
    return number - 1;
}

// don't forget to invoke the function
sub(2);
//prints => 1;

/*
* Infinity and -Infinity 
*
* 0. Infinity: a positive oo divided by 0 
*
* 1. -Infinity: a negative -oo divided by 0
*
*/


console.log(2/0); 
// prints => infinity

console.log(-2/0); 
// prints => -infinity

/*
* Copy by value vs Copy by reference
*
* 0. Primitive/Simple values are copy by value to a new variable because it is stored in the variable itself.
*
* 1. Complex data tpes are copy by reference because it is not stored in the variable itself but able to point to the reference of the array or object.
*
*/ 

// 1. Copy by value //
var x = 1; 

var y = 2; 
console.log(y);
// prints => 1 because the value that is in x gets copied to y

// 2. Copy by reference //
var array = [1,2,3];
var copyCat = array;

copyCat.shift();
console.log(array);
// prints => [2,3] because copyCat will have the same side effect on array