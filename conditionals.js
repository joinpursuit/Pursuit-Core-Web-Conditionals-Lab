//1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 1;
let num2 = 2;

if (num1 === num2) {
  console.log("Those two numeric variables are equal!");
} else {
  console.log("Those two numeric variables are NOT equal!");
}

//2. Write a block of code that logs which of two number variables is larger.
  //* Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  //* If the two numbers are equal, log: 'The numbers are equal.'

let num3 = 12;
let num4 = 7;

if (num3 > num4) {
  console.log("The greater number of " + num3 + " and " + num4 + " is " + num3 + " .");
} else if (num3 < num4) {
  console.log("The greater number of " + num3 + " and " + num4 + " is " + num4 + " .");
} else {
  console.log("These two numbers are equal.");
}


//3. Create a string variable with a language code (e.g. "english", "spanish", "german").
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
//It should default to logging English.

let language = "Sweedish";

if (language === "Spanish") {
  console.log("¡Hola Mundo!");
} else if (language === "Sweedish") {
  console.log("Hej världen!");
} else {
  console.log("Hello, world!");
}

//4. Do question 3 again but this time use a `switch` statement.

language = "Spanish";

switch (language) {
  case "Spanish":
   console.log("¡Hola Mundo!");
   break;
  case "Sweedish":
   console.log("Hej världen!");
   break;
  default:
   console.log("Hello, world!");
}

//5. Create a variable numGrade that will contain a numeric grade (out of 100).
//Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 83

if (numGrade >= 97) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an A+");
} else if (numGrade <= 96 && numGrade >= 93) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an A")
} else if (numGrade <= 92 && numGrade >= 90) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an A-")
} else if (numGrade <= 89 && numGrade >= 87) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an B+")
} else if (numGrade <= 86 && numGrade >= 83) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an B")
} else if (numGrade <= 82 && numGrade >= 80) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an B-")
} else if (numGrade <= 79 && numGrade >= 77) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an C+")
} else if (numGrade <= 76 && numGrade >= 73) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an C")
} else if (numGrade <= 72 && numGrade >= 70) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an C-")
} else if (numGrade <= 69 && numGrade >= 67) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an D+")
} else if (numGrade <= 66 && numGrade >= 65) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an D")
} else if (numGrade <= 64) {
  console.log("With a score of " + numGrade + " out of 100, student recieves an F")
} else {
  console.log("Your score is to high or low. Please enter a correct score for grading!")
}

//6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName = "Cat"
let numberOfAnimals = 13

//Use an if - else statement to log:

  //* the number

  //* either in single or plural form. Exp: "5 cats" or "1 dog".

if (numberOfAnimals > 1) {
  console.log(numberOfAnimals + " " + animalName + "s");
} else {
  console.log(numberOfAnimals + " " + animalName);
}

//Bonus: Make it handle a few collective nouns like "sheep" and "geese".

animalName = "Goose"
numberOfAnimals = 0

if (numberOfAnimals > 1 && animalName === "Goose") {
  console.log(numberOfAnimals + " Geese");
} else if (numberOfAnimals > 1 && animalName === "Sheep") {
  console.log(numberOfAnimals + " Sheep");
} else if (numberOfAnimals > 1 && animalName === "Octopus") {
  console.log(numberOfAnimals + " Octopi");
} else if (numberOfAnimals > 1) {
  console.log(numberOfAnimals + " " + animalName + "s");
} else if (numberOfAnimals < 1 && animalName === "Goose") {
  console.log(numberOfAnimals + " Geese");
} else {
  console.log (numberOfAnimals + " " + animalName)
}

//7. Write a block of code that logs whether a given number is even or odd.

let num5 = 7

if (num5 % 2 === 0) {
  console.log("This number is EVEN!");
} else {
  console.log("This number is ODD!");
}

//8. Do question 7 again but use a ternary.

num5 = 1842

num5 % 2 === 0 ? console.log("This number is EVEN!") : console.log("This number is ODD!")

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let num6 = -4

if (num6 > 0) {
  console.log("This number is POSITIVE!");
} else if (num6 < 0) {
  console.log("This number is NEGATIVE!");
} else {
  console.log("That number is a big ol' ZERO, my friend!")
}
