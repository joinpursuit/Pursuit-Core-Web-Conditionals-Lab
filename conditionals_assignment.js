//For this exercises we are going to create a file called `conditionals.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.

//> *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with your answers. Lastly `git add` your changes, `git commit` and `git push`

//1. Write a block of code that checks and logs whether variables are equal or not.

let x = 4;
let y = 5;

if (x !== y){
  console.log(x + " is not equal to " + y);
}

//2. Write a block of code that logs which of two number variables is larger.
//  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//  * If the two numbers are equal, log: 'The numbers are equal.'

let a = 2;
let b = 3;


if (a > b){
  console.log( a + " is greater then " + b);
}else if (a < b){
  console.log( a + " is less then " + b);
}else{
  console.log( a + " is equal to " + b);
}

//3. Create a string variable with a language code (e.g. "english", "spanish", "german").
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
//It should default to logging English.

let language = "english"

if (language == "spanish"){
  console.log("hola mundo");
}else if (language == "french"){
  console.log("bonjour le monde");
}else {
  console.log("Hello World in if else statment");
}

//4. Do question 3 again but this time use a `switch` statement.

switch(language){
  case "spanish":
    console.log("hola mundo");
    break;

  case "frensh":
    console.log("bonjour le monde");
    break;

  default:
    console.log("Hello World in the switch statement");
    break;
}

//5. Create a variable numGrade that will contain a numeric grade (out of 100).
//Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 100;


if (numGrade == 100 ){
  console.log("You recieved an A+");
} else if (numGrade >= 90 && numGrade <= 99){
  console.log("You recieved an A");
}else if (numGrade >=80 && numGrade <= 89){
  console.log("You recieved an B");
} else if (numGrade >=71 && numGrade <= 79){
  console.log("You recieved an C");
}else if (numGrade >=65 && numGrade <=70){
  console.log("You recieved an D");
}else{
  console.log("You haven't recieved a passing grade");
}

//6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

//Use an if - else statement to log:

//  * the number

//  * either in single or plural form. Exp: "5 cats" or "1 dog".

//Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "Cat";
let numberOfAnimals = 1;

let goose = "goose"

if (numberOfAnimals > 1){
  goose = "geese";
}else{
  goose = "goose";
}

if (numberOfAnimals > 1){
  console.log("You have " + numberOfAnimals , animalName +"s" );
}else{
  console.log("You only have " + numberOfAnimals, animalName);
}

if (numberOfAnimals > 1){
  console.log("You have " + numberOfAnimals , goose );
}else{
  console.log("You only have " + numberOfAnimals, goose);
}



//7. Write a block of code that logs whether a given number is even or odd.

let evenNumber = 16;

if (evenNumber % 2 === 0){
  console.log(evenNumber, "is an even number");
}else{
  console.log(evenNumber, "is not an even number");
}

//8. Do question 7 again but use a ternary.

evenNumber % 2 === 0? console.log(evenNumber, "is an evenNumber") : console.log(evenNumber, " is not an even number");

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let newNumber = 10;

if (newNumber > 0 ){
  console.log(newNumber, "is a positive number");
}else if (newNumber < 0){
  console.log(newNumber, "is a negative number");
}else{
  console.log(newNumber, "is zero");
}
