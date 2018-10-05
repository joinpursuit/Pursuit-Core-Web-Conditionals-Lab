# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.


let variable1 = 2
let variable2 = 3
if (variable1 === variable2){
  console.log("variables are equal")
} else {
  console.log("variables are not equal")
}


2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'


  let x = 511
  let y = 10

  if (x < y) {
    console.log('The greater number of '+x +' and ' +y +' is ' +y)
  } else if (y < x) {
    console.log('The greater number of '+x +' and ' +y +' is ' +x)
  } else {
    console.log('The numbers are equal.')


3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.


let language = 'english'

if (language === 'english') {
  console.log('Hello World')
} else if (language === 'spanish') {
  console.log('Hola Mundo')
} else if (language === 'german') {
  console.log('Hallo Welt')  
} else {
  console.log('Hello World')
}



4. Do question 3 again but this time use a `switch` statement.


var language = 'Spanish';
switch (language) {
  case 'English':
    console.log('Hello World');
    break;
  case 'Spanish':
    console.log('Hola Mundo');
    break;
  case 'German':
    console.log('Hallo Welt');
        break;
  default:
    console.log('Hello World');
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade  = 86



if (numGrade > 0 && numGrade < 50){
  console.log('F')
}
if (numGrade > 51 && numGrade < 60){
  console.log('D')
}
if (numGrade > 60 && numGrade < 70){
  console.log('C')
}
if (numGrade > 80 && numGrade < 90){
  console.log('B')
}
if (numGrade > 90 && numGrade < 100){
  console.log('A')
}


6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".




  let animalName = 'cat'
  let numberOfAnimals = 1

  if (animalName === 'dog' && numberOfAnimals === 1){
    console.log('1 ' +animalName)
  } else if (animalName === 'dog' && numberOfAnimals >= 2) {
    console.log(numberOfAnimals + ' dogs' )
  }
  if (animalName === 'cat' && numberOfAnimals === 1){
    console.log('1 ' +animalName)
  } else if (animalName === 'cats' && numberOfAnimals >= 2) {
    console.log(numberOfAnimals + ' cats' )
  }


Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//no

7. Write a block of code that logs whether a given number is even or odd.

let num = 10
if (num % 2 === 0) {
  console.log('it\'s even')
} else {
  console.log('it\'s odd')
}

8. Do question 7 again but use a ternary.

let num = 10


num % 2 === 0 ? 'even' : 'odd'

num % 2 != 0 ? 'odd' : 'even'

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.


let num = 0;
if (num === 0){
  console.log('Equal to zero.')
} else if (num > 0) {
  console.log('Positive number')
} else {
  console.log('Negative number')
}
