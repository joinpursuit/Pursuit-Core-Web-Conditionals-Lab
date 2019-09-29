// 1. Write a block of code that checks and logs whether variables are equal or not.
// let num1 = 3;
// let num2 = 3;
// if (num1 === num2){
//     console.log("The numbers are equal");
// } else {
//     console.log("The numbers are not equal");
// }

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
// let x = 5;
// let y = 10;
// if (x > y){
//     console.log('The greater number of ' + x + " and " + y + " is " + x);
// } else if (x < y){
//     console.log('The greater number of ' + x + " and " + y + " is " + y);
// } else {
//     console.log('The numbers are equal.');
// }

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.
// let english = "english";
// let spanish = "spanish";
// let german = "german";
// let language = english;
// if (language === german) {
//     console.log("Hallo Welt");
// } else if(language === spanish) {
//     console.log("Hola Mundo");
// } else {
//     console.log("Hello World")
// }

// 4. Do question 3 again but this time use a `switch` statement. 
// let english = "english";
// let spanish = "spanish";
// let german = "german";
// let language = english;

// switch (language){
//     default:
//         console.log("Hello World");
//         break;
//     case german:
//         console.log("Hallo Welt")
//         break;
//     case spanish:
//         console.log("Hola Mundo")
//         break
// }

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
// let numGrade = 4;
// if (numGrade >= 90) {
//     console.log("A");
// } else if (numGrade >= 80 && numGrade < 90) {
//     console.log("B");
// } else if (numGrade >= 70 && numGrade < 80) {
//     console.log("C");
// } else if (numGrade >= 60 && numGrade < 70) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
// let animalName = 'goose'
// let numberOfAnimals = 5
// let plural = 's'

// if (numberOfAnimals > 1 && animalName === 'goose') {
//     console.log(numberOfAnimals + ' geese');
// } else if (numberOfAnimals > 1 && animalName === 'sheep') {
//     console.log(numberOfAnimals + ' sheep')
// } else if (numberOfAnimals > 1 && animalName === 'fish') {
//     console.log(numberOfAnimals + ' fish');
// } else if (numberOfAnimals > 1 && animalName == 'ox') {
//     console.log(numberOfAnimals + ' oxen');
// } else if (numberOfAnimals > 1) {
//     console.log(numberOfAnimals + " " + animalName + plural);
// } else {
//     console.log(numberOfAnimals + " " + animalName);
// }
    

// 7. Write a block of code that logs whether a given number is even or odd.
// let number = 8;
// if (number % 2 === 0) {
//     console.log(number + " is even.");
// } else if(number % 2 === 1) {
//     console.log(number + " is odd.");
// }

// 8. Do question 7 again but use a ternary. 
// let number = 8;
// number % 2 === 0 ? console.log(number + " is even.") : console.log(number + " is odd.");

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
// let givNum = -10
// if (givNum > 0){
//     console.log("Number is positive");
// } else if (givNum === 0){
//     console.log("Number is equal to 0");
// } else {
//     console.log("Number is negative")
// }