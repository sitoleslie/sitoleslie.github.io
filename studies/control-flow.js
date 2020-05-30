/*
* Control flow 
*
* 0. Condtional statements will control the flow by checking if the conditional statement is true, then it will result in excuting that block of code.
*
* 1. If the condition statement above is not met then, it will excute that code block. 
* 
* 2. Else if can be chained on, if there is more than one conditional statement that has to be checked.
* There can be unlimited about of else if's, but only one if because it will start a new control flow.
* It will excute the block of code for the first conditional statement that is met.
*
* 3. Else, is a default statement if all the conditonal statements being checked is false.
*
*/

/* 
* conditional statement steps: 
*
* 1. use the keyword 'if'
* 2. (condition) in paranthesis 
* 3. {} curly braces 
* 4. inside the curly braces will contain a block of code that will be excuted if it meets the conditional statement
* 5. chain on 'else if' after the closing } braces, if the condition above is not met, because it will check for another condition
* 6. else is a default statement chained on after else's } braces, if none of the conditions are met it will excute the block of code.
*/

// example of if-else if- else statement //
const iPhoneColor = "rose gold";
if(iPhoneColor === "black"){
     "matt black";
}else if(iPhoneColor === "gold"){
     "bright gold";
}else{ "There is no iPhone this color!"} 
// prints => There is no Iphone this color!

/*
* Switch
* 
* 0. A cleaner way and it is used to replace long if- else if-statements. 
*
* 1. It will look for one specific value because it switches and compare the expression's value to a case.
*
* 2. Break statement is needed to stop each case. 
*
* 3. Default if there are no cases that matches the expression's value. This is not always needed.
*/

// 1. Syntax //
/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}; 
*/ 


var job = 'teacher';
switch(job) {
  case 'teacher':
    console.log('This person\'s job is a teacher!');
    break;
  case 'truck drive':
   console.log('This person\'s job is a truck drivver!');
    break;
  default:
    console.log('This person is too good for a job!');
}; 
