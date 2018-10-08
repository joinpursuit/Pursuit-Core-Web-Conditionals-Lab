# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.


let num = 2
let num2 = 2
if (num === num2) {
  console.log("variables are equal")
} else {
  console.log("try again")
}


2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'


  let x = 8;
  let y = 2;
  if (x < y) {
    console.log("the greater number is " + y)
  } else if (x > y) {
    console.log("the greater numver is " + x)
  } else {
    console.log("the numbers are equal")
  }

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let language = "creole";

if (language === "english"){
  console.log("Hello world")
} else if (language === "spanish"){
  console.log("Hola mundo")
} else if (language === "creole"){
  console.log("halo mond")
} else {
  console.log("we don't know that language")
}


4. Do question 3 again but this time use a `switch` statement.

let language = "russian";

switch (language) {
  case "spanish" :
   console.log("hola mundo")
    break;
  case "english":
   console.log("hello world")
    break;
  case "creole" :
   console.log("halo mond")
    break;
  default: console.log("we don't know that language")
}


5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 90

if (numGrade <= 55){
  console.log("F")
} else if (numGrade <= 70){
  console.log("D")
} else if (numGrade <= 85){
  console.log("C")
} else if (numGrade <= 90){
  console.log("B")
} else {
  console.log("A")
}


6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "dog";
let numOfAnl = 1;

if (animalName === "sheep" || animalName === "geese"){
  console.log(numOfAnl + " " + animalName)
} else if (numOfAnl === 1){
  console.log(numOfAnl + " " + animalName)
} else {
  console.log(numOfAnl + " " + animalName + "s")
}



7. Write a block of code that logs whether a given number is even or odd.

let num = 1

if (num%2 === 0) {
  console.log("even")
} else {
  console.log("odd")
}


8. Do question 7 again but use a ternary.

let num = 15

num%2 === 0 ? console.log("even") : console.log("odd");

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let num = 4

if (num < 0){
  console.log("your number is negative")
} else if (num > 0){
  console.log("your number is positive")
} else {
  console.log("your number is 0")
}
