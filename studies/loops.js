/*
* Loops
*
* 0. Loops are an action that will allow us to execute a block of code until it needs to stop. 
* It is usesful on complex data types like arrays and objects. 
* This is useful because it is used to pull out the collection's values one at a time.
*
* 1. For loop - this loop is used to iterate through arrays and strings. 
* Three statements: start, stop condition, and a increment which is seprated by semicolon ;.
* Looping backwards: It will iterate through the array or string backwards starting at the last index and ending at the first by decrementing.
*
* 2. For in loop - this loop is used to iterate through objects.
*
* 3. While loop - will excute a block of code as long as the condition is true. 
*
*/

// 1. For loop //
const arr = [1,2,3]
for (var i = 0; i <= 3 ; i++ ){
console.log(arr[i])
}
//prints => 1 2 3 
// This loop will start at 0, stop when the index reaches it's limit of 3 because it will be less or equal to 3, and the increment will add to the index.

// 2. Looping backwards // 
const backwards = [0, 1,2,3]
for (var i = backwards.length -1 ; i >= 0 ; i-- ){
console.log(backwards[i])
}

// 3. For in loop //
const person = {
    name: "Les",
    age: 24,
    student: true
};

for(let key in person){
    console.log(person[key]); // prints => "Les" 24 true
    console.log(key);// prints => name, age , student
}

// 4. While loop //

var count = 1;
while(count < 3){
console.log(count);
    count ++;
} 
// => print out to 1,2,3

// 5. reverse while loop //

var reverse = 3;
while(reverse > -1){
console.log(reverse);
  reverse --; 
}
    // => print out 3,2,1,0
