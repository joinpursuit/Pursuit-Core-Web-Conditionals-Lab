# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 2;
let num2 = 3;
if(num1 === num2){
console.log('they are equal')
} else {
  console.log('they are not equal')
}
;
2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 3
let num2 = 4

if(num1 > num2){
  console.log(num1)
} else {
  console.log(num2)
}

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

var lang = 'English';

if(lang === 'English'){
  console.log('Hello world')

}else if(lang === 'Spanish'){
  console.log('Hola Mundo')

}else(lang === 'Chinese'){
  console.log('Ni Hao World')
}

4. Do question 3 again but this time use a `switch` statement.

let lang = 'English';
switch (lang) {
  case 'Spanish':
    console.log('Hola Mundo');
    break;
  case 'Japanese':
	console.log('Konichiwa Bitches!');
    break;
  default:
    console.log('Hello World');
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 55

if(numGrade >= 90){
  console.log('A')
}else if(numGrade < 90 && numGrade >79){
  console.log('B')
}else if(numGrade <= 79 && numGrade >= 65){
  console.log('C')
}else if(numGrade <= 65 && > 55){
  console.log('D')
}else (numGrade < 55){
  console.log('F')
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = ' dog'
let numberOfAnimals = 2

if (numberOfAnimals > 1){
  console.log(numberOfAnimals + animalName + 's')
}

7. Write a block of code that logs whether a given number is even or odd.

let num = 3
if (num % 2 === 0) {
 console.log('Even')
} else {
 console.log('Odd')
}

8. Do question 7 again but use a ternary.

let num = 6;
(num % 2 === 0)?console.log('Even'):console.log('Odd')

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let i = 3;
 if(i > 0){
 console.log('positive')
}else if( i < 0){
  console.log(negative)
}else{
  console.log('Equal to zero')
}
