//1. Write a block of code that checks and logs whether variables are equal or not.
let num1 = 2
let num2 = 4
if (num1 < num2) {
    console.log('not equal')
}
else console.log('equal')

//2. Write a block of code that logs which of two number variables is larger.
//* Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//* If the two numbers are equal, log: 'The numbers are equal.'
let x = 7
let y = 20
if (x < y) {
    console.log('The greater number of 7 and 20 is ' + y)
}
else console.log('The numbers are equal')

//3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
//It should default to logging English.
let english = 'Hello world'
let spanish = 'Hola mundo'
let german = 'Hallo welt'
let greeting = ""
if (greeting === english) {
    console.log (english)
}
else if (greeting !== english) {
    console.log(spanish)
}
else (german)
//Do question 3 again but this time use a `switch` statement. 

//let greeting = 'hello world';
switch (greeting) {
  case 'spanish':
    console.log('hola, mundo');
    break;
  case 'german':
      console.log("hallo, Welt");
      break
  case 'french':
    console.log('bonjour le monde');
    break;
    default:
        console.log("i cant speak another language")
}

//5. . Use an if - eCreate a variable numGrade that will contain a numeric grade (out of 100)
//if , else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 90
 if ('a' >= numGrade) {
    console.log("grade A is 90 or more");
 } else if ('b'< numGrade || 'b' > 80) {
     console.log("Grade B is between 90 or 80")
 } else if ('c'< numGrade || 'c' >= 70 || 'c' <= 79){
     console.log("Grade C is between 70 and 80");
 } else if ('d'< numGrade || 'd' >= 69 || 'd' <= 50){
     console.log("grade d is between 60 and 50")
 } else {
     console.log("anything else is F")
 }

//  6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let animalName = ('cat')
let numberOfAnimals = 2
if (numberOfAnimals >= 2) {
    console.log("Two cats")
} else {
    console.log('One cat')
}

//7. Write a block of code that logs whether a given number is even or odd.
let evenNumber = 