// 1. Write a block of code that checks and logs whether variables are equal or not.
//

let myVariable = 1;
let yourVariable = 1;
if (myVariable === yourVariable){ 
  console.log('This variable is equal');
} else {
  console.log("This variable is not equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let firstNum = 23;
let secondNum = 2;

if (firstNum > secondNum){
  console.log("The greater number of " + firstNum + ' and ' + secondNum + ' is ' + firstNum)
} else if (firstNum < secondNum) {
  console.log('The greater number of ' + firstNum + ' and ' + secondNum + ' is ' + secondNum)
} else if (firstNum === secondNum){
  console.log('The numbers are equal')
} else {
  console.log('Try a different input')
}

//
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let myLanguage = "spanish";

if (myLanguage === 'english'){
  console.log('Hello, World')
 };
 if (myLanguage === 'spanish') {
  console.log('Hola, Mundo');
} else if (myLanguage === 'german'){
  console.log('Hallo, Welt');
} else{
  console.log('Hello, World');
}
//
// 4. Do question 3 again but this time use a `switch` statement.

let myLanguage2 = 'german';
switch (myLanguage2){
  case 'spanish':
    console.log('Hola,Mundo')
    break;
  case 'german':
    console.log('Hallo, Welt')
    break;
  default:
    console.log('Hello, World')
}
//
// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
//

let numGrade = 99

if (numGrade <= 100 && numGrade >= 90){
  console.log('You got an A')
} else if (numGrade < 90 && numGrade >= 80){
  console.log('You got a B')
} else if(numGrade < 80 && numGrade >= 70){
  console.log('You got a C')
} else if(numGrade < 70 && numGrade >= 65){
  console.log('You got a D')
} else if (numGrade < 65){
  console.log('You failed try again')
} else{
  console.log('Try a different grade')
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".

let animalName = 'dog'
let numberOfAnimals = 12

if (numberOfAnimals > 2){
  console.log(numberOfAnimals + ' ' + animalName + 's')
} else if (numberOfAnimals < 2){
  console.log(numberOfAnimals + ' ' + animalName)
}

//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//
// 7. Write a block of code that logs whether a given number is even or odd.
//

let randomNumber = 1

if (randomNumber % 2 === 0) {
  console.log("This is an even number")
} else if (randomNumber % 2 !== 0){
  console.log("This is an odd number")
} else{
  console.log('Is this a number?')
}

// 8. Do question 7 again but use a ternary.
//

let theNumber = 78;

(theNumber % 2 === 0) ?
  console.log('This is an even number') :
(theNumber % 2 !== 0) ?
  console.log('This is an odd number') :
  console.log('Is this a number?');
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let num = -23
if (num === 0) {
  console.log('The number is equal to 0')
} else if (num >= 0){
  console.log('This is a positive number')
} else if (num < 0) {
  console.log('This is a negative number')
} else {
  console.log('Machine does not recognize')
}
