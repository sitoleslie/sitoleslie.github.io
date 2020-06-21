
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
 let triangle = '';
 // implement a loop 
 for (let i = 1; i <= number; i++){
     // reassign the triangle and # at every iteration 
   triangle = triangle + '#';
   // log
   console.log(triangle);
 }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  // implement a for loop to gain access to the numbers
  for (let i = 1; i <= 15; i++){
      // numbers divisible by 3 & 5  
      
      if(i % 3 === 0 && i % 5 === 0){
          // print 'FizzBuzz'
          console.log('fizzbuzz');
           // numbers divisible by 3
      } else if (i % 3 === 0){
          // print 'Fizz'
          console.log('fizz');
            // numbers divisible by 5,
      } else if (i % 5 === 0){
      // print Buzz 
          console.log('buzz');
      } else {
          // print the number
          console.log(i);
      }
    
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {

 var board = "";
//for loop through the rows
for (var row = 0; row < num; row++) {
//nested for loop through the columns
 for (var col = 0; col < num; col++) {
   //if row is even and col is odd add #
  if(row % 2 === 0 && col % 2 !== 0){
    board += "#";
   //else if row is odd and col is odd add " "
  } else if(row % 2 !== 0 && col % 2 !== 0){
    board += " ";
   //else if row is even and col is even add " "
  } else if(row % 2 === 0 && col % 2 === 0){
    board += " ";
   //else if row is odd and col is even add #
  }else {board += "#"}
}
board += "\n";
}
console.log(board);
}







////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
