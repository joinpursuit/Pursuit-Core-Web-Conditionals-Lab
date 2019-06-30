// 1. Write a block of code that checks and logs whether variables are equal or not.
let var1 = 10, var2 = 10;

if( var1 === var2){
  console.log("the variables are equal")
}
else{
  console.log("the variables are not equal")
};

/* 2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.' */
var1 = 20;
var2 = 25;

if(var1 > var2){
  console.log("The greater number is " + var1);
}
else if(var1 < var2){
  console.log("The greater number is " + var2);
}
else{
  console.log("The numbers are equal");
};

/* 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English. */
let langCode = 2;

if(langCode === 1){
  console.log("Hola Mundo")
}
else if(langCode === 2){
  console.log("Hallo Welt")
}
else{
  console.log("Hello World")
}

//4. Do question 3 again but this time use a `switch` statement.
switch(langCode){
  case 1:
    console.log("Hola Mundo")
break;
  case 2:
    console.log("Hallo Welt")
 break;
  default:
    console.log("Hello World")
}

/* 5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F". */

let numGrade = 75;

if(numGrade >= 90){
  console.log("A");
}
else if(numGrade >= 80){
  console.log("B");
}
else if(numGrade >= 70){
  console.log("C");
}
else if(numGrade >= 65){
  console.log("D");
}
else{
  console.log("F");
}

/*6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese". */
let animalName = "dog", numberOfAnimals = 6;

if(numberOfAnimals > 1){
  console.log(numberOfAnimals + " " + animalName + "s")
}
else{
  console.log(numberOfAnimals + " " + animalName)
}

//7. Write a block of code that logs whether a given number is even or odd.
let num = 8;
if(num%2 === 0){
  console.log("is even")
}
else{
  console.log("is odd")
}

// 8. Do question 7 again but use a ternary.

num%2 === 0?console.log("is even"):console.log("is odd");

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
num = 0;
if(num > 0){
  console.log("number is positive");
}
else if(num < 0){
  console.log("number is negative");
}
else{
  console.log("number is equal to 0");
}
