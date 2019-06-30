// CONDITIONLA EXERCISE //

// 1. Write a block of code that checks and logs whether variables are equal or not.

let x = 1;
let y = 2;
let z = 1;

console.log(`1. x === y is ${x === y} and x === z is ${x === z}`);

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 10;
let num2 = 20;

if (num1 === num2) {
  console.log('2. Both the numbers are the same');
} else if (num1 > num2) {
  console.log('2. The bigger number is ' + num1);
} else {
  console.log('2. The bigger number is ' + num2);
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let spanish = 'Hola Mundo';
let german = 'Hallo Welt';
let english = 'Hello World';

let language = 'german';

if (language === 'spanish') {
  console.log('3. ' + spanish);
} else if (language === 'german') {
  console.log('3. ' + german);
} else {
  console.log('3 ' + english);
}

// 4. Do question 3 again but this time use a `switch` statement.

switch (language) {
  case ('spanish'):
    console.log('4. ' + spanish);
    break;
  case ('german'):
    console.log('4. ' + german);
    break;
  default:
    console.log('4. ' + english);

}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 94;

if (numGrade < 65) {
  console.log('5. Grade: F');
} else if (numGrade < 75) {
  console.log('5. Grade: D');
} else if (numGrade < 85) {
  console.log('5. Grade: C');
} else if (numGrade < 95) {
  console.log('5. Grade: B');
} else {
  console.log('5. Grade: A');
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName = 'dog';
let numberOfAnimals = 2.5;

// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

if (numberOfAnimals > 1) {
  console.log('6. ' + numberOfAnimals + ' ' + animalName + 's!');
} else {
  console.log('6. ' + numberOfAnimals + ' ' + animalName);
}

// 7. Write a block of code that logs whether a given number is even or odd.

let myNum = 7;

if (myNum % 2 === 0) {
  console.log('7. Your number: ' + myNum + ' is even.');
} else {
  console.log('7. Your number: ' + myNum + ' is odd.');
}

// 8. Do question 7 again but use a ternary.

(myNum % 2 === 0) ?
  console.log('8. Your number: ' + myNum + ' is even.') :
  console.log('8. Your number: ' + myNum + ' is odd.');

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let givenNum = -2;

(givenNum > 0) ?
  console.log('9. Your number: ' + givenNum + ' is even.') :
(givenNum === 0) ?
  console.log('9. Your number: ' + givenNum + ' is zero.') :
  console.log('9. Your number: ' + givenNum + ' is negative.');
