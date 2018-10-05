// # Conditional Exercises

// 1. Write a block of code that checks and logs whether variables are equal or not.
console.log("#### Prob 1 ####");

let varOne = 1;
let varTwo = 2;
if(varOne == varTwo){
	console.log(varOne+ " and " +varTwo+ " are equal");
}else{
	console.log(varOne+ " and " +varTwo+ " are not equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
console.log("#### Prob 2 ####");

let numOne = 7;
let numTwo = 9;
if(numOne > numTwo){
	console.log("The greater number of "+ numOne + " and " + numTwo + " is " + numOne);
}else if(numTwo > numOne){
	console.log("The greater number of "+ numOne + " and " + numTwo + " is " + numTwo);
}else{
	console.log("The numbers are equal.");
}
 
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.
console.log("#### Prob 3 ####");

let greetingLang = "";
if(greetingLang === "german"){
	console.log("Hallo Welt");
}else if(greetingLang === "spanish"){
	console.log("Hola Mundo");
}else{
	console.log("Hello World");
}

// 4. Do question 3 again but this time use a `switch` statement. 
console.log("#### Prob 4 ####");

let greetingLanguage = "german";
switch(greetingLanguage) {
	case "german":
		console.log("Hallo Welt");
		break;
	case "spanish":
		console.log("Hola Mundo");
		break;
	default:
		console.log("Hello World");
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
console.log("#### Prob 5 ####");

let numGrade = 95;
if(numGrade >= 95){
	console.log("A");
}else if(numGrade >= 85){
	console.log("B");
}else if(numGrade >= 75){
	console.log("C");
}else if(numGrade >= 65){
	console.log("D");
}else{
	console.log("F");
}
// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:
//   * the number
//   * either in single or plural form. Exp: "5 cats" or "1 dog".
console.log("#### Prob 6 ####");

let animalName = "cheetah";
let numberOfAnimals = 1;
if(numberOfAnimals !== 1){
	console.log(numberOfAnimals + " " + animalName + "s");
}else{
	console.log(numberOfAnimals + " " + animalName);
}

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//will attemp later 

// 7. Write a block of code that logs whether a given number is even or odd.
console.log("#### Prob 7 ####");

let num = 0;
if(num%2===0){
	console.log(num + " is an even number");
}else{
	console.log(num + " is an odd number");
}
// 8. Do question 7 again but use a ternary. 
console.log("#### Prob 8 ####");

num%2 === 0 ? console.log(num + " is an even number") : console.log(num + " is an odd number"); 
// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
console.log("#### Prob 9 ####");

let someNum = -9;
if(someNum > 0){
	console.log(someNum + " is a positive number");
}else if(someNum < 0){
	console.log(someNum + " is a negative number");
}else{
	console.log(someNum + " is equal to 0");
}
