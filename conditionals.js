// 1. Write a block of code that checks and logs whether variables are equal or not.

let x = 45
let y = 55

if (x === y){
  console.log("These numbers are equal");
} else {
  console.log("These numbers are not equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

  let a = 20
  let b = 30

  if (a < b){
    console.log("The greater number of " + a + " and " + b + " is " + b +".");
  } else {
    console.log("The numbers are equal.");
  }

  // 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
  // Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
  // It should default to logging English.

let english = "Hello World!"
let spanish = "Hola Mundo!"
let german = "Hallo Welt"
let language = english

if (language === english) {
  console.log(english);
} else if (language === spanish){
  console.log(spanish);
}else {
  console.log(language === german)
}
//
// 4. Do question 3 again but this time use a `switch` statement.

let language = "english"
switch (language) {
  case "english" :
      console.log("Hello World");
      break;
    case "spanish" :
      console.log("Hola Mundo");
      break;
    case "german" :
      console.log("Hallo Welt");
      break;
  default:
      console.log("I don't knoqw this language");
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

numGrade = 75

if (numGrade >= 90){
  console.log("you get an A");
} else if (numGrade >= 80){
    console.log("you get a B");
} else if (numGrade >= 70) {
    console.log("you get a C");
} else if (numGrade >= 60) {
    console.log("you get a D");
} else {
    console.log("you get an F");
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//   * the number
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

animalName = "dog"
numberOfAnimals = 1

if (numberOfAnimals > 1){
  console.log("You have lots of " + animalName + "s.");
}else {
  console.log("You have one dog.");
}


// 7. Write a block of code that logs whether a given number is even or odd.


let number = 6

if (number % 2 === 1){
  console.log("This is an odd number");
} else {
  console.log("This is and even number");
}

// 8. Do question 7 again but use a ternary.

let num = 4

num % 2 === 1? console.log("odd") : console.log("even");

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

checkNum = 4

if (checkNum === 0){
  console.log("this is zero");
} else if (checkNum < 0) {
  console.log("this is a negative number");
} else {
  console.log("this is a positive number");
}
