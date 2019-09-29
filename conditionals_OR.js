/*
1. Write a block of code that checks and logs whether variables are equal or not.
*/

let num = 5
if(num === 2){
  console.log("It does equal to "+ num);
}
else{
  console.log("It does not equal");
}

/*
2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
  */

let x = 11;
let y = 15;

if ( x < y ){
  console.log("The greatest number of " + x + " and " + y + " is " + y);
}
else if  (x > y ) {
  console.log("The smallest number is " + y);
}
else if (y === x ){
  console.log("The numbers are equal");

}
/*

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.
*/

let language = "French";
if (language === "Spanish"){
  console.log("Hola Mundo");
}
else if (language ==="German"){
  console.log("Hallo Welt");
}
else if (language ==="French"){
  console.log("Bonjour le monde");
}
else{
  console.log("Hello World");
}


/*
4. Do question 3 again but this time use a `switch` statement.
*/
let mylango = "English"
switch(mylango){
case "german":
console.log("Hallo Welt");
break;
case "french":
console.log("Bonjour le monde");
break;
case "spanish":
console.log("Hola Mundo");
break;
default:
console.log("Hello World");

}

/*
5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
*/

let numGrade = 91;
if(numGrade >= 90){
  console.log("A");
}
else if (numGrade >= 80){
  console.log("B");
}
else if ( numGrade >= 70){
console.log("C");
}
else if ( numGrade >= 65){
  console.log("D");
}
else {
  console.log("F");
}

/*
6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
*/
let animalName = "Cat"
let numberOfAnimals = "9"
if (numberOfAnimals > 1){
  console.log(numberOfAnimals +" "+ animalName + "s");
}
else {
  console.log(numberOfAnimals + animalName);
}

/*
7. . Write a block of code that logs whether a given number is even or odd.
*/

num = 5
if(num % 2 === 0){
    console.log("even");
    
}
else console.log("odd");

//8. Do question 7 again but use a ternary.
num % 2 === 0? console.log("even") : console.log("odd");

/*
9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
*/

let number = 0
if (number > 0){
  console.log("Positive");
}
else if (number < 0){
  console.log("negative");
}
else {
  console.log("Equal to 0");
}
