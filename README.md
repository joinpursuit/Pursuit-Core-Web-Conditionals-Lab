# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 4
let num2 = 6
if(num1 === num2) {
  console.log("They're even")
} else {
  console.log("They're not")
}

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

let num3 = 8
let num4 = 4
if(num3 > num4){
  console.log(num3 + " is greater than " + num4)
} else {console.log(num4 + " is greater than " + num3)}


3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let lan = 'english'
if(lan = 'english'){
  console.log("Hello world")
} else if (lan = 'spanish'){
  console.log("Hola Mundo")
} else if (lan = 'french') {
  console.log("Bonjour le monde")
}


4. Do question 3 again but this time use a `switch` statement.

let lan = 'English';
switch (lan) {
  case 'English':
    console.log('Hello world');
    break;

  case 'spanish':
    console.log('Hola mundo');

    case 'french':
      console.log('Bonjour monde');
    break;
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 55

if(numGrade >= 95){
  console.log('Grade is A')
} else if (numGrade < 95 && numGrade >= 85) {
  console.log('Grade is B')
} else if (numGrade < 85 && numGrade >= 75) {
  console.log('Grade is C')
} else if (numGrade < 75 && numGrade >= 65) {
  console.log('Grade is D')
} else if (numGrade < 65) {
  console.log('Grade is F. Get out.')
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = ('cat')
let numberOfAnimals = 2

if (numberOfAnimals <= 1 ){
  console.log(numberOfAnimals + " " + animalName)
} else {
  console.log(numberOfAnimals + ' ' + animalName +'s')
}


7. Write a block of code that logs whether a given number is even or odd.

let num = 3
if (num % 2 === 0) {
  console.log('Even')
} else {
  console.log('Odd')
}


8. Do question 7 again but use a ternary.

 let num = 5
(num % 2 === 0) ? console.log("Even") : console.log("Odd")

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

num = -4

if (num > 0) {
  console.log('positive')
} else if (num === 0) {
  console.log('Equal to 0')
} else {console.log('Negative')}
