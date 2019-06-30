// Conditional lab assignment
// 1. Write a block of code that checks and logs whether variables are equal or not.

let num = 5
if (num === 20){
  console.log("It is equal")
} else{
  console.log("It is not equal")
}


// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let x= 3
let y = 10
if (x < y){
  console.log("The greater number between" + " " + (y) + " " + "and" +" "+ (x)+ " " + "is" + " " + (y))
}else if (x > y){
  console.log("The greater number between" + " " + (x) + " " + "and" +" "+ (y)+ " " + "is" + " " + (x))
}else {
  console.log("The numbers are equal")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let language = "English"
if (language === "English"){
  console.log("Hello, World")
}else if (language === "German"){
  console.log("Hallo Welt")
}else if (language === "Spanish"){
  console.log("Hola Mundo")
}else{
  console.log("Hello World")
}


// 4. Do question 3 again but this time use a `switch` statement.

let language = "English";
switch (language) {
  case "English":
console.log("Hello, World")
break;
case "German":
console.log("Hallo Welt")
break;
case "Spanish":
console.log("Hola Mundo")
    break;
  default:
console.log("It is not one of the group member's favorite color. ")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let grade = "89"
if (grade >=90 && grade <=100){
  console.log("You're grade is an A")
}else if (grade < 90 && grade >= 80){
  console.log("You're grade is an B")
}else if (grade <80 && grade >= 70){
  console.log("You're grade is an C")
}else if (grade <70 && grade >= 60){
  console.log("You're grade is an D")
}else{
  console.log("You're grade is an F")
}


// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//   * the number
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "sheep"
let numberOfAnimals = 3
if (numberOfAnimals >1){
  console.log((numberOfAnimals) + " "  +(animalName)+"s")
}else{
console.log((animalName))
}


// 7. Write a block of code that logs whether a given number is even or odd.

let num = 5
if (num % 2 === 0){
  console.log("It is even")
}else{
    console.log("It is odd")
}

// 8. Do question 7 again but use a ternary.

let num = 8
num % 2 === 0 ?   console.log("It is even") : console.log("It is odd")



// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

num = 3
if (num > 0){
  console.log("It's Positive")
} else if (num < 0){
  console.log("It's negative")
}else{
  console.log("It's equal to 0")
}
