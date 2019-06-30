// 1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 2;
let num2 = 2;

if (num1 === num2) {
  console.log("Those are the same number!");
} else {
  console.log("Those are different numbers!");
}

// 2. Write a block of code that logs which of two number variables is larger.
//  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//  * If the two numbers are equal, log: 'The numbers are equal.'

let x = 7;
let y = 4;

if (x === y) {
  console.log("The numbers are equal.");
} else if (x > y){
  console.log("The great number of " + x + " and " + y + " is " + x);
} else {
  console.log("The great number of " + x + " and " + y + " is " + y);
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let lan = "English";

if (lan === "Spanish") {
  console.log("Hola, Mundo!");
} else if (lan === "German"){
  console.log("Hallo, Welt!");
} else {
  console.log("Hello, World!");
}


//4. Do question 3 again but this time use a `switch` statement.

switch (lan){
  case "Spanish":
    console.log("Hola, Mundo!");
    break;
  case "German":
    console.log("Hallo, Welt!");
    break;
  default:
    console.log("Hello, World!")
}


//5. Create a variable numGrade that will contain a numeric grade (out of 100).
//Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".


let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 65) {
    console.log("D");
} else {
    console.log("F");
}


// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
//
// Use an if - else statement to log:
//
//   * the number
//
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
//
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = "geese";
let numberOfAnimals = 50;
const result = "There are ";
const result1 = "There is only 1 ";
const result2 = "There aren't any ";



if (numberOfAnimals > 1) {
    if (animalName === "sheep") {
        console.log(result + numberOfAnimals + " " + animalName + ".");
    } else if (animalName === "goose" || "geese"){
        console.log(result + numberOfAnimals + " geese.");
    }
    else {
        console.log(result + numberOfAnimals + " " + animalName + "s.");
}}  else if (numberOfAnimals === 1){
      if (animalName === "geese"){
        console.log(result1 + "goose.");
    } else {
        console.log(result1 + animalName + ".");
}} else if (numberOfAnimals === 0 ){
      if (animalName === "goose" || "geese") {
        console.log(result2 + "geese.");
  }   else if (animalName === "sheep") {
        console.log(result2 + animalName + ".");
  }   else {
        console.log(result2 + animalName + "s.")
}} else {
      if (animalName === "sheep") {
        console.log("How do you have negative sheep?");
      } else if (animalName === "goose" || "geese"){
          console.log("How do you have negative geese?");
      } else console.log("How do you have negative " + animalName + "s?");
}


//7. Write a block of code that logs whether a given number is even or odd.

let num = 98;

if (num % 2 === 0) {
    console.log("Even.");
} else {
    console.log("Odd.");
}


//8. Do question 7 again but use a ternary.

num % 2 === 0 ? console.log("Even.") : console.log("Odd.");

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let thisNum = 0;

if (thisNum > 0) {
    console.log("This number is positive.");
} else if(thisNum < 0) {
    console.log("This number is negative.");
} else {
    console.log("This number is equal to 0.")
}
