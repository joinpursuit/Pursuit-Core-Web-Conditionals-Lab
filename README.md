# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

  let var1 = 2;
  let var2 = 3;
  if (var1 === var2) {
    console.log('These variables are equal');
  } else {
    console.log('These variables are not equal');
  }

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

 let firstVar = 3;
 let secondVar = 5;
  if (firstVar > secondVar) {
    console.log('The greater number of firstVar and secondVar is firstVar')
  } else if (firstVar < secondVar) {
    console.log('The greater number of firstVar and secondVar is secondVar')
  } else {
    console.log('The variables are equal')
  }

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

  let eng = 'english';
  let span = 'spanish';
  let russ = 'russian';
  let language = span;

  if (language === span) {
    console.log('Hola, mundo');
  } else if (language === russ) {
    console.log('Privet, mir')
  } else {
    console.log('Hello, world')
  }

4. Do question 3 again but this time use a `switch` statement.

  let language = 'spanish';

  switch (language) {
    case 'spanish':
    console.log('Hola, mundo');
    break;
    case 'russian':
    console.log('Privet, mir');
    break;
    default:
    console.log('Hello, world');
  }

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 90;

if (numGrade >= 90) {
  console.log('Your grade is A')
} else if (numGrade > 79 && numGrade < 90) {
  console.log('Your grade is B')
} else if (numGrade > 69 && numGrade < 80) {
  console.log('Your grade is C')
} else if (numGrade > 59 && numGrade < 70) {
  console.log('Your grade is D')
} else if (numGrade < 60) {
  console.log('Your grade is F')
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = 'cat';
let numberOfAnimals = 3;

if (animalName === 'cat' && numberOfAnimals === 2) {
  console.log('2 cats');
} else if (animalName === 'cat' && numberOfAnimals === 3) {
  console.log('3 cats');
} else if (animalName === 'sheep' && numberOfAnimals === 99) {
  console.log('99 sheep');
}
7. Write a block of code that logs whether a given number is even or odd.

let num = 25;
if (num % 2 === 0) {
  console.log('This number is even!!');
} else {
  console.log('This number is odd!!');
}

8. Do question 7 again but use a ternary.

let num = 24;
num % 2 === 0 ? console.log('This number is even') : console.log('This number is odd');

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let num = 2000;
if (num > 0) {
  console.log('This number is positive!')
} else if (num < 0) {
  console.log('This number is negative')
} else if (num === 0) {
  console.log('This number is equal to 0')
}
