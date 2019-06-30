// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.
//
// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with your answers. Lastly `git add` your changes, `git commit` and `git push`
//
// 1. Write a block of code that checks and logs whether variables are equal or not.

let  rentCost1 = 1000;
let rentCost2 = 2000
if (rentCost1 === rentCost2 ) {
  console.log('This rent is out of your budget');
} else {
  console.log('You can afford this rent');
}


// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let numberM = 40;
let numberB = 7;
if (numberB < numberM) {
  console.log(' The greater number of ' + numberB + ' and ' + numberM + ' is '+ numberM)
} else if (numberM === numberB){
  console.log(' The numbers are equal')
}



//
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let language = 'swahili';
if (language === 'spanish'){
  console.log("Hola mundo")
} else if (language === 'german'){
  console.log("Hallo Welt")
} else if (language === 'swahili'){
  console.log('Salamu, Dunia')
} else{
  console.log ("Hello World")
}

//
// 4. Do question 3 again but this time use a `switch` statement.



switch (language) {
  case 'spanish':
  console.log("Hola mundo");
  break;
  case 'german':
  console.log("Hallo Welt");
  break;
  case 'swahili':
  console.log('Salamu, Dunia')
  break;
  default:
  console.log ("Hello World")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".


let numGrade = 63;

if (numGrade <= 100 && numGrade >= 90) {
  console.log('Your grade is  A');
} else if (numGrade >= 80 && numGrade < 89) {
  console.log('Your grade is B');
} else if (numGrade >= 70 && numGrade < 79) {
  console.log ('Your grade is C');
} else if (numGrade >= 60 && numGrade < 69) {
  console.log('Your grade is D');
} else if (numGrade < 60) {
  console.log('Your grade is F');
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

let animalName = 'sheep'
let numberOfAnimals = 1

if (numberOfAnimals === 1) {
  console.log( numberOfAnimals + " " + animalName)
} else if (numberOfAnimals > 1 && animalName === 'goose' ){
console.log( numberOfAnimals + " " + 'geeses')
} else if (numberOfAnimals >= 1 && animalName === 'sheep' ){
console.log( numberOfAnimals + " " + animalName)
} else if (numberOfAnimals > 1 ) {
  console.log(numberOfAnimals + " " + animalName +"s")
}





// 7. Write a block of code that logs whether a given number is even or odd.

let numberA = 3

if (numberA %  2 === 0) {
  console.log('even number')
} else if (numberA % 2 === 1){
  console.log( 'odd number')
} else {
console.log( 'not an interger')
}

// 8. Do question 7 again but use a ternary.

numberA % 2 === 0 ? console.log ('even number'): console.log('odd number');

//
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.;
let numberxB = -15

if (numberxB > 0){
console.log('positive number')
} else if (numberxB < 0){
  console.log('negative number')
}
