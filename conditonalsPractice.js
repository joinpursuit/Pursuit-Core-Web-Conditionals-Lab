//1. Write a block of code that checks and logs whether variables are equal or not.

let var1 = 4;
let var2 = 6;
if (var1 === var2) {
    console.log(var1 + " is equal to " + var2);
} else {
    console.log(var1 + " is not equal to " + var2);
}

/* 2. Write a block of code that logs which of two number variables is larger.
* Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10' y = 10): 'The greater number of 5 and 10 is 10.
 If the two numbers are equal, log: 'The numbers are equal.'
*/

let num3 = 7;
let num4 = 7;
if (num3 > num4) {
    console.log("the greater number of " + num3 + " and " + num4 + "is " + num3);
} else if (num3 === num4) {
    console.log(num3 + " and " + num4 + " are equal "); 
}
else {
    console.log("the greater number of " + num3 + " and " + num4 + " is " + num4);
}
