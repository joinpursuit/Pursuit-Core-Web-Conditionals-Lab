# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 24
let num2 = 25
if (num1 === num2){
  console.log ("equal")
} else {
  console.log ("not equal")
}


2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

let num1 = 5
let num2 = 10

if (num2 > num1){
  console.log ('Its greater! yeaaaah boyyyy!')
}
if (num2 === num1){
  console.log ('The numbers are equal!')
}



3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

let lang1 = 'english'

if (lang1 === 'english'){
  console.log ('Hello, World!')
} else if (lang1 === 'german'){
  console.log ('Hallo, Welt!')
} else if (lang1 === 'spanish'){
  console.log ('Hola, Mundo!')
}
console.log ('We are talking in english!')


4. Do question 3 again but this time use a `switch` statement.

let lang1 = "English";
switch (lang1){
  case "Spanish":
  console.log("We are speaking Spanish");
  break;
  case "German":
  console.log("We are speaking German");
  break;
  case "English":
  console.log("We are speaking English")
  break;
  default:
  console.log('English is English!')
}

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = '100'

if (numGrade > 90){
  console.log ("You got an A!")
}else if (numGrade > 80){
  console.log ("You got a B!");
  }else if (numGrade > 70){
  console.log ("You got a C!");
  }else if (numGrade > 60){
    console.log ("You got a D!");
  }else if (numGrade < 55){
    console.log ("You got an F! You Failed!")
  }
  console.log ('You are a scholar!')



6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".
  let animalName = 'cat'
let numberOfAnimals = 1

if (numberOfAnimals > 1){
  console.log (numberOfAnimals + " " + animalName + 's')
} else if (numberOfAnimals === 1){
  console.log (numberOfAnimals + " " + animalName)
}

let animalName = 'donkey'
let numberOfAnimals = 4

if (numberOfAnimals > 1){
  console.log (numberOfAnimals + " " + animalName + 's')
} else if (numberOfAnimals === 1){
  console.log (numberOfAnimals + " " + animalName)
}


Bonus: Make it handle a few collective nouns like "sheep" and "geese".

7. Write a block of code that logs whether a given number is even or odd.

let favNum = 3

if (favNum % 2 === 0){
  console.log('The number is even.')
} else {
  console.log ('The number is odd.')
}

8. Do question 7 again but use a ternary.

2 === 3 ? 3 : 3

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
let favNum = -167

if (favNum > 0){
  console.log('The number is positive.')
} else if (favNum < 0) {
  console.log ('The number is negative.')
} else if (favNum === 0) {
  console.log ('The number is 0.')
}
