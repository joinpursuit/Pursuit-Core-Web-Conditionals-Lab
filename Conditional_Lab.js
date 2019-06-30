/*
# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.
*/
let var1 = 777;
let var2 = 777;

if (var1 === var2){
  console.log("\n The two numbers ", var1, " and ", var2, "are equal");
} else {
  console.log("\n The two numbers ", var1, " and ", var2, "are NOT equal");
}

/*
2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
*/
let x = 547;
let y = 53;

if (x > y) {
  console.log("\n The greater number of ", x, " and ", y , " is ", x);
} else if (x<y) {
  console.log("\n The greater number of ", x, " and ", y , " is ", y);
} else {
  console.log("\n The two numebers ", x, " and ", y , " are equal ")
}

/*
3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.
*/
let Lang1 = "French";
let Lang2 = "Spanish";
let Lang3 = "German";
let LangIn = "Spanish";

if (LangIn === Lang1){
  console.log("\n Salut tout le monde");
} else if (LangIn === Lang2){
  console.log("\n Hola Mundo");
} else if (LangIn === Lang3){
  console.log("\n Hallo Welt");
} else {
  console.log("\n Hello World");
}


/*
4. Do question 3 again but this time use a `switch` statement.
*/
switch(LangIn){
  case Lang1:
  console.log("\n Salut tout le monde");
  break;
  case Lang2:
  console.log("\n Hola Mundo");
  break;
  case Lang3:
  console.log("\n Hallo Welt");
  break;
  default:
  console.log("\n Hello World");
}

/*
5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
*/
let numGrade = 80;

if (numGrade >= 90){
  console.log("\n Your grade is A");
} else if (numGrade >= 80 && numGrade < 89){
  console.log("\n Your grade is B");
} else if (numGrade >= 70 && numGrade < 79){
  console.log("\n Your grade is C");
} else if (numGrade >= 60 && numGrade < 69){
  console.log("\n Your grade is D");
} else {
  console.log("\n Your grade is F");
}

/*6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".
*/
let animalName = "Dove";
let numberOfAnimals = 10;

if (numberOfAnimals > 1){
    if (animalName === "Sheep" || animalName === "Fish"){
      console.log("\n I have " + numberOfAnimals + " " + animalName);
    } else if (animalName === "Goose"){
      console.log("\n I have " + numberOfAnimals + " Geese");
    } else console.log("\n I have " + numberOfAnimals + " " + animalName + "s");
} else if (numberOfAnimals === 1 ){
    if (animalName === "Geese"){
      console.log("\n I have " + numberOfAnimals + " Goose");
    } else console.log("\n I have " + numberOfAnimals + " " + animalName);
} else console.log("\n I have no animal")
/*
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// Same problem using switch
*/
if (numberOfAnimals > 1){
  switch (animalName){
  case "Sheep":
    console.log("\n I have " + numberOfAnimals + " " + animalName);
    break;
  case "Fish":
    console.log("\n I have " + numberOfAnimals + " " + animalName);
    break;
  case "Goose":
    console.log("\n I have " + numberOfAnimals + " Geese");
    break;
    default: console.log("\n I have " + numberOfAnimals + " " + animalName + "s");
}
} else if (numberOfAnimals === 1 ){
    if (animalName === "Geese"){
      console.log("\n I have " + numberOfAnimals + " Goose");
    } else console.log("\n I have " + numberOfAnimals + " " + animalName);
} else console.log("\n I have no animal")

/*
7. Write a block of code that logs whether a given number is even or odd.
*/
let givenNumber = -20;

if (givenNumber % 2 === 0){
  console.log("\n Number ", givenNumber, " is even");
} else console.log("\n Number ", givenNumber, " is odd");

/*
8. Do question 7 again but use a ternary.
*/
givenNumber % 2 === 0 ?
console.log("\n Number ", givenNumber, " is even") : console.log("\n Number ", givenNumber, " is odd");

/*
9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
*/
let pNumber = -99;

if (pNumber > 0){
  console.log("\n", pNumber, " is a positive number");
} else if (pNumber < 0){
  console.log("\n", pNumber, " is a negative number");
} else {
  console.log("\n", pNumber, " is null")
}
