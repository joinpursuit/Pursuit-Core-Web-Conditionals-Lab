// 1. Write a block of code that checks and logs whether variables are equal or not.
let x=3
let y=5
if (x === y) {
  console.log('The number ' + x + ' is equal to the number ' + y)
} else {
  console.log('The number ' + x + ' is not equal to the number ' + y)
};
// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let num1 = 15
let num2 = 20
if (num1 > num2){
  console.log('The number ' + num1 + ' is greater than ' + num2);
} else if (num1 < num2) {
  console.log('The number ' + num2 + ' is greater than ' + num1);
} else {
  console.log('The numbers are equal.');
};
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let language = 'spanish'

 if (language === 'german'){
   console.log('Hallo Welt');
} else if (language === 'french'){
   console.log('Bonjour le monde');
} else if (language === 'spanish'){
   console.log('Hola Mundo');
 } else {
   console.log('Hello World');
};

// 4. Do question 3 again but this time use a `switch` statement.
let language2 = 'french'

switch (language2){
  case 'german' :
    console.log('Hallo Welt');
    break;
  case 'french' :
    console.log('Bonjour le monde');
    break;
  case 'spanish' :
    console.log('Hola Mundo');
    break;
  default:
    console.log('Hello, World')
};

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 65
if (numGrade >= 90){
  console.log('You got an A.');
} else if (numGrade >=80 && numGrade <=89){
  console.log('You got a B.');
} else if (numGrade >= 70 && numGrade <=79){
  console.log('You got a C.');
} else if (numGrade >=60 && numGrade <=69){
  console.log('You got a D.');
} else {
  console.log('You got an F.')
};

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animalName = 'dog'
let numberOfAnimals = 0

if (numberOfAnimals === 1){
  console.log('You have one ' + animalName)
} else if (numberOfAnimals > 1) {
  console.log('You have ' + numberOfAnimals + ' ' + animalName + 's.')
} else {
   console.log('Go get a pet!')
};

// 7. Write a block of code that logs whether a given number is even or odd.
let numInput = 25

if (numInput % 2 === 0){
  console.log(numInput + ' is even.')
} else if (numInput % 2 === 1) {
  console.log(numInput + ' is odd.')
} else {
  console.log('That is not a number.')
};
// 8. Do question 7 again but use a ternary.
numInput = 9
numInput % 2 === 0 ? console.log(numInput + ' is even.') : console.log(numInput + ' is odd.')
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let finalNumber = NaN
if (finalNumber > 0) {
  console.log('The number ' + finalNumber + ' is positive.')
} else if (finalNumber < 0) {
  console.log('The number ' + finalNumber + ' is negative.')
} else if (finalNumber === 0) {
  console.log('The number ' + finalNumber + ' is equal to zero.')
} else {
  console.log('That is not a number.')
};
