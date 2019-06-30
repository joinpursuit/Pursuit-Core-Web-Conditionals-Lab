// # Conditional Exercises

// For this exercises we are going to create a file called `conditionals.js`.
// Copy the description of the exercise as a comment into the file and
// underneath write your JavaScript code.

// > *Note*: Remember to fork this repo, clone your copy, modify
// `conditionals.js` with your answers. Lastly `git add` your changes,
// `git commit` and `git push`

// 1. Write a block of code that checks and logs whether variables are
//    equal or not.

let varA = 4;
let varB = 7;
if (varA === varB) {
  console.log('These variables are equal.');
} else {
  console.log('The variables are not equal.');
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers
//     x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 25;
let num2 = 24;
let sentence = 'The greater number of ' + num1 + ' and ' + num2;
if (num1 > num2) {
  console.log(sentence + ' is ' + num1);
} else if (num2 > num1) {
  console.log(sentence + ' is ' + num2);
} else {
  console.log('The numbers are equal');
}

// 3. Create a string variable with a language code (e.g. "english",
//    "spanish", "german"). Use an if - else if - else statement to
//     log "Hello, World" in the given language, for at least 3 languages.
//     It should default to logging English.

let sayHello = 'french';

if (sayHello === 'spanish') {
  console.log('Hola, Mundo!');
} else if (sayHello === 'german') {
  console.log('Hallo, Welt!');
} else if (sayHello === 'french') {
  console.log('Bonjour, Monde!');
} else {
  console.log('Language not in database, so I will give you in english! Hello, World!');
}

// 4. Do question 3 again but this time use a `switch` statement.

switch (sayHello) {
  case 'spanish':
    console.log('Hola, Mundo!');
    break;
  case 'french':
    console.log('Bonjour, Monde!');
    break;
  case 'german':
    console.log('Hallo, Welt!');
    break;
  default :
    console.log('Language not in database, so I will give you in english! Hello, World!');
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
//    Use an if - else if ... - else statement to log the corresponding letter
//    grade, either "A", "B", "C", "D", or "F".

let numGrade = 95;
let report = 'You passed! Here is your grade: ';
let reportPraise = 'You are amazing! Here is your grade: ';
if (numGrade < 60) {
  console.log('Im sorry to tell you that you have gotten an F');
} else if (numGrade >= 60 && numGrade < 70) {
  console.log(report + 'D');
} else if (numGrade >= 70 && numGrade < 80) {
  console.log(report + 'C');
} else if (numGrade >= 80 && numGrade < 90) {
  console.log(reportPraise + 'B');
} else if (numGrade >= 90 && numGrade <= 100) {
  console.log(reportPraise + 'A');
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) ,
//    and numberOfAnimals.

let animalName = 'cat';
let numberOfAnimals = 5;

// Use an if - else statement to log:

// LONG VERSION
// if (animalName === 'dog' && numberOfAnimals > 1) {
//   console.log(numberOfAnimals + ' dogs')
// } else if (animalName === 'dog' && numberOfAnimals === 1) {
//   console.log(numberOfAnimals + 'dog')
// } else if (animalName === 'sheep' && numberOfAnimals > 1) {
//   console.log(numberOfAnimals + 'sheep')
// } else if (animalName === 'sheep' && numberOfAnimals === 1) {
//   console.log(numberOfAnimals + 'sheep')
// } else if (animalName === 'goose' && numberOfAnimals > 1) {
//   console.log(numberOfAnimals + 'geese')
// } else if (animalName === 'goose' && numberOfAnimals === 1) {
//   console.log(numberOfAnimals + 'goose')
// } else {
//   console.log('I dont have that animal on the farm')
// }

if (numberOfAnimals > 1 && animalName === 'goose') {
  console.log(numberOfAnimals + ' ' + 'geese');
} else if (numberOfAnimals > 1) {
  console.log(numberOfAnimals + ' ' + animalName + 's');
} else if (numberOfAnimals === 1) {
  console.log(numberOfAnimals + ' ' + animalName);
} else if (animalName === 'sheep' && numberOfAnimals > 1) {
  console.log(numberOfAnimals + ' ' + animalName);
}

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// 7. Write a block of code that logs whether a given number is even or odd.

let num = 6;
if (num % 2 === 0) {
  console.log('This number is even');
} else if (num % 2 === 1) {
  console.log('This number is odd');
}

// 8. Do question 7 again but use a ternary.

num % 2 === 1 ? console.log('This number is odd') : console.log('This number is even ');

// 9. Write a block of code that checks and logs whether a given number
//    is positive, negative, or equal to 0.

let zeroNum = 0;
if (zeroNum === 0) {
  console.log('This number is equal to 0');
} else if (zeroNum > 0) {
  console.log('This number is positive');
} else if (zeroNum < 0) {
  console.log('This number is negative');
}
