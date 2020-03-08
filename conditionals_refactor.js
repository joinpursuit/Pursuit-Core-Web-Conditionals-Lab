// 1. Write a block of code that checks and logs whether variables are equal or not.

let firstNumber = 1
let secondNumber = 5

if(firstNumber === secondNumber){
    console.log("The variables are equal")
} else {
    console.log("The variables are not equal")
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 100
let num2 = 10

if(num1 < num2){
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num2)
} else if (num1 > num2){
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num1)
} else {
    console.log("The numbers are equal.")
}
 
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.

let language1 = "english"
let language2 = "spanish"
let language3 = "italian"

if(language1){
    console.log("Hello World")
} else if (language2){
    console.log("Hola Mundo")
} else if (language3){
    console.log("Ciao Mondo")
} else {
    console.log("Hello World")
}

// 4. Do question 3 again but this time use a `switch` statement.

switch(language1){
    case 1: language1
        console.log("Hello World")
        break
    case 2: language2
        console.log("Hola Mundo")
        break
    case 3: language3
        console.log("Ciao Mondo")
        break
    default: 
        console.log("Hello World")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 91

if(numGrade >= 90){
    console.log("A")
} else if (numGrade >= 80 && numGrade <= 89){
    console.log("B")
} else if (numGrade >= 70 && numGrade <= 79){
    console.log("C")
} else if (numGrade >= 60 && numGrade <= 69){
    console.log("D")
} else if (numGrade <= 59){
    console.log("F")
} else {
    console.log("A")
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//   * the number
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animal = "cat"
let pluralAnimal = "cats"
let numberOfAnimals = 1

if(numberOfAnimals === 1){
    console.log(numberOfAnimals + " " + animal)
} else if (numberOfAnimals > 1){
    console.log(numberOfAnimals + " " + pluralAnimal)
}

// 7. Write a block of code that logs whether a given number is even or odd.

num = 10

if(num % 2 === 0){
    console.log("The number is even")
} else if(num % 2 !== 0){
    console.log("The number is odd")
}

// 8. Do question 7 again but use a ternary. 

num = 7

num % 2 === 0 ? console.log("The number is even") : console.log("The number is odd")

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

number = 3

if(number < 0){
    console.log("The number is negative")
} else if (number === 0){
    console.log("The number is equal to 0")
} else if (number > 0){
    console.log("The number is positive")
} else {
    console.log("The number is negative")
}

