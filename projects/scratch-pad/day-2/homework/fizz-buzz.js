// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // start: 1
    // end: 100
    // increment: i++
    // implement a loop 
for (let i = 1; i < 101; i++) {
    //checking for both multipes of three and five 
      if ( i % 3 === 0 && i % 5 === 0) {
          //o: FizzBuzz
        console.log("FizzBuzz");
        // checking for multipes of 5
      } else if (i % 5 === 0){
          // o: Buzz
        console.log('Buzz');  
        // checking for multipes of 3
      }else if (i % 3 === 0) {
          // o: Fizz
        console.log('Fizz');
      } else {
          // else just log the number
        console.log(i);
      }

}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}