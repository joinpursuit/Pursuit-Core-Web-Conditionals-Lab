# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

**let x = 1
let y = 2

x === y ? "They are EQUAL" : "They are NOT EQUAL"

// or

let x = 4
let y = 40

if(x === y) {
  console.log( "The two variables is equal")
} else
{
  console.log("They are not equal")
}**


2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

  **let x = 400
  let y = 4000

  if (x > y){
    console.log ( "THE NUMBER " + x + " AND " + y + " ... X IS THE GREATER NUMBER" + " VALUE IS " + x );
  }
  else if (x < y ) {
    console.log ( "THE NUMBER " + x + " AND " + y + " ... Y IS THE GREATER NUMBER" + " VALUE IS " + y);
  }
  else {
    console.log ("This VALUEs are the same. :)")**



3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

**let selectedLanagauge = "Spanish"

if (selectedLanagauge === "German"){
  console.log ("In German; Hello World! is Hallo Welt")
}
else if (selectedLanagauge === "Spanish"){
  console.log ("In Spanish, Hello World! is Hola Mundo")
}
else {
  console.log ("Please choose a lanaguge in German, English, or Spanish")
}**

4. Do question 3 again but this time use a `switch` statement.

**switch(selectedLanagauge) {
  case "English":
  console.log ("Hello World is the English way of lanagues!")
  break
  case "German":
  console.log ( "In German; Hello World! is Hallo Welt")
  break
  case "Spanish":
  console.log (" In Spanish, Hello World! is Hola Mundo")
  break
  default:
  console.log (" Please choose a German, English, or Spanish")
}**

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

**let numGrade = 60
if (numGrade >= 100) {
  console.log("YOU GOT AN A!")
}
else if (numGrade >= 80 ) {
  console.log(" YOU GOT a B!")
}
else if (numGrade >= 60) {
  console.log(" YOU GOT a C!")
}
else if (numGrade >= 50) {
  console.log(" You got a D")
}
else if (numGrade >= 0) {
  console.log(" You got A JUST KIDDING! FAIL!")}**

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

**let animalName = "Dog"
  let numberOfAnimals = 3
if (numberOfAnimals === 1){
  console.log (numberOfAnimals + " " + animalName)}
else {
	console.log (numberOfAnimals + " " + animalName + "s")}**

7. Write a block of code that logs whether a given number is even or odd.

**let thisOddNum = -9293293923
if (thisOddNum % 2 === 0){
  console.log ("This is a EVEN NUMBER")}
  else {
    console.log("This is not a even number")
  }**


8. Do question 7 again but use a ternary.

*let thisOddNum = 22
thisOddNum > 0 ? "This is a Even Number" : " This is A ODD NUMBER"*

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
***let checkNum = -000
if (checkNum > 0 ){
  console.log ("This is a positive number")}
	else if (checkNum < 0){
    console.log( "This is a negative number")
  }
  else  {
    console.log ("This is a ZEEEERO?")
  }***
