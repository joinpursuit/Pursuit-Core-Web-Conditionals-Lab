//1. Write a block of code that checks and logs whether variables are equal or not.
let x1 = 50;
let x2 = 100;
if(x1 === x2) {
  console.log("The variables are equal.");
} else {
  console.log("The variables are not equal.");
}


// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
let x3 = 25;
let x4 = 30;
if(x3 > x4) {
  console.log("Variable 3 is lager than variable.")
} else {
  console.log("Variable 4 is larger than variable 3.")
}


// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.
let language = "Arabic";
if(language === "Arabic") {
  console.log("Marhaban")
} else if(language ===  "Spanish") {
  console.log("Hola")
} else if (language === "Bengali") {
  console.log("Hi");
} else {
  console.log("Hello");
}



// 4. Do question 3 again but this time use a `switch` statement.
switch(language) {
  case "Arabic":
    console.log("Marhaban");
    break;
  case "Spanish":
    console.log("Hola");
    break;
  case "Bengali":
    console.log("Hi");
    break;
  default:
    console.log("Hello");
}


// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = "B";
if(numGrade === "A") {
  console.log("Grade: A");
} else if(numGrade === "B") {
  console.log("Grade: B");
} else if(numGrade === "C") {
  console.log("Grade: C")
} else if(numGrade === "D") {
  console.log("Grade: D")
} else {
  console.log("Grade: F");
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
let animalName = "sheep";
let numberOfAnimals = 1;
  if(numberOfAnimals > 1) {
    if(animalName === "sheep") {
      console.log(numberOfAnimals + " " + animalName);
    } else if(animalName === "goose") {
      console.log(numberOfAnimals + " geese");
    }  else if(numberOfAnimals > 1) {
      console.log(numberOfAnimals + " " + animalName + "s"); }
  } else if (numberOfAnimals === 1) {
     if(animalName === "sheep") {
      console.log("1 " + animalName)}
     else if(animalName === "goose") {
      console.log(numberOfAnimals + " goose");
  } else {
      console.log("1 " + animalName);
    }
  }



// 7. Write a block of code that logs whether a given number is even or odd.
let number = 7;
if(number % 2 === 0) {
  console.log("It's even")
}
else {
  console.log("It's odd")
}


// 8. Do question 7 again but use a ternary.
number % 2 === 0 ? console.log("It's even") : console.log("It's odd");


// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let positiveOrNegative = 42;
if(positiveOrNegative > 0) {
  console.log("It's positive");
} else if(positiveOrNegative < 0) {
  console.log("It's negative")
} else {
  console.log("Idk");
}
