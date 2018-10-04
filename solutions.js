# Conditional Exercises

//1
let num1 = 2
let num2 = 3

if (num1 === num2) {
  console.log("Equal!")
} else {
  console.log("Not equal!")
};

// //2 Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let x = 5;
let y = 10;

if (x === y) {
  console.log("Numbers are equal")
} else if (x > y) {
  console.log(x)
} else {
  console.log(y)
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let lan = "german"

if (lan === "english"){
  console.log("Hello World")
} else if (lan === "spanish"){
  console.log("Hola Mundo")
} else if (lan === "german"){
  console.log("Hallo Welt")
  } else {
    console.log( "We dont know that language")
  }

// 4. Do question 3 again but this time use a `switch` statement.
let lan = "english";

switch(lan) {
  case "spanish":
  console.log("Hola Mundo")
  break;
  case "german":
  console.log("Hallo Welt")
  break;
  default:
  console.log("Hello World")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let grade =90

if( grade <= 55 ) {
  console.log("F")
} else if (grade <= 65) {
  console.log("D")
} else if (grade <= 70) {
  console.log("C")
} else if (grade <= 80) {
  console.log("B")
} else {
  console.log("A")
}
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".

  let animalName = " dog"
  let numSize = 1

  if (numSize > 1) {
    console.log (numSize + animalName + "s")
  } else {
    console.log (numSize + animalName)
  }

// 7. Write a block of code that logs whether a given number is even or odd.
let num = 5
if (num%2 === 0) {
  console.log( "Even Number")
} else {
  console.log("Odd Number")
}

// 8. Do question 7 again but use a ternary.
num%2 === 0 ? console.log("even") : console.log("odd")

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let num = 0
if (num < 0) {
  console.log( "Negative")
} else if (num === 0) {
  console.log( "Equal" )
} else {
  console.log("Positive")
}
