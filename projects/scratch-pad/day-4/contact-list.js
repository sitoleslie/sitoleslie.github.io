// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// o: object with the key/value pairs id, nameFist, nameLast
const obj = {
 id: id,
 nameFirst : nameFirst, 
 nameLast : nameLast 
};
return obj; 

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     // use an array to hold the contacts. 
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // implement a function that will push the obj contacts in the array 
        addContact: function(obj){
            contacts.push(obj);
        },
        // i: string
        // o: object 
        // implement a function that will search for a string in the contact list 
       findContact: function(str){
           // implement a loop to iterate through the contact list 
           for(let i = 0; i < contacts.length; i++) 
           // check if the contact has the same first and last name 
            if(contacts[i].nameFirst + " " + contacts[i].nameLast === str)  
            // return that contact object
            return contacts[i]; 
       },
       removeContact: function(contactObj)
       {
           // implement a for loop to iterate through the contact array 
           for(let i = 0; i < contacts.length; i++){
               // create a variable and assign it the contact's index
                var current = contacts[i];
                // check to see if the contactObj and contact has the same id 
            if (contactObj.id == contacts[i].id){
                // if so, remove the contact's value
               contacts.splice(i,1);  
            }
           }
       },
       // i: no input here is needed 
       printAllContactNames: function(){
           // o: a string, so create a container to hold the values 
             var fullName = "";
             // iterate through the contact list 
            for(var i =0; i < contacts.length; i++){
              // reassign and add the first and last name into the empty str container 
              // c: needs a new line-break
                fullName += contacts[i].nameFirst + " " +contacts[i].nameLast +"\n";
            }
               //console.log(contactNames);
                 return fullName.slice(0,fullName.length-1);        
          
       }
       
    };
}


//  *          new-line character added after it!

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
