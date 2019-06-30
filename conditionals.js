
// Write a block of code that checks and logs whether variables are equal or not.
let k = 4;
let w = 100;

if (k === w){
  console.log(k + ' and ' + w + ' are equal')
}else{
  console.log(k + ' and ' + w + ' are not equal')
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let x = 5
let y = 10

if (x < y){
  console.log("The greater number of " + x + " and " + y + " is " + y)
}else if(x > y){
  console.log("The greater number of " + x + " and " + y + " is " + x)
}else if (x = y){
  console.log("The numbers are equal")
} else {
  console.log("something is wrong")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let lang = 'russian'
if (lang === 'german') {
  console.log("Hallo Welt")
} else if (lang === 'italian'){
  console.log('Ciao mondo')
}else if (lang === 'spanish'){
  console.log('Hola Mundo')
}else {
  console.log('Hello World')
}

// 4. Do question 3 again but this time use a `switch` statement.
var language = 'spanish'
switch (language) {
  case 'german':
    console.log("Hallo Welt")
    break;
  case 'italian':
    console.log('Ciao mondo')
    break;
  case 'spanish':
    console.log('Hola Mundo')
    break;
    default:
    console.log('Hello World')
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
// A=100-90 B=89-80 C=79-73 D=72-66 F=under 65

let grade = 102

if (grade >= 90 && grade <= 105) {
  console.log('You got an A!')
}else if(grade >= 80 && grade <= 89){
  console.log('You got an B!')
}else if(grade >= 73 && grade <= 79){
  console.log('You got a C!')
}else if(grade >= 66 && grade <= 72){
  console.log('You got a D!')
}else{
  console.log('You got a F!')
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

let animalName = 'cat'
let numberOfAnimals = 0

if(numberOfAnimals > 1){
  console.log('you have ' +numberOfAnimals+ " " + animalName + 's')
}else if(numberOfAnimals === 1){
  console.log('you have ' +numberOfAnimals+ " " + animalName)
}else {
  console.log("you don't have any" +" "+ animalName + 's')
}

// 7. Write a block of code that logs whether a given number is even or odd.

let num1 = 11

if (num1 % 2 === 0 ) {
  console.log('the number ' + num1 + ' is an even number.')
}else{
  console.log('the number ' +num1 + ' is an odd number.')
}

// 8. Do question 7 again but use a ternary.

num1 % 2 === 0  ? console.log('the number ' + num1 + ' is an even number.') : console.log('the number ' + num1 + ' is an odd number.')

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let int = -4

if (int < 0 ){
  console.log('the number ' + int + ' is a negative number')
} else if(int === 0){
    console.log('the number ' + int + ' is zero')
  }else{
    console.log('the number ' + int + ' is positive')
  }
