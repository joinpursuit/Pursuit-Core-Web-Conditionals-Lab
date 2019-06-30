// 1. Write a block of code that checks and logs whether variables are equal or not.
let a = 1
let b = 2
if (a === b) {
  console.log("they are equal")
} else {
  console.log("they are not equal")
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let x = 1
let y = 2
if (x > y) {
  console.log("The greater number of " + x + " and " + y + " is " + x)
} else if (x < y) {
  console.log("The greater number of " + x + " and " + y + " is " + y)
} else {
  console.log("The numbers are equal")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let language = 'portuguese'
if (language === 'spanish') {
  console.log("Hola, Mundo")
} else if (language === 'portuguese') {
  console.log("Oi, Mondo")
} else if (language === 'french') {
  console.log('Bonjour, Monde')
} else {
  console.log("Hello, World")
}

// 4. Do question 3 again but this time use a `switch` statement.
switch (language) {
  case 'spanish' :
    console.log("Hola, Mundo")
    break
  case 'portuguese' :
    console.log("Oi, Mondo")
    break
  case 'french' :
    console.log("Bonjour, Monde")
    break
  default :
    console.log("Hello, World")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 75
if (numGrade >= 80) {
  console.log('A')
} else if (numGrade >= 60) {
  console.log('B')
} else if (numGrade >= 40) {
  console.log('C')
} else if (numGrade >= 20) {
  console.log('D')
} else {
  console.log('F')
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animalName = 'goose'
let numberofAnimals = 2
if (animalName === 'sheep' && numberofAnimals != 1) {
  console.log(numberofAnimals + ' sheep')
} else if (animalName === 'goose' && numberofAnimals != 1) {
  console.log(numberofAnimals + ' geese')
} else if (numberofAnimals != 1) {
  console.log(numberofAnimals + ' ' + animalName + 's')
} else {
  console.log(numberofAnimals + ' ' + animalName)
}

// 7. Write a block of code that logs whether a given number is even or odd.
let number = -8
if (number % 2 === 0){
  console.log('the number is even')
} else {
  console.log('the number is odd')
}

// 8. Do question 7 again but use a ternary.
number % 2 === 0 ? console.log('the number is even') : console.log('the number is odd')

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
if (number > 0) {
  console.log("the number is positive")
} else if (number < 0) {
  console.log("the number is negative")
} else if (number = 0) {
  console.log("the number is 0")
}
