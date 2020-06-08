//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 //Should take an object and return its values in an array
 
 //i: object
 // declare a variable and assign it to an array 
 const values = [];
 // implement a for in loop to iterate through the object 
 for (let key in object){
      // o: array of the obj's value 
     // push in the object's value into the array
     values.push(object[key]);
 }
 
// return the array
return values;
 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
 // Should take an object and return all its keys in a string each separated with a space


var str = '';
// implement a for in loop to iterate through the object 
for (let key in object){
 // reassign str to the keys along with spaces
 str += key + ' ';
}

// return the string and remove the extra spaces 
return str.trim();

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   // Should take an object and return all its string values 
    // in a string each separated with a space 
   
// declare and assign a variable to an empty string 
     var string = '';
     // implement a for loop to iterate through the object 
    for (var key in object){
     // check if the valye is a string 
    if (typeof object[key] === 'string'){
     // reassign string to the object's value with spaces 
         string += object[key] + ' ';
    }
    }
    // return the string by trimming the extra spaces 
return string.trim();
}

 
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: collection
function arrayOrObject(collect) {
 // check to see if the collect is an array
    if (Array.isArray(collect)){
     //o: ''
     // return array 
        return 'array';
        // now check if the collect is an object
    }else if (typeof collect=== 'object'){
     // return object in a string
        return 'object';
}
// don't forget to return
return;
}





//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
 // i: string 
 // implement a for loop to iterate through the string
 

return string[0].toUpperCase() + string.slice(1, string.length);
  // o: first letter capitalized then concat the rest using slice 
  

 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
 
   // reassign the string parameter to split into an array separated by spaces 
string = string.split(' ');

// iterate through the array to gain access 
for (var i = 0; i < string.length; i++){
 // at whatever index, change the first letter to upper and concat the rest 
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
}
// join it back to a string
return string.join(' ');
  
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!''
// i: object 

// create a variable that will access the object's name first index and turn it into uppercase
// concat it to the rest of the word 
let firstName = object.name[0].toUpperCase() + object.name.slice(1); 
// return it with the message
return 'Welcome' + ' ' + firstName + '!'; 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// Should take an object with a name 
//an a species and return '<Name> is a <Species>'

// create a variable that will access the object's name first index and turn it into uppercase
// concat it to the rest of the word by using slice 
let name = object.name[0].toUpperCase() + object.name.slice(1); 
// create a variable that will access the object's species first index and turn it into uppercase
// concat it to the rest of the word by using slice 
let species = object.species[0].toUpperCase() + object.species.slice(1);
// return 
return name + ' ' + 'is a' + ' ' + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 // : Should take an object, if this object has a noises array
 // return them as a string separated by a space, 
 // if there are no noises return 'there are no noises'

function maybeNoises(object) {
 // check to see if noises is undefined 
if (object.noises === undefined){
    return 'there are no noises';
    // if there is no noises, then return 'there are no noises '
}else if (!object.noises.length > 0){
    return 'there are no noises';
    // check if the noises is an array
}else if (Array.isArray(object.noises)){
 // seperate the noises by 
    return object.noises.join(' ');
}

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// implement a for loop to iterate through the string 
for (let i = 0; i < string.length; i++){
 // check if the string has that word by using the include method 
 if (string.includes(word)){
  return true; // true, if it does 
 }else {
  // return false if it doesnt 
  return false;
 }
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// Should take a name and an object and add the name to the object's friends array then return the object"

// i: name 
// i: object 
// accessing the friend's array and pushing in the name
object.friends.push(name);
return object;
// o: return obj 


}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and return true if <name> is a 
// friend of <object> 
// and false otherwise


// i: string with name
// i: object 
function isFriend(name, object) {
 // check to see if friends obj is undefined 
 if (object.friends === undefined){
  // return false, if it is 
     return false;
    // check if the object friend key has that name at a specific index if it does not equal -1 then output will be true 
 }else if (object.friends.indexOf(name) !== -1){
  // return true 
     return true;
 }else {
  // if none of the conditonal statements checks out return false 
    return false; 
 }
  
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function nonFriends (person, array) {
  // want to return an array with all the nonFriends
  const strangers = [];
  //want to check who the person is friends with
 const personObj = array.filter(element => element.name === person);
// An array with all the names  in the object
 const allNames = array.reduce((accu, curr) => {
   if(curr.name !== person)
   accu.push(curr.name);
   return accu
 },[]);
// if the name in allNames doesnt match with the person in the friendslist push that to strangers
for (let human of allNames){
    //console.log(human)
    if(!(personObj[0].friends.includes(human))) 
        strangers.push(human)
}
   // return non friends
 return strangers
}




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
// Should take an object, a key and a value.
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."
      
 // i: object, key, value

// accessing the key assign it to the value
  object[key] = value; 
  // return
   return object;   
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// i: object 
// i: array of strings 

// implement a for in loop to iterate through the object 
for (let key in object){
 // implement a for loop to iterate through the array
 for (let i = 0; i < array.length; i++){
 // check to see if the object property has the same element in the array
 if (key === array[i]){
  // if it is there then remove it by using delete method
  delete object[key];
 }
 }
}

// o: object with the properties removed that are listed in the array


}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// i: array


// create a new container to store the values 
const newArr = [];
// using forEach to iterate through the array 
array.forEach(value => {
 // check to see if the empty array inclues that value
 if (!newArr.includes(value)){
  // if it does that then it will push it in 
  newArr.push(value);
 }
})

return newArr;

//o : array of dups removed 
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}