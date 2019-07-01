// 1. Write a block of code that checks and logs whether variables are equal or not.
let variable1 = 'bird';
let variable2 = 'cat';
if (variable1 === variable2) {
  console.log(variable1 + ' is equal to ' + variable2);
} else {
  console.log(variable1 + ' is not equal to ' + variable2);
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let num1 = -101;
let num2 = 101;
if (num1 < num2) {
  console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2 + '.');
} else if (num1 > num2) {
  console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1 + '.');
} else {
  console.log('The numbers are equal');
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let lang = 'french';
if (lang === 'chinese') {
  console.log('你好，世界');
} else if (lang === 'spanish') {
  console.log('Hola Mundo');
} else if (lang === 'french') {
  console.log('Bonjour le monde');
} else if (lang === 'italian') {
  console.log('Ciao mondo');
} else {
  console.log('Hello, World');
}

// 4. Do question 3 again but this time use a `switch` statement.
let language = 'chinese';
switch (language) {
case ('chinese'):
  console.log('你好，世界');
break;
case ('spanish'):
  console.log('Hola Mundo');
break;
case ('french'):
  console.log('Bonjour le monde');
break;
case ('italian'):
  console.log('Ciao mondo');
break;
default:
  console.log('Hello, World');
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 79;
if (numGrade > 89) {
  console.log('A');
} else if (numGrade > 79) {
  console.log('B');
} else if (numGrade > 69) {
  console.log('C');
} else if (numGrade > 59) {
  console.log('D');
} else {
  console.log('F');
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//   * the number
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
let animalName = 'cheetah';
let numberOfAnimals = 8;
if (numberOfAnimals === 0 || numberOfAnimals > 1) {
  console.log(numberOfAnimals + ' ' + animalName + 's');
} else {
  console.log(numberOfAnimals + ' ' + animalName);
}

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animal = 'octopus';
let numOfAnimal = 1;
if (numOfAnimal === 1) {
  console.log(numOfAnimal + ' ' + animal);
} else {
  switch (animal) {
    case ('goose'):
      console.log(numOfAnimal + ' geese');
    break;
    case ('octopus'):
      console.log(numOfAnimal + ' octopi');
    break;
    case ('fish'):
      console.log(numOfAnimal + ' ' + animal);
    break;
    case ('mouse'):
      console.log(numOfAnimal + ' mice');
    break;
    case ('deer'):
      console.log(numOfAnimal + ' ' + animal);
    break;
    case ('sheep'):
      console.log(numOfAnimal + ' ' + animal);
    break;
    case ('shrimp'):
      console.log(numOfAnimal + ' ' + animal);
    break;
    default:
      console.log(numOfAnimal + ' ' + animal + 's');
  }
}

// 7. Write a block of code that logs whether a given number is even or odd.
let num = 123456789;
if (num % 2 === 0) {
  console.log(num + ' is an even number.');
} else {
  console.log(num + ' is an odd number.');
}

// 8. Do question 7 again but use a ternary.
let number = 143256;
number % 2 === 0 ? console.log(number + ' is an even number.') : console.log(number + ' is an odd number.');

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let numbers = -3789;
if (numbers > 0) {
  console.log(numbers + ' is a positive number.');
} else if (numbers < 0) {
  console.log(numbers + ' is a negative number.');
} else {
  console.log(numbers + ' is equal to 0.');
}
