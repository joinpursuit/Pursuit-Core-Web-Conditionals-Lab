// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.

// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with your answers. Lastly `git add` your changes, `git commit` and `git push`
//
// 1. Write a block of code that checks and logs whether variables are equal or not.


let x = 33;
if(x === 5){
  console.log("This is equal!")
}else{
  console.log("This is not equal.")
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'


let x = 4;
let y = 4;
if (x > y){
  console.log("The greater number of " + x + "and" + y + " is " + x +".")
} else if (x < y){
  console.log("The greater number of " + x + " and " + y + " is " + y +".")
} else{
  console.log("The numbers are equal.")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.


let language = "Spanish";

if(language === "English"){
  console.log("Hello, World.");
} else if ("Spanish"){
  console.log("Hola Mundo.");
} else if("German"){
  console.log("Hallo Welt.");
} else{
  console.log("Hello, World.");
}


// 4. Do question 3 again but this time use a `switch` statement.


let lang = "Spanish";
switch(lang){
  case("English"):
  console.log("Hello, World.")
  break;
  case("Spanish"):
  console.log("Hola Mundo.")
  break;
  case("German"):
  console.log("Hallo Welt.")
  break;
  default:
  console.log("Hello, World.");
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 89
if(numGrade >= 90 && numGrade <100){
  console.log("This is an'A'!");
} else if(numGrade<90 && numGrade>= 80){
  console.log("This is a 'B'!");
} else if (numGrade < 80 && numGrade >= 70) {
  console.log("You passed, this is a 'C'.");
}else if(numGrade < 70 && numGrade >= 60){
  console.log("This is a 'D'.");
}else{
  console.log("Try again, this is a 'F'!");
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

let animalName = "dog";
let numberOfAnimals = 1
if (numberOfAnimals > 1){
  console.log(numberOfAnimals + " "+ animalName+"s")
} else {
  console.log(numberOfAnimals + " " + animalName)
}

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// 7. Write a block of code that logs whether a given number is even or odd.

let num = 5;
if (num % 2 === 0){
  console.log("The number is even.");
} else{
  console.log("The number is odd.");
}

// 8. Do question 7 again but use a ternary.

num % 2 === 0 ? console.log("The number is even") : console.log("The number is odd.");

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.


let integer = -3;
if (integer > 0){
  console.log("This number is positive.");
}else if (integer === 0){
  console.log ("This number is equal to 0.");
} else {
  console.log("This is a negative number.");
}
