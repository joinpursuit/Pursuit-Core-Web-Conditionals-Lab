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