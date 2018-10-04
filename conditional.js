// # Conditional Exercises

// 1. Write a block of code that checks and logs whether variables are equal or not.

let a=2;
let b=3;

if (a === b){
  console.log(a + " is equal to " + b)
}else{
  console.log(a + " does not equal "+ b)
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let c=5;
let d=10;

if (c > d){
  console.log("The greater number of " + c + " and " + d + " is " + c)
}else if (d > c){
  console.log("The greater number of " + c + " and " + d + " is " + d)
}else{
  console.log("The numbers are equal.")
}

// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let language = "english";

if(language === "spanish"){
  console.log("Hola, El Mundo")
}else if(language ==="french"){
  console.log("Bonjour, Le Monde");
}else{
  console.log("Hello, World")
}

// 4. Do question 3 again but this time use a `switch` statement.


switch (language = "spanish"){
  case "spanish":
    console.log("Hola, El Mondo");
    break;
  case "french":
    console.log("Bonjour, Le Monde");
    break;
  default:
    console.log("Hello, World");
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 30;

if(numGrade >=90){
  console.log("A");
}else if (numGrade>=80){
  console.log("B");
}else if (numGrade>=70){
  console.log("C");
}else if (numGrade>=60){
  console.log("D");
}else if (numGrade>=50){
  console.log("E");
}else {
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

let animalName = "goose"
let numberOfAnimals = 5

if (animalName ==="sheep" || animalName==="bison" || animalName==="deer"){
  console.log(numberOfAnimals + " " + animalName)
}else if (animalName ==="goose" && numberOfAnimals > 1){
  console.log(numberOfAnimals + " " + "geese")
}else if(animalName ==="goose" && numberOfAnimals ===1){
  console.log(numberOfAnimals + " " + animalName);
}else if(numberOfAnimals > 1){
  console.log(numberOfAnimals + " " + animalName + "s");
}else {
    console.log(numberOfAnimals + " " + animalName);
}

// if (animalName === "cat"){
// if (numberOfAnimals === 1){

// 7. Write a block of code that logs whether a given number is even or odd.

let n = 0;

if (n%2 ===0){
  console.log(n + " is even.")
}else{
  console.log(n + " is odd.");
}

// 8. Do question 7 again but use a ternary.

let evenOrOdd = n%2 ===0 ?  "EVEN" : "ODD";
console.log(evenOrOdd)

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let p = -9;

if (p > 0){
  console.log(p + " is positive.")
}else if (p < 0){
  console.log(p + " is negative.");
}else{
  console.log(p + " is equal to 0.");
}
