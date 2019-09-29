
// 1. Write a block of code that checks and logs whether variables are equal or not.
// let x = 6
// let y = 5
// if ( x === y) {
//     console.log("the variables are equal")
// } else {
//     console.log("the variables are not equal")
// }




// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
 

let a = 8
let b = 50
if (a>b){
    console.log ("The greater number of" + " " + a + " "+ "and" + " " + b + " "+ "is" + " " + a)
} else if (a<b){
    console.log("The greater number of" + " " + a + " "+ "and" + " " + b + " "+ "is" + " " + b)
}



// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.

let spanish = "Hola Mundo"
let french = "Bonjour le monde"
let german = "Hallo welt"
let english = "Hello world"
let language = spanish
if (language === spanish){
    console.log("Hola Mundo")
} else if (language === french){
    console.log("Bonjour le monde")
} else if (language === german){
    console.log("Hallo welt")
} else {
    console.log("hello world")
}




// 4. Do question 3 again but this time use a `switch` statement. 

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let grade = "A" || "B" || "C" || "D" || "F"
let result = 78
if (result>=90){
    console.log("A")
} else if (result>=80){
    console.log("B")
} else if (result>=70){
    console.log("C")
} else if (result>=60){
    console.log("D")
} else{
    console.log("F")
}
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName = "dog"
let numberOfAnimals = 5
if (numberOfAnimals > 1) {
    console.log (numberOfAnimals + " " + animalName + "'s")
}
// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// 7. Write a block of code that logs whether a given number is even or odd.

// 8. Do question 7 again but use a ternary. 

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.





