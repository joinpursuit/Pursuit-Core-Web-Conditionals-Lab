# Conditional Exercises

//1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 15
let num2 = 10

if(num1 === num2){
console.log("YES");
} else{
console.log("NOPE!")
}

//2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

  let num3 = 9;
  let num4 = 10;

  if(num3 > num4){
    console.log('The greater number of ' + num3 + ' and  ' + num4 + ' is ' + num3)
  } else if(num4 > num3) {
      console.log('The greater number of ' + num3 + ' and ' + num4 + ' is ' + num4 )
    } else {
      console.log('The numbers are equal')
    }

//3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.


let language = 'spanish';

if(language ==='spanish') {
  console.log("Hola, Mundo ")
} else if( language === 'german') {
  console.log("Hallo , Welt")
} else {
  console.log(' Hello,World!')
}

//4. Do question 3 again but this time use a `switch` statement.


switch('spanish') {

  case 'spanish':
   console.log("Hola, Mundo")
    break;

  case 'german':
    console.log("Hallo , Welt")
    break;

  default:
    console.log("Hello, world!")
}


//5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 89

if(numGrade >= 90){
  console.log("You got an A!")
} else if(numGrade >= 80){
  console.log("You got a B!")
} else if( numGrade >= 70) {
  console.log("You got a C!")
} else if ( numGrade >= 60) {
  console.log("You get a D")
} else {
  console.log("You got an F!!")
};


//6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

let animalName = "cat"
let numberOfAnimals = 3

if( numberOfAnimals > 1) {
 console.log("There are " + numberOfAnimals + " " + animalName + "'s" )
} else {
console.log("There is 1" + animalName)
}

//7. Write a block of code that logs whether a given number is even or odd.
let candyAmount = 93

if(candyAmount % 2) {
  console.log("Even number")
} else {
  console.log("Odd number")
}

//8. Do question 7 again but use a ternary.

let candyAmount = "93"
 candyAmount % 2 ? console.log('Even Number') : console.log('Odd number')

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.


let givenNumber = 13

if( givenNumber === 0){
  console.log("Number is equal to 0")
} else if( givenNumber > 0){
  console.log("Positive Number")
} else {
   console.log("Negative Number")
}
