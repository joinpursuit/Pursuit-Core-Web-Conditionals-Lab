// 1. Write a block of code that checks and logs whether variables are equal or not.
let myFirstVariable = 2;
let myNewVariable = "lunch";
if (myFirstVariable === myNewVariable) {
  console.log("These things are totally alike!");
} else {
  console.log("These are not alike actually.")
}
//
// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 12;
let num2 = 30;
if (num1 > num2) {
  console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
  } else if (num2 > num1) {
  console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
  console.log("The nuumbers are equal.")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let newLanguage = "Korean";
if (newLanguage === "Latin") {
  console.log("Salve, mundi.");
    } else if (newLanguage === "Japanese") {
  console.log("Konnichiwa, sekai.");
    } else if (newLanguage === "Portuguese") {
  console.log("Ola, mundo.");
    } else {
    console.log("Hello, world.")
  }

// 4. Do question 3 again but this time use a `switch` statement.
switch (newLanguage) {
  case "Latin":
    console.log("Salve, mundi.");
    break;
  case "Japanese":
    console.log("Konnichiwa, sekai.");
    break;
  case "Portuguese":
    console.log("Ola, mundo.");
    break;
  default:
    console.log("Hello, world.")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 86;
if (numGrade >= 90 && numGrade <= 100) {
  console.log("You got an 'A'.");
} else if (numGrade < 90 && numGrade >= 80) {
  console.log("You got a 'B'.");
} else if (numGrade < 80 && numGrade >= 70) {
  console.log("You got a 'C'.");
} else if (numGrade < 70 && numGrade >= 60) {
  console.log("You got a 'D'.");
} else if (numGrade < 60) {
  console.log("You got an 'F'. Study hard next time!");
} else {
  console.log("This number should be out of 100.");
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "alpaca";
let numberOfAnimals = 0;
if (numberOfAnimals != 1 && animalName === 'sheep') {
  console.log('There are ' + numberOfAnimals + ' ' + animalName + '.');
} else if (numberOfAnimals === 1 && animalName === 'sheep') {
  console.log('There is ' + numberOfAnimals + ' ' + animalName + '.');
} else if (numberOfAnimals != 1 && animalName != "sheep") {
  console.log('There are ' + numberOfAnimals + ' ' + animalName + 's.');
} else {
  console.log('There is ' + numberOfAnimals + ' ' + animalName + '.');
}

// 7. Write a block of code that logs whether a given number is even or odd.
let myNumber = 15;
if (myNumber % 2 === 0) {
  console.log("This number is even.");
} else {
  console.log("This number is odd.");
}

// 8. Do question 7 again but use a ternary.

myNumber % 2 === 0 ? console.log("This number is even.") : console.log("This number is odd.");

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let givenNumber = -12;
if (givenNumber === 0) {
  console.log("This number is equal to zero.");
} else if (givenNumber > 0) {
  console.log("This is a positive number.");
} else {
  console.log("This is a negative number.")
}
