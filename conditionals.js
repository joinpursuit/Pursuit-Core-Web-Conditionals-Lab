// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.
//
// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with your answers. Lastly `git add` your changes, `git commit` and `git push`
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 5
let num2 = 6
if (num1 === num2){
  console.log("They are equal.");
}
console.log("They are not equal.");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let x = 4
let y = 8
if (x > y){
  console.log("The greater number of " + x + " and " + y + " is " + x + ".");
} else if (x < y) {
  console.log("The greater number of " + y + " and " + x + " is " + y + ".");
} else {
  console.log("The numbers are equal.");
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let language = "spanish"

 if (language = "spanish" ){
   console.log("Hola, Mundo");
 } else if (language = "portuguese"){
   console.log("Olá, Mundo");
 } else if (language = "italian"){
   console.log("Ciao, Mondo");
 } else {
   console.log("Hello, World");
 }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//4. Do question 3 again but this time use a `switch` statement.

let language2 = "italian"

switch (language2){
  case "spanish" :
    console.log("Hola, Mundo");
    break;
  case "portuguese" :
    console.log("Olá, Mundo");
    break;
  case "italian" :
    console.log("Ciao, Mondo");
    break;
  default:
    console.log("Hello, World")
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//5. Create a variable numGrade that will contain a numeric grade (out of 100).
//Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 88

if (numGrade >=90){
  console.log("You got an A.");
} else if (numGrade >=80 && numGrade <=89){
  console.log("You got a B.");
} else if (numGrade >= 73 && numGrade <=79){
  console.log("You got a C.");
} else if (numGrade >=66 && numGrade <=72){
  console.log("You got a D.");
} else {
  console.log("You got an F.")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


let animalName = "cat"
let numberOfAnimals = "2"

if (numberOfAnimals === 1){
  console.log("You have one " + animalName)
} else if (numberOfAnimals > 1) {
  console.log("You have " + numberOfAnimals + " " + animalName + "s." )
} else {
   console.log("Why don't you have any pets?")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//7. Write a block of code that logs whether a given number is even or odd.

let num = 5

if (num % 2 === 0){
  console.log(num + " is even.")
} else if (num % 2 === 1) {
  console.log(num + " is odd.")
} else {
  console.log(num + " is not a number.")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//8. Do question 7 again but use a ternary.

let num3 = 5

num3 % 2 === 0 ? console.log(num3 + " is even.") : console.log(num3 + " is odd.");


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let num4 = 6

if(num4 > 0 ){
  console.log(num4 + " is positive.")
} else if (num4 < 0){
  console.log(num4 + " is negative.")
} else if (num4 === 0){
  console.log(num4 + " is equal to 0.")
} else {
  console.log(num4 + " is not a number.")
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
