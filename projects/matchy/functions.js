/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////



// i: array of animals
// i : string of animal name 
var search = (animalsArr, name) => {
  
     // implement a for loop to iterate through the animals array 
       for (let i = 0; i < animalsArr.length; i++){
            // check to see if the animalsArr has the name
        if (animalsArr[i].name === name ){
             //o : animal's Obj 
    //          // return it 
            return animalsArr[i];
        }
    }
    // else return null
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// i: animals ARRAY, name STRING, replace 
var replace = (animalsArr, name, replacementObj) => {
    // implement a loop to iterate through the animals array 
    for (let i = 0; i < animalsArr.length; i++){
        // check to see if the animalsArr has that name 
        if(animalsArr[i].name === name){
            // replace it's entire object with the replacement obj by reassigning it 
            animalsArr[i] = replacementObj;
        }
    }
};



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var remove = (animalsArr, name) => {
      // implement a loop to iterate through the animals array 
    for (let i = 0; i < animalsArr.length; i++){
        // check to see if the animalsArr has that name 
        if(animalsArr[i].name === name){
         // remove that name from the animals array 
         // using splice to remove that index
         animalsArr.splice(i, 1); 
        }
    }
    
    
    
};


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//   - Make sure it works.

var add = (animalsArr, animalObj) => {

        // condition statements:
        // check to see if the animal obj has a length for the key values of name & species 
        if((animalObj.name.length&& animalObj.species.length)){
            //implement a for loop to iterate through the animals array
            for (let i = 0; i < animalsArr.length; i++){
                // check to see if the animal obj and animal array has the same name value 
                if(animalObj.name === animalsArr[i].name){
          return; // to close out 
        }
        }
        // push in the animalObj into the array
         animalsArr.push(animalObj);
    }
    };




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
