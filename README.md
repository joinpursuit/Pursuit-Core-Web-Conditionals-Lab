# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
  let num1 = 3
  let num2 = 4
  if (num1 < num2 ){
    console.log(num1 + " is smaller than " + num2)
  } else if (num1 == num2){
    console.log(num2 + "is greater than " + num1)
  }


3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let french = "bonjour"
if (french === "hej"){
  console.log ("Hej!")
}else if (french === "ciao"){
  console.log ("Ciao!")
}else if (french === "ni hao"){
  console.log ("Ni hao")
} else {
  console.log ("Hello, World")
}

4. Do question 3 again but this time use a `switch` statement.

let french = "bonjour"
switch (expression) {
  case "hej":
    console.log("hej!")
    break;
  case "ciao":
    console.log("Ciao!")
    break;
  default:
    console.log("Hello, World")
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 75
if (numGrade >= 95){
  console.log("A")
}else if (numGrade >=85){
  console.log("B")
}else if (numGrade >=75){
  console.log("C")
}else if (numGrade <= 74){
  console.log("D")
}else{
  console.log("F")
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "crab"
let numberOfAnimals = 2
if (numberOfAnimals < 2){
  console.log(numberOfAnimals + animalName)
}else if(animalName === 34 || animalName === "moose"){
  console.log ("There are " + numberOfAnimals + "moose")
}else {
  console.log( numberOfAnimals + " " + animalName + "s")
}


7. Write a block of code that logs whether a given number is even or odd.

let number= 5
if (number % 0){
  console.log(number + " is an even number")
}else{
  console.log (number + " is an odd number")
}

8. Do question 7 again but use a ternary.

let number = 5
number % 2 == 0 ? number + " is an even number" : number + " is an odd number"

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let number = 8
if (number > 0){
  console.log( number + " is positive")
} else if (number <= -1){
  console.log( number + " is negative")
}else if (number === 0){
  console.log( number + " is zero")
}
