# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 2
let num2 = 3
if(num1 === num2) {
 console.log("They're even")
} else {
 console.log("They're not")
}

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

  let biggestNumber = num1 > num2 ? num1 : num2
   console.log("the bigger number between " + num1 + " and " + num2 + " is " + biggestNumber)

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let lang1 = 'english'
if (lang1 === 'english') {
  console.log ('Hello World')
} else if (lang1 === 'Spanish') {
  console.log ('Hola Mundo')
} else if (lang === 'Chinese'){
  console.log ('Ni Hao Shi Jie')
} console.log ('We are speaking English')

4. Do question 3 again but this time use a `switch` statement.

let lang1 = 'english';
switch (lang1) {
  case 'spanish':
    console.log ('Hola Mundo');
    break;
  case 'english':
    console.log ('Hello World');
    break;
  case 'chinese':
    console.log ('Ni Hao Shi Jie');
    break;
  default:
    console.log ('Sorry, we do not speak english');
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 63
if(numGrade >= 95){
 console.log('Grade is A')
} else if (numGrade < 95 && numGrade >= 85) {
 console.log('Grade is B')
} else if (numGrade < 85 && numGrade >= 75) {
 console.log('Grade is C')
} else if (numGrade < 75 && numGrade >= 65) {
 console.log('Grade is D')
} else if (numGrade < 65) {
 console.log('Grade is F. Failing.')
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName = 'cat'
let numberOfAnimals === 1

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

7. Write a block of code that logs whether a given number is even or odd.

let num = 3;
if (num % 2 === 0){
  console.log( num + ' is even ')
} else {
console.log( num + ' is odd ')
}

8. Do question 7 again but use a ternary.

let num = 3
 console.log((num % 2 === 0)? "even" : "odd")

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

var num = 0
if (num > 0) {
    console.log(num + " is positive");
} else if (num < 0) {
    console.log(num + " is negative");
} else {
    console.log(num + " is zero");
}
