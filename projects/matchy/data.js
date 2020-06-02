/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

// ## Step 1 - Object Creation
//  5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
//  6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
//  7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
//  8. [ ] It should be something like: 
// ~~~JS
// { species: 'duck', name: 'Jennifer', noises: [] }
// ~~~
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare a var and assigned it to an object literal
var animal = {};
// add key named species 
// assign it to dog 
// c: use dot notation
animal.species = 'dog';
// using bracket notation add a key named name
// assign it to pet's name
animal['name'] = 'Dulce';
// add key named noises
// assign it to an array literal
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a variable and assign it to an array literal 
var noises = [];
// usebracket notation to add the first element 
noises[0] = 'barking';
// use push to add another element 
noises.push('woof-woof');
// use unshift to add another element to the beginning
noises.unshift('whining');
// use [] to add another element to the END
noises[noises.length] = 'yawning';
// print the array's length 
console.log(noises.length);
// print the last element of the array
// c: no hard coding 
console.log(noises[noises.length-1]);
// print the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// c: use bracket notation to gain access to the property noises 
// assign it to the noises array
animal['noises'] = noises;
// use push to add in another element in the array
noises.push('quite');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * console.log(object.key);
 * console.log(object['key']);
 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * bracket notation by access each element by it's index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a var and assign it to an empty array
var animals = [];
// use push to add the animal obj into animals array
animals.push(animal);
// print the animals array
console.log(animals);

// declare a variable and assign it to the data listed 
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
};
// push the duck obj to the animals array
animals.push(duck);
// print the animals array
console.log(animals);

// declare a variable and assign it to an {}
var fish = { 
    // add key/value pairs
    species: 'fish', 
    name: 'dory', 
    noises: ['finding', 'nemo', 'huh', '??']
    
};

// declare a variable and assign it to an {}
var cat = { 
    // add key/value pairs
    species: 'cat', 
    name: 'Kiwi', 
    noises: ['m', 'o', 'e', 'w']
    
};

// push in the fish & cat obj into the array
animals.push(fish,cat);
// print the animals array
console.log(animals);
// print the animal array length
console.log(animals[animals.length]);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// declare a variable and assign it to an array
// this data type will act as an container to hold the values
// looking through the prompts the required methods will work well with this data type

var friends = [];

// declare a function 
// i: our animals ARRAY
function getRandom(animals){
    // implement a for loop to iterate though the animals array
    for (let i = 0; i < animals.length; i++){
    // o: return a random index NUMBER
    return Math.random(i);
    // c: Math.random
}
}

// invoke the function to get the random animal 
getRandom(animals);

// console.log friends
console.log(friends);

// add the key friends and assign it to the friends array
animal['friends'] = friends; 

// log the animal array
console.log(animal);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}