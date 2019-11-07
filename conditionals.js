// For this exercises we are going to create a file called conditionals.js.Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.

// Note: Remember to fork this repo, clone your copy, modify conditionals.js with your answers.Lastly git add your changes, git commit and git push

// Write a block of code that checks and logs whether variables are equal or not.
let fruitOne = "mango"
let fruitTwo = "mango"

if (fruitOne === fruitTwo) {
    console.log("they are both the same")
} else {
    console.log("its not the same")
}
// Write a block of code that logs which of two number variables is larger.
// Your output should look like this( in this example
//     for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
// If the two numbers are equal, log: 'The numbers are equal.'
let x = 96;
let y = 30;

if (x > y) {
    console.log(`The greater number of ${x} and ${y} is ${x}'`)
} else if (x === y) {
    console.log(`The numbers are equal`)
} else {
    console.log(`${y} is the largest`)
}
// Create a string variable with a language code(e.g.
//     "english", "spanish", "german").Use an
// if -
// else if -
// else statement to log "Hello, World" in the given language,
//     for at least 3 languages.It should
// default to logging English.

let language = "spanish"

if (language === "german") {
    console.log("Hallo, Welt")
} else if (language === "spanish") {
    console.log("Hola, mundo")
} else if (language === "polish") {
    console.log("Witaj świecie")
} else if (language === "italian") {
    console.log("Ciao mondo ")
} else {
    console.log("Hello, world")
}

// Do question 3 again but this time use a
// switch statement.

let switchLanguage = "polish"

switch (switchLanguage) {
    case "german":
        console.log("Hallo, Welt")
        break;
    case "spanish":
        console.log("Hola, mundo")
        break
    case "polish":
        console.log("Witaj świecie")
        break
    case "italian":
        console.log("Ciao mondo ")
    default:
        "Hello, world"
}

// Create a variable numGrade that will contain a numeric grade(out of 100).Use an
// if -
// else if ...-
// else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 90

if (numGrade > 90) {
    console.log("Your grade is A")
} else if (numGrade > 80) {
    console.log("Your grade is B ")
} else if (numGrade > 70) {
    console.log("Your grade is C ")
} else if (numGrade > 65) {
    console.log("Your grade is D ")
} else {
    console.log("Your grade is F")
}




// Create two variables: animalName('cat', 'dog', etc.), and numberOfAnimals.

// Use an
// if -
// else statement to log:

//     the number

// either in single or plural form.Exp: "5 cats"
// or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep"
// and "geese".

// Write a block of code that logs whether a given number is even or odd.

// Do question 7 again but use a ternary.

// Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

// © 2019 GitHub, Inc.