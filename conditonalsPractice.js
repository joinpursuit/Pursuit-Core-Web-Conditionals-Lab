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

/* 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
It should default to logging English.*/

let str= "english";
if (str === "spanish"){
   console.log("Hola, mundo");
} else if (str === "russian"){
   console.log("Привет, мир");
} else if (str === "japanese"){
   console.log("こんにちは世界");
} else {
   console.log("Hello wolrd");
}

/*4. Do question 3 again but this time use a `switch` statement.*/




/*5. Create a variable numGrade that will contain a numeric grade (out of 100). 
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".*/

let numGrade = 74;
if (numGrade >= 0 && numGrade <= 60) {
    console.log("You're getting an F");
} else if (numGrade <= 65) {
    console.log("You're getting a D");
} else if (numGrade <= 70) {
    console.log("You're getting a C");
} else if (numGrade <= 80) {
    console.log("You're getting a B");
} else if (numGrade > 80 && numGrade<=100) {
    console.log("You're getting an A");
} else {
    console.log("You're making up grades");
}



