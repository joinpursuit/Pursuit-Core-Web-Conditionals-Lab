# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.
let a;
let b;
if (a === b){
  console.log(true);
} else {
  console.log(false);
}

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
let x;
let y;
if (x === y){
  console.log("The numbers are equal.");
} else if (x > y){
  console.log("The greater number of "+x+" and "+y+" is "+x+".");
} else {
  console.log("The greater number of "+x+" and "+y+" is "+y+".");
}


3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.
let lang = "spanish";
if (lang === "spanish"){
  console.log("Hola, Mundo");
} else if (lang === "german"){
  console.log("Hallo, Welt");
} else {
  console.log("Hello, World");
}

4. Do question 3 again but this time use a `switch` statement.
let lang = "spanish";
switch(true){
  case lang === "spanish":
  console.log("Hola, Mundo");
  break;
  case lang === "german":
  console.log("Hallo, Welt");
  break;
  default:
  console.log("Hello, World");
  break;
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 100;
if (numGrade >= 90){
  console.log("A");
} else if (numGrade >= 80){
  console.log("B");
} else if (numGrade >= 70){
  console.log("C");
} else if (numGrade >= 60){
  console.log("D");
} else {
  console.log("F");
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animalName = "goose";
let numberOfAnimals = 2;
if(numberOfAnimals === 1 || animalName === "sheep"){
  console.log(numberOfAnimals + " " + animalName);
} else {
  if (animalName === "goose"){
    console.log(numberOfAnimals + " " + "geese");
  } else {
  console.log(numberOfAnimals + " " + animalName + "s");
}
}

7. Write a block of code that logs whether a given number is even or odd.
let num = 12;
if (num % 2 === 0){
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}

8. Do question 7 again but use a ternary.
let num = 12
num % 2 === 0 ? console.log(num + " is even.") : console.log(num + " is odd.");

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let num = 0;
num < 0 ? console.log(num + " is negative.") : num > 0 ? console.log(num + " is positive.") : console.log(num + " is equal to 0.");
