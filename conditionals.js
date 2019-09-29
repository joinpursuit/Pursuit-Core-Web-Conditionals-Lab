// 1. Write a block of code that checks and logs whether variables are equal or not.
let num1 = 2;
let num2 = 2;
if(num1 === num2) {
  console.log("number is equal");
} else {
console.log("number is not equal");
}

// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

let numX = 5;
let numY = 10;
if (numX > numY) {
    console.log("The greater number of " + numX + " " + " and " + numY + " " + " is " + " " + numX);
} else if (numX < numY) {
    console.log("The greater number of " + numX + " " + "and " + numY + " " + "is" + " " + numY);
} else {
    console.log("The numbers are equal");
}
//3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
//It should default to logging English.
let eng = "English"
let ger = "German"
let spa = "Spanish"
let lang = "German"

if (lang === ger){
    console.log ("Hallo Walt")
} else if (lang === spa){
    console.log ("Hola Munda")
} else {
    console.log (eng)
}

// 4. Do question 3 again but this time use a `switch` statement. 
let language = ""
switch (language){
    case "Spanish":
    console.log("Hola Munda");
    break;
case "German": 
    console.log("Hallo Welt");
    break;
default:    
    console.log("Hello World");
    break;
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
let numGrade = 109;
if (numGrade >= 90){
    console.log ("A")
}else if (numGrade > 79 && numGrade < 90){
    console.log ("B")
}else if (numGrade > 69 && numGrade < 80){
    console.log ("C")
}else if (numGrade > 59 && numGrade < 70){
    console.log ("D")
}else {
    console.log ("F")
}

//6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
let animalName = "dog"
let numberOfAnimals = 1
if (numberOfAnimals > 1){
    console.log ( numberOfAnimals + " " + animalName + "s")
}else{
    console.log (1 + " " + animalName)
}

let nameAnimal = "goose"
let animalNumber = 1
if (animalNumber > 1){
    nameAnimal = "geese"; 
    console.log (animalNumber + " " + nameAnimal)
}else{
    console.log (1 + " " + nameAnimal)
}

// 7. Write a block of code that logs whether a given number is even or odd.
let givenNumber = 7
if ([givenNumber % 2] > 0){
    console.log ("The number is odd.")
}else{
    console.log ("The number is even.")
}