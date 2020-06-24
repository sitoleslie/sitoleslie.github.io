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
* 4. Global scope : 
* Var can be reassigned and is bounded to the global and local scope.
* It can be declare in any scope but is function scoped.
* 
* 5.Local scope: written and stuck inside that function, can't be used outside of the function.
* Let and const are local scoped. 
*
* 6. Block scope: This is written inside loops, if, and switch statements. The variable  only exist in that block scope by using const ot let keyword.
* While let can reassigned and not const.
*
* 7. Parameters are function scoped.
*
* 8. If there is a variable in the global scope and a parameter with the same name,
* and inside of the function body, it will access the parameter's name. It will not look outside of the scope.
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


// 2. example of global scope and parameter with the same name //

var x = 1;
function example(x){
    return x;
}

example(2);
// returns => 2 
// because making a variable for a function that has x will return 2 since it is only exclusive to that function