// 1. Write a block of code that checks and logs whether variables are equal or not.

console.log("Problem1")
let str1 = "Hello"
let str2 = "world"
if(str1.length === str2.length) {
  console.log(`Both strings have the same length `)
} else {
  console.log(`The strings have different length `)
}
// 2. Write a block of code that logs which of two number variables is larger.
//   * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//   * If the two numbers are equal, log: 'The numbers are equal.'
console.log("Problem2")
let x = 5;
let y = 5;
if(x > y) {
  console.log(`The greater number of ${x} and ${y} is ${x}.`)
} else if(x < y) {
  console.log(`The greater number of ${x} and ${y} is ${y}.`)
} else {
  console.log(`The numbers are equal.`)
}

 
// 3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
// Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
// It should default to logging English.

console.log(`Problem3`)
let language = "Chinese";
if(language === "French") {
  console.log(`Bonjour,  monde`);
} else if(language === "Spanish") {
  console.log(`Hola, Mundo`);
}else if(language === "Chinese") {
  console.log(`你好，世界: Nǐ hǎo, shìjiè`);
} else {
  console.log(`Hello, World`)
}
// 4. Do question 3 again but this time use a `switch` statement. 
console.log("Problem4")
switch(language){
  case "French" : 
    console.log(`Bonjour,  monde`);
    break;
  case "Spanish" : 
    console.log(`Hola, Mundo`);
    break;
  case "Chinese" :
    console.log(`你好，世界: Nǐ hǎo, shìjiè`);
    break;
  default : 
  console.log(`Hello, World`);
}

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
let numGrade = 40;
if(numGrade > 90) {
  console.log(`Your grade is : A`)
} else if(numGrade > 80) {
  console.log(`Your grade is : B`)
} else if(numGrade > 70) {
  console.log(`Your grade is : c`)
} else if(numGrade > 60) {
  console.log(`Your grade is : d`)
} else {
  console.log(`Your grade is : F`)
}

// 6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

// Use an if - else statement to log:

//   * the number

//   * either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

console.log("Problem 6")

let animalName = "geese";
let numberOfAnimals = 1;
if (animalName === "goose" && numberOfAnimals > 1 ){
  console.log(`${numberOfAnimals} geese.`)
} else if (numberOfAnimals > 1) {
  console.log(`${numberOfAnimals} ${animalName}s.`)
} else {
  console.log(`${numberOfAnimals} ${animalName}.`)
}

// 7. Write a block of code that logs whether a given number is even or odd.
console.log(`Problem 7`)

let num = 4;
if (num % 2){
  console.log(`${num} is odd number.`)
} else {
  console.log(`${num} is even number.`)
}

// 8. Do question 7 again but use a ternary. 

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
