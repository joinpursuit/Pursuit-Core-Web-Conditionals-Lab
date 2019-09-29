// 1. Write a block of code that checks and logs whether variables are equal or not.
let x = 10;
let y = 20;
if(x === y){
    console.log("The variables are equal");
}
else{
    console.log("The variables are NOT equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let a = 10;
let b = 10;
if(a > b){
    console.log(a + " " + "greater");
} else if (a === b){
    console.log(a + " and " + b + " are equal");
} else{
    console.log(b + " " + "greater");
}
 
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.
let lang = "french";
// let span = "spanish"
// let germ = "german" 
if (lang === "english"){
    console.log("Hello World");
} else if (lang === "spanish"){
    console.log("Hola Mundo");
} else if (lang === "german"){
    console.log("Hallo Welt");
} else{
    console.log("Go to google translate!");
}


// 4. Do question 3 again but this time use a `switch` statement. 
let language = "spanish";
switch (language){
    case language = "english" : 
        console.log ("Hello World");
        break;
    case language = "spanish" :
        console.log ("Hola Mundo");
        break;
    case language = "german":
        console.log ("Hallo Welt");
        break;
    default :
        console.log("Go to google translate!");
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// 7. Write a block of code that logs whether a given number is even or odd.

// 8. Do question 7 again but use a ternary. 

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.