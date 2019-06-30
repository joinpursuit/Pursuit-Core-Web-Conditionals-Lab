// # Conditional Exercises
//
// For this exercises we are going to create a file called `conditionals.js`. Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.
//
// > *Note*: Remember to fork this repo, clone your copy, modify `conditionals.js` with your answers. Lastly `git add` your changes, `git commit` and `git push`
//
// 1. Write a block of code that checks and logs whether variables are equal or not.

    let var1 = 4;
    let var2 = 4;
if (var1 === var2 ){
  console.log("The variables are equal");
} else {
  console.log("The variables are not equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let numXer = 10;
let numYer = 20;
if (numXer < numYer ) {
  console.log("The greater number of " + numXer + " and " + numYer + " is " + numYer);
} else if (numXer > numYer){
  console.log("The greater number of " + numYer + " and " + numXer + " is " + numXer);
} else {
  console.log("The numbers are equal");
}


// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let spanish = "spanish";
let german = "german";
let urdu = "urdu";
let language = urdu;

if (language === urdu){
  console.log("ہیلو دنیا");
} else if (language === spanish) {
    console.log("Hola Mundo");
} else if (language === german) {
    console.log("Holla Welt");
} else {
    console.log("Hello World")
}

// 4. Do question 3 again but this time use a `switch` statement.
switch (language) {
  case "urdu":
      console.log("ہیلو دنیا");
    break;
  case "spanish":
      console.log("Hola Mundo");
    break;
  case "german":
      console.log("Holla Welt");
  default:
      console.log("Hello World")
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 200 ;
if (numGrade <= 100 && numgGade >= 95) {
      console.log("A")
} else if (numGrade >= 85 && numGrade < 95) {
      console.log("B");
} else if (numGrade >= 75 && numGrade < 85)  {
      console.log("C")
} else if (numGrade >= 65 && numGrade < 75) {
      console.log("D");
} else if (numGrade < 64) {
      console.log("F")
} else {
  console.log( "Grade not valid")
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it" handle a few collective nouns like "sheep" and "geese".
let animalName;
let numberOfAnimals;

animalName = "mouse";
numberOfAnimals = 6;

if (numberOfAnimals === 1  ){
  console.log(  numberOfAnimals + " " + animalName );
} else if ( numberOfAnimals > 1) {
  switch (animalName) {
    case "sheep":
      console.log( numberOfAnimals + " "+  animalName)
      break;
    case "goose":
      console.log( numberOfAnimals + " " +  "geese");
      break;
    case "mouse":
      console.log( numberOfAnimals + " " +  "mice");
      break;
    default:
      console.log( numberOfAnimals + " "+  animalName + "s")
  }
}
// 7. Write a block of code that logs whether a given number is even or odd.
let evenOdd = 40.5;

if (evenOdd % 2 === 0) {
    console.log("The number is even")
} else if (evenOdd % 2 === 1) {
    console.log("The number is odd")
} else {
    console.log("Not an integer")
}

// 8. Do question 7 again but use a ternary.

evenOdd = evenOdd % 2 === 0 ? console.log("The number is even") : console.log("The number is odd")

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let numCheck = 0;

if (numCheck < 0){
  console.log("The number is negative")
} else if (numCheck > 0) {
    console.log("The number is positive")
} else {
      console.log("The number is zero")
}
