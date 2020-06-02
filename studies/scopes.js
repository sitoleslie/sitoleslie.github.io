/*
* Scopes
*
* 0. Scopes can see variables, objects, and funtion. 
*
* 1. Variables will get hoisted to the top of their scope.
* 
* 2. Parents do not have access to their child's scope. However, children do have access to their parent's scope.
* The inverse is NOT true.
*
* 3. Glabal, local, and block are the three types of scopes.
*
* 4. Global scope : Accessed anywhere but inside the function or block.
*
* 5.Local scope: written and stuck inside that function, can't be used outside of the function.
*
* 6. Block scope: This is written inside loops, if, and switch statements. The variable is only exist in that block scope by using const ot let keyword.
* 
* 7. Parameters are function scoped.
*/ 

// 1. Scope //
var oldScope = 'Parent';
function newScope(){
    var oldScope = 'child';
    console.log(oldScope);
}
newScope();
// prints => 'child'
console.log(oldScope); 
// print => 'Parent'
// because var oldScope could not be accessed inside newScope function


/*
* Closures
*
* 0. A closure is a function that has access of the parent scope's variable even after it is returned.
*
* 1. Not all function are closures and only functions can create closures.
*
*/

var petName = 'Dulce'

function closure(){
     console.log(petName);
 }
 closure(); 
 // prints => "Dulce"
 //the function acceessed the global variable and used it inside the function
