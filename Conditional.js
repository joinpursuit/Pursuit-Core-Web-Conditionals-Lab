// // 1. Write a block of code that checks and logs whether variables are equal or not. 
// let a = 2
// let b = 1
// if (a === b) {
//     console.log("Variables are equal")
// }else {
//     console.log("They're not equal")
// }
// let x = 5
// let y = 10
// x > y ?console.log("The Greater number of " + x + " and " + y + " is " + x) : console.log("The Greater number of " + x + " and " + y + " is " + y)
// if (x>y){
//     console.log("The Greater number of " + x + " and " + y + " is " + x)
// } else {
//     console.log("The Greater number of " + x + " and " + y + " is " + y)
// }

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.
// let language = "German"
// if (language === "Spanish") {
//     console.log("Hola Mundo")
// } else if (language === "German"){
// console.log("Hallo Welt")
// }else{
//     console.log("Hello World")
// }

// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
// let numGrade = 75
// if (numGrade>=90) {
// console.log("A")
// }else if (numGrade>=79){
//     console.log("B")
// }else if (numGrade>=69){
//     console.log("C")
// }else if (numGrade>=59){
//     console.log("D")
// }else {
// console.log("F")
// }
// Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
// let animalName = "cat"
// numberOfAnimals =2
// if(numberOfAnimals > 1 && animalName === "Goose"){
//     console.log(numberOfAnimals + " Geese")
// }else if (numberOfAnimals > 1){
//     console.log(numberOfAnimals + " " + animalName + "s")
// }else if (numberOfAnimals = 1){
//     console.log(numberOfAnimals + " " + animalName)
// }
// let x = 3
// if (x%2 === 0) {
//     console.log("This number is Even")
// }else {
//     console.log("This number is Odd")
// }
// x%2 === 0 ? console.log("This number is Even") : console.log("This number is Odd")
//Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let x = 7
if (x >= 1){
    console.log("This is a possitive number")
}else if (x <= -1){
    console.log("This is a negative number")
}else {
    console.log("The Number is 0")
}