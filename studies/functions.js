/*
* Functions 
* 
* 0. Function are complex data types. It is a reusable block of code that will excute that code anytime and as many times as we want.
*
* 1. The two phases to using functions: First we must start at the declaration phase. Next we can execute a function by calling it. 
*
* 2. Function parameters are inputs that act like place holders that will be used later at call time.  
* Arguments are values that are inputs when the function is called. 
*
* 3. Syntax:
    function name(parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}
* 
* 4. Function can be assign to a variable because function can be pass around. 
*
* 5. Functions can optionally take inputs, and optionally return a single value.
* The inputs are based on none - as many parametes needed in the function. The output is specify by the return. 
* If the function is not being returned, then the value(s) will stay inside of the function.
*
* ** Note: Function does not have to any parameters, or return statements. 
*/ 

// 1. assigning a function to a variable // 

var add = function(favNumber){
    return favNumber + 3;
};
console.log(add(7)); 
//prints => 10; 

// 2. A function with no input/output //

function nothing(){
  // no input/output is needed
}
nothing(); 
// since there is no output it will not return anything.

// 3. Function // 
function sub(number){
    return number - 0;
}
console.log(sub(1)); 
// prints => 1 

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
