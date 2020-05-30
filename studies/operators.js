/*
* Operators 
*
* 0. Operators take action on values. 
* Each operator type has a certain action to perform from assignment, arthmetic, logical, comparison, unary, and ternary.
*
*/

/*
* Assignment operators 
* This operator is very important and is necessary becauuse it is used to assign values to variables.
* Which are =, +=, -=, *=, /= , %=
*/

var y = 3; 
console.log(y);
//prints => 3 
// because the variable y is being assigned to 3

y += 4; 
console.log(y);
//prints => 7
// += is adding 4 to the value stored in y resulting in 7

y -= 2; 
console.log(y);
//prints => 5
// -= operator is subtracting 2 from the value stored in y

y *= 2; 
console.log(y);
//prints => 10
// *= operator is multiplying the value stored in y by 2

y /= 3; 
console.log(y);
//prints => 3.33
// /= operator is dividing 3 by the value stored in y

y %= 3;
console.log(y);
//prints => 0.33
// %= operator is getting the value after division

/*
* Arithemic Operators 
*
* An operator that has anything to do with math.
* + , - , * , / , % , ++ , --
*/ 


const add = 3 + 3;
console.log(add);
// prints => 6
// the add is assigned to three + three 

const sub = 1 - 0;
console.log(sub);
// print => 1
//the - operator will sub 1 from 0

/*
* Comparison operators 
* 0. This operators compare values aganist each other that will result in a boolean value.
*
* 1. Binary Operators:
* >	greater than	
* <	less than	
* >=	greater than or equal to	
* <=	less than or equal to	
*
* 2. Strict Comparison 
* There is loosely == that does not take account of data type and only value.
* !=	not equal
* Strict === takes in account of both. 
* !==	not equal value 
*/

// 1. Strict comparison //
console.log('1' === 1);
// prints => false
// because it is comparing the data types 

// 2. Loose comparison //
console.log('1' == 1);
// prints => true
// because the values are the same

/*
* Logicial operators 
*
* 0. In condition statements, logicial operators are used to compare two conditions that will result in a boolean value.
* 
* && AND operator that results in both conditions being true  
* || OR operator that results in only one condition being true 
* ! BANG operator this will flip the value's trutiness 
*/

// 1. && //
console.log(2 < 3 && 1 > -1);
// prints => true, because both conditions are true 

// 2. || //
console.log(2 < 3 || 1 < -1);
// prints => true, because one of the conditions are true 

// 3. ! // 
console.log(!true);
// prints => false, because it flips the conditions

/*
* Unary Operators 
*
* 0. Unary operators are typeof, -, ! these will perform an action.
*
*/

// 1. typeof //
// return or prints the value's datatype 

const str = 'string';
console.log(str);
// prints => string 

// 2. ! // 
!false; 
// prints => true because it will return the opposite of the value 

// 3. - //
 var pos = 2;
pos = -pos; 
console.log(pos); 
// prints -2 because it the (-) will turn the value negative

/*
* Ternary Operators 
*
* 0. This is a shorter and single line if/ else statement 
* starts with a condtional statement with ? then two arguments split with : 
* if the condition is true, then the argument before : is ran, if false then it will run after :
* condition statement ? true argument : false argument 
*/ 

const age = 13; 
age >= 18 ? console.log('adult') : console.log('teen');
// prints => teen because the condition is false and prinited the argument on the right after the :
