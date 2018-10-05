# Conditional Exercises
Jonathan Erquinigo

1. Write a block of code that checks and logs whether variables are equal or not.
cond1 = 10
cond2 = 12
cond3 = 10

if(cond1 == cond2){
console.log("is not equal");

}else if(cond1 == cond3){
console.log("is now equal");
}else
console.log("please try again")

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

  let x = 5;
let y = 10;
// log a number that is greater than the other

if(x < y){
	console.log('the value of ' + x + ' is smaller than ' + y);
}else if(x == y){
console.log("the numbers are equal");

}else
console.log('please try again');

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let japanese = "Konnichiwa";
let spanish = "hola";
let french = "bonjour"
let english = "Hello"

if(japanese === "hej"){
	console.log("This is Japanese");

}else if(spanish === "Konnichiwa"){
console.log("this is spanish");


}else if(french === "hola"){
	console.log("this is french");
}
 else{
  console.log('printing Hello World');
  }


4. Do question 3 again but this time use a `switch` statement.

let english = "Hello"

switch(english) {
  case "bonjour":
  console.log("Hello in French");
  break;

  case "Hola":
  console.log("Hello in spanish");
  break;

  case "Konnichiwa":
  console.log("Hello in Japanese");
  break;
  default:
  console.log("printing hello world");

}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 80;



if (numGrade >= 100){
	console.log("the grade is A");
}else if (numGrade >=85){
	console.log("The grade is B");
}else if (numGrade >= 80){
	console.log("The grade is C");
}else if (numGrade <= 65){
	console.log("The grade is D");
}else if (numGrade <= 55){
	console.log("The grade is F");
}else {
console.log("try again");
}

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

let numberOfAnimals = 2;
let animal = "sheep";



if(animal === "sheep"){
  console.log(numberOfAnimals +  " " + animal  )
}
else if(numberOfAnimals > 1 || animal === "goose"){
console.log("there are "+ numberOfAnimals +  " " + animal + "s" );
	}
  else if(animal === "geese"){
console.log("there are " + numberOfAnimals + "sheep");

  }

  else {
    console.log("there is " + numberOfAnimals + " " + animal );
  }



7. Write a block of code that logs whether a given number is even or odd.


value = 50;

if(value % 2 == 0){
 console.log(value + " is an even number");

}else{
	console.log(value + " is an odd number")
}


8. Do question 7 again but use a ternary.
let value = 50;

value % 2 == 0 ? value + " is an even number" : value + "is an odd number"

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let value = 45;

if(value > 0){
 console.log('the number is positive');
}else if(value < -1){
	console.log("the number is negative")

}else if(value === 0){
	console.log("the number is zero")
}else{
	console.log("try again");
}
