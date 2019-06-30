// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description
//  of the exercise as a comment into the file and underneath write your JavaScript code.
//
// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with
//     your answers. Lastly `git add` your changes, `git commit` and `git push`
//
// 1. Write a block of code that checks and logs whether variables are equal or not.

let var1;
let var2;

var1 = 5;
var2 = 10;

if (var1 === var2) {
  console.log('The variables ' + var1 + ' and ' + var2 + ' are equal.');
} else {
  console.log('The variables ' + var1 + ' and ' + var2 + ' are not equal.');
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10):
//    'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let x;
let y;

x = 5;
y = 10;

if (x > y) {
  console.log('The greater number of ' + x + ' and ' + y + ' is ' + x);
} else if (y > x) {
  console.log('The greater number of ' + x + ' and ' + y + ' is ' + y);
} else {
  console.log('The numbers ' + x + ' and ' + y + ' are equal');
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language,
//  for at least 3 languages.
// It should default to logging English.

let language;

language = 'german';

if (language === 'spanish') {
  console.log('Hola Mundo.');
} else if (language === 'german') {
  console.log('Hallo Welt.');
} else if (language === 'french') {
  console.log('Bonjour le Monde.');
} else {
  console.log('Hello, World.');
}

// 4. Do question 3 again but this time use a `switch` statement.

let idioma;

idioma = 'french';

switch (idioma) {
  case 'spanish':
    console.log('Hola Mundo.');
    break;
  case 'german':
    console.log('Hallo Welt.');
    break;
  case 'french':
    console.log('Bonjour le Monde.');
    break;
  default:
    console.log('Hello, World.');
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade,
// either "A", "B", "C", "D", or "F".

let numGrade;

numGrade = 91;

//numGrade = 81;
//numGrade = 71;
//numGrade = 61;
//numGrade = 51;

if (numGrade >= 90 && numGrade <= 100) {
  console.log('You get an A!');
} else if (numGrade >= 80) {
  console.log('You get a B.');
} else if (numGrade >= 70) {
  console.log('You get a C.');
} else if (numGrade >= 60) {
  console.log('You get a D.');
} else if (numGrade >= 0) {
  console.log('You\'ve failed you get an F.');
} else {
  console.log('Invalid grade.');
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

let animalName;
let numberOfAnimals;

animalName = 'goose';
numberOfAnimals = 5;

if (numberOfAnimals === 1) {
  console.log(numberOfAnimals + ' ' + animalName);
} else if (numberOfAnimals > 1) {
  switch (animalName) {
    case 'sheep':
      console.log(numberOfAnimals + ' ' + animalName);
      break;
    case 'goose':
      console.log(numberOfAnimals + ' ' + 'geese');
      break;
    case 'deer':
      console.log(numberOfAnimals + ' ' + animalName);
      break;
    case 'fish':
      console.log(numberOfAnimals + ' ' + 'fish');
      break;
    case 'elk':
      console.log(numberOfAnimals + ' ' + animalName);
      break;
    case 'fox':
      console.log(numberOfAnimals + ' ' + 'foxes');
      break;
    default:
      console.log(numberOfAnimals + ' ' + animalName + 's');
  }
}

// 7. Write a block of code that logs whether a given number is even or odd.

let num;

num = 10.5;

switch (num % 2) {
  case 0:
    console.log(num + ' is even');
    break;
  case 1:
    console.log(num + ' is odd');
    break;
  default:
    console.log(num + ' is not an integer');
}

// 8. Do question 7 again but use a ternary.

num % 2 === 1 ? console.log(num + ' is odd') : console.log(num + ' is even');

// !!(num % 2) ? console.log(num + ' is odd') : console.log(num + ' is even');
//!(num % 2) ? console.log(num + ' is even') : console.log(num + ' is odd');

// 9. Write a block of code that checks and logs whether a given number is
//   positive, negative, or equal to 0.

let num1;

num1 = 9;

if (num1 > 0) {
  console.log(num1 + ' is positive');
} else if (num1 < 0) {
  console.log(num1 + ' is negative');
} else {
  console.log(num1 + ' is zero');
}
