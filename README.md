# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.
//
let num1 = 5
let num2 = 6
if (num1 === num2){
  console.log (true)
}
else (console.log (false))

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
//
let num1 = 12
let num2 = 3
if (num1 > num2){
  console.log ("The greater number of " + num1 + " "+ "and " + num2 + " "+ "is" +" " + num1)
}
else (console.log ("The great number of " + num1 + "and" + num2 + "is" + num2));


3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.
//

let helloWorld = "English"
let holaMunda = "Spanish"
let haloWorld = "German"

if ( holaMunda === haloWorld){
  console.log(holaMunda)
}
else if (haloWorld === holaMunda){
  console.log(haloWorld)
}
else (helloWorld === helloWorld)
    console.log(helloWorld)
//

4. Do question 3 again but this time use a `switch` statement.
//
let helloWorld = "English"
let holaMunda = "Spanish"
let haloWorld = "German"

switch (helloWorld){
  case "Spanish":
    console.log (holaWorld)
    break;
  case "German":
    console.log (haloWorld)
    break;
  case "English":
    console.log (helloWorld)
}
//

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
//
let numGrade = 55

if (numGrade >= 90){
  console.log ("A")
}
else if (numGrade >= 80 && numGrade < 90){
  console.log ("B")
}
else if (numGrade >= 70 && numGrade < 80){
  console.log ("C")
}
else if (numGrade >= 65 && numGrade < 70){
  console.log ("D")
}
else console.log ("F")
//

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//
let numOfAnimal = 10
let animalName = "goose"

if (animalName === "sheep"){
  console.log(numOfAnimal + " " + animalName)
}
else if (animalName === "goose" && numOfAnimal === 1){
  console.log (numOfAnimal + " " + animalName)
}
else if (animalName === "goose" && numOfAnimal > 1){
  console.log (numOfAnimal + " " + "geese")
}
//

7. Write a block of code that logs whether a given number is even or odd.
//
let num = 7

if ( num % 2 == 0) {
	console.log('Even Number');
}else{
	console.log('Odd Number');
}
//

8. Do question 7 again but use a ternary.
//
let num = 3

console.log ((num % 2 === 0) ? num + " " + "is even" : num + " " + "is odd")
//

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
//
let num = 0

if (num > 0){
  console.log (num + " " + "is positive")
}
else if (num < 0){
  console.log (num + " " + "is negative" )
}
else console.log (num + " is neutral")
//
