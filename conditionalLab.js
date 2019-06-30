// # Conditional Exercises
//
// // 1. Write a block of code that checks and logs whether variables are equal or not.
// //1).
//
// let grade = 80;
// if (grade >= 80){
//   console.log ("The number is equal")
// } else {
//   console.log(" The number is not equal")
// }
// // 2)
// let numberOfAnimals = 400;
// if (numberOfAnimals === 200){
//   console.log ("They are equal")
// } else {
//   console.log("They are not equal")
// }
//
// // 1) The number is equal.
// // 2)They are not equal.
//
//
// //--------------------------------------------------------------------------------------------------------------------------------
// // 2. Write a block of code that logs which of two number variables is larger.
// //   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
// //   * If the two numbers are equal, log: 'The numbers are equal.'
// // a)
// // let x = 10;
// // let y = 60;
// // if (x > y){
// //   console.log(x +" is greater than " + y)
// // }else if (x === y) {
// //   console.log(' They are both equal')
// //   } else {
// //     console.log(x + " is less than " + y)
// //  }
// // // b)
// // let b = 100;
// // let c = 60;
// // if (b > c){
// //   console.log(b +" is greater than " + c)
// // }else if (b === c) {
// //   console.log(' They are both equal')
// //   } else {
// //     console.log(b + " is less than " + c)
// //  }
// // c)
// // let x = 60;
// // let y = 60;
// // if (x > y){
// //   console.log(x +" is greater than " + y)
// // }else if (x === y) {
// //   console.log(' They are both equal')
// //   } else {
// //     console.log(x + " is less than " + y)
// //  }
//
// //-------------------------------------------------------------------------------------------------------------------------------
// // 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// // Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// // It should default to logging English.
// // let  language = "french";
// // if (language === "spanish"){
// //   console.log(" Hola, Mundo");
// // } else if (language === "french"){
// //   console.log("Bonjour, Monde");
// // } else if (language === "german"){
// //   console.log("Hallo, Welt");
// // } else {
// //   console.log(" hello, world");
// // }
//
// //
// // 4. Do question 3 again but this time use a `switch` statement.
// let language = "french";
// switch (language) {
//   case "spanich":
// console.log("Holla, Monde")
//     break;
//     case "french":
// console.log("Bonjour, Monde")
//     break;
//     case "English":
// console.log("Hello, world")
//       break;
//   default:
// console.log("My Best")
// }
// //
// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
//
// let numGrade = "95";
// if (numGrade >= "90"){
//   console.log("A");
// } else if (numGrade >= "80") {
//   console.log("B");
// } else if (numGrade >= "70") {
//   console.log("C");
// } else {
//   console.log("F");
//  }
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animalName = "cat"
let numberOfAnimals = 200
if (numberOfAnimals < 2) {
  console.log("cat");
} else {
    console.log("cats")
  }
//
// 7. Write a block of code that logs whether a given number is even or odd.
// //
// let x = 7;
// if (x % 2 === 0){
//   console.log( "Even number");
// } else {
//   console.log("Odd number")
// }
// 8. Do question 7 again but use a ternary.
let x = 7;
 x % 2 === 0 ? console.log("Even Number") : console.log("Odd Number")
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
// let x = 2;
// if (x > 0) {
//   console.log("positive number")
// } else if (x < 0 ) {
//   console.log("Negative number")
// } else {
//   console.log(" Equal to 0")
// }
