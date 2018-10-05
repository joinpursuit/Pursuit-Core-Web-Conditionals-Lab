# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

let num1 = 1
let num2 = 2
if (num1 == num2)
console.log('these are equal')
else
console.log('these are not equal')

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

  let num1 = 1
let num2 = 2
if (num1 > num2)
console.log(num1)
else if (num2 > num1)
console.log(num2)
else
console.log('these numbers are equal')

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

4. Do question 3 again but this time use a `switch` statement.

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let numGrade = 80
if (numGrade > 89)
       console.log('A')
 else if (numGrade > 79)
       console.log('B')
 else if (numGrade > 69)
       console.log('C')
 else if (numGrade > 64)
       console.log('D')
 else {
       console.log('F')
 }


6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

  let animalName = 'dog'
let numberOfAnimals = 1
if (numberOfAnimals > 1)
console.log(numberOfAnimals + " " +animalName + "s")
else
console.log(numberOfAnimals +" " +animalName )

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

7. Write a block of code that logs whether a given number is even or odd.

for(num = 10; num < 21; num++){
   if (num % 2 == 0)
   console.log (num + " is even")
    else
    console.log (num + " is odd") }


8. Do question 7 again but use a ternary.

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
