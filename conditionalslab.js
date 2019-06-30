// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description
// of the exercise as a comment into the file and underneath write your JavaScript code.
//
// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js`
// with your answers. Lastly `git add` your changes, `git commit` and `git push`
//
// 1. Write a block of code that checks and logs whether variables are equal or not.

let birthYear = 2019;
if (birthYear <= 1995) {
  console.log('We can be friends');
} else
console.log('You\'re a little too young');

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers
// x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
//

let x = 2009267;
let y = 487527 - 570;
if (x >= y) {
  console.log('The greater number of 2009267 and 487527-570 is 487527-570');
} else
console.log('The greater number of 2009267 and 487527-570 is 2009267 ');

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World"
// in the given language, for at least 3 languages.
// It should default to logging English.
//

let language = 'mandarin';
if (language === 'french') {
  console.log('Bonjour le monde');
} else if (language === 'spanish') {
  console.log('Hola Mundo');
} else if (language === 'russian') {
  console.log('Привет, мир');
} else if (language === 'portuguese') {
  console.log('Olá Mundo');
} else {
  console.log('Hello World');
}

//
// // 4. Do question 3 again but this time use a `switch` statement.
//
let lang = 'mandarin';
switch (lang) {
  case 'french':
    console.log('Bonjour le monde');
  break;
  case 'spanish':
    console.log('Hola Mundo');
  break;
  case 'russian':
    console.log('Привет, мир');
  break;
  case 'portuguese':
    console.log('Olá Mundo');
  default:
    console.log('Hello World');
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding
// letter grade, either "A", "B", "C", "D", or "F".
//
let numGrade = 97.3;
if (90 <= numGrade <= 100 && numGrade  >= 90) {
  console.log('A');
} else if (numGrade <= 90 && numGrade >= 80) {
  console.log('B');
} else if (numGrade <= 80 && numGrade >= 70) {
  console.log('C');
}else if (numGrade <= 70 && numGrade >= 60) {
  console.log('D');
}else if (numGrade < 60) {
  console.log('F');
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
//
let animalName = 'cat';
let numberOfAnimals = 20;
if (numberOfAnimals === 1) {
  console.log(numberOfAnimals + ' ' + animalName);
} else if (numberOfAnimals > 1) {
  console.log(numberOfAnimals + ' ' + animalName + 's');
}

// 7. Write a block of code that logs whether a given number is even or odd.
//

let num = 57;
if (num % 2 === 0) {
  console.log('this is an even number');
} else if (num % 2 === 1) {
  console.log('this is an odd number');
}else {
  console.log('this is not an integer');
}

// 8. Do question 7 again but use a ternary.

let number = 586;
number % 2 === 0 ? console.log('this is an even number') : console.log('this is an odd number');

// 9. Write a block of code that checks and logs whether
// a given number is positive, negative, or equal to 0.

let numb = 0.567;
if (numb > 0) {
  console.log('this is a positive number');
} else if (numb < 0) {
  console.log('this is a negative number');
} else {
  console.log('this is zero O ');
}
