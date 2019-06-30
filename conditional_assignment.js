// 1. Write a block of code that checks and logs whether variables are equal or not.

let a = 6

if (a === 4){
  console.log('equal')
} else{
  console.log('not the same')
}

let b = 7473

if (b< 6){
  console.log('not equal')
} else if (b > 7){
  console.log ('not equal')
} else if (b <=6){
  console.log('equal')
} else{
  console.log("I don't know")
}


// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'

  let c = 7
  let d = 10

if (c > d){
  console.log('The greater number of ' + c + ' and ' + d + 'is' + d)
} else if (c >= d){
  console.log('The greater number of ' + c + ' and ' + d + 'is' + d)
} else if (c < d){
  console.log('The greater number of ' + c + ' and ' + d + ' is ' + d)
}


// 3. Create a string variable with a language code (e.g. "english", "spanish", "german").
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
// It should default to logging English.

let spanish = 'hola';
let german = 'halo';
let english = 'hello';
let language = english

if (language === spanish){
  console.log(spanish)
} else if (language === german){
  console.log(german)
}else {
  console.log(english)
}


// 4. Do question 3 again but this time use a `switch` statement.
switch(language){
  case (spanish):
  console.log(spanish);
  break;
  case (german):
  console.log(german);
  break;
  default:
  console.log(english)
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 98

if (numGrade <= 65) {
  console.log ("grade F")
} else if (numGrade <= 75){
  console.log("grade D")
} else if (numGrade <= 85){
  console.log("grade C")
} else if (numGrade <= 95){
  console.log("grade B")
} else {
  console.log("grade A")
}


// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
let animalName = "cat"
let numberOfAnimals = 5

if (numberOfAnimals > 1){
  console.log("Then I have a lot's of " + animalName)
} else if (numberOfAnimals = 5 ){
  console.log("I have" + numberOfAnimals + animalName +'s.')
}


//
// // 7. Write a block of code that logs whether a given number is even or odd.
// //
let num1 = 40
if(num1 % 2 === 0){
  console.log ('even')
}else {
  console.log('odd')}
//
//
// // 8. Do question 7 again but use a ternary.
num1 % 2 === 0 ? console.log("Even") : console.log("odd")

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let number = 854
if (number <0 ){
  console.log ("negative")
}else if (number > 0){
  console.log ("positive")
} else{
  console.log ("equal to 0")
}
