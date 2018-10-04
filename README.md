# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.
let var  a = "Hello"
let var  b = "Hey"
if (a === b){
console.log("They are equal")
}else{
console.log("not the same")
}
2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

let x = 25
let y = 25
if(x > y){
console.log("the greater number of " + x +" and " + y + " is " + x);
}
else if(y > x){
console.log("the greater number of " + x +" and " + y + " is " + y)
}
else{
console.log("The numbers are equal")
}

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let language = "english"

if(language = "spanish"){
  console.log("Hola mundo");
}else if(language ="italian"){
  console.log("Ciao Mondo");
}else if(language ="french"){
  console.log("Bonjeur le monde");
}else{
  console.log("Hello World")
}


4. Do question 3 again but this time use a `switch` statement.

var language ="english";
switch (language){
  case "spanish":
  console.log("Hola mundo");
  break;
  case "italian":
  console.log("Ciao Mondo");
  break;
  case "french":
  console.log("Bonjeur le monde");
  break;
  default:
  console.log("Hello World");
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 99;
if(numGrade >= 90){
  console.log("A");

}else if(numGrade >= 80){
  console.log("B");
}else if(numGrade >= 70){
  console.log("C");
}else if(numGrade >= 60){
  console.log("D");
} else {
  console.log("F");
}
6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

let animalName ="dog";
numberOfAnimals=5;

if(numberOfAnimals>1){
  console.log(numberOfAnimals+ " " + animalName +"s");

} else{
  console.log(numberOfAnimals+ " " + animalName)
}
Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

7. Write a block of code that logs whether a given number is even or odd.

let aNumber= 5;
if(aNumber % 2 === 1){
  console.log("thats and odd number");
} else{
  console.log("thats an even number");
}

8. Do question 7 again but use a ternary.
let aNumber = 6

aNumber % 2 === 1 ? console.log("odd") : console.log("even")

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let pNumber = -12
if(pNumber>0){
  console.log("Positive Number");
} else if(pNumber < 0){
  console.log("Negative Number");
}else{
  console.log("That number is 0");
}
