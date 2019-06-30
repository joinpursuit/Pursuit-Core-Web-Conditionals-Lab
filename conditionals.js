//Write a block of code that checks and logs whether variables are equal or not.
let x = 5
let y = 20
if (x === y){
  console.log('Equality')
}else{
  console.log('No Equality')
}
//Write a block of code that logs which of two number variables is larger.
let a = 4
let b = 6
if (a > b){
  console.log('The greater number of ' + a + ' and ' + b + ' is ' + a)
} else if(b > a){
  console.log('The greater number of ' + a + ' and ' + b + ' is ' + b)
}
  else if(a === b){
    console.log('The numbers are equal')
  }
//Create a string variable with a language code (e.g. "english", "spanish", "german"). Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. It should default to logging English.
let lang = 'Spanish'
if (lang === 'Spanish'){
  console.log('Hola Mundo')
}else if(lang === 'German'){
  console.log('Hallo Welt')
}else if(lang === 'English'){
  console.log('Hello World')
}else{
  console.log('Hello World')
}
//Do question 3 again but this time use a switch statement.
var language = 'German'
switch (language) {
  case 'Spanish' :
  console.log('Hola Mundo');
    break;
  case 'German' :
  console.log('Hallo Welt');
    break;
    case 'French' :
    console.log('Bonjour le monde');
  default: console.log('Hello World');
}
//Create a variable numGrade that will contain a numeric grade (out of 100). Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 75
 if (numGrade >= 90){
   console.log('You got an A');
 }else if (numGrade <= 89 || numGrade >= 80){
   console.log('You got a B');
 }else if (numGrade <= 79 || numGrade >= 70){
   console.log('You got a C');
 }else if (numGrade <= 69 || numGrade >= 65){
   console.log('You got a D');
 } else {
   console.log('You failed bruv');
 }
 //Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName = 'dog'
let number = 2
if (number === 1){
  console.log('You have one' + animalName);
}else if (number > 1){
  console.log('You have multiple ' + animalName + 's');
}else {
  console.log('You have zero' + animalName + 's');
}
//Write a block of code that logs whether a given number is even or odd.
let num = 77
if(num % 2 === 0){
  console.log(num + ' is even');
}else{
  console.log(num + ' is odd');
}
//Do question 7 again but use a ternary.
num % 2 === 0 ? console.log(num + ' is even') : console.log(num + ' is odd'); ;
//Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let integer = 99
if (integer < 0){
  console.log(integer + ' is a negative number');
}else if (integer > 0){
  console.log(integer + ' is a positive number');
}else {
  console.log(integer + ' is zero');
}
