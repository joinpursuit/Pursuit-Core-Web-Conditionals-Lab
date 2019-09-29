//1. Write a block of code that checks and logs whether variables are equal or not.
let num1 = 2
let num2 = 4
if (num1 < num2) {
    console.log('not equal')
}
else console.log('equal')

//2. Write a block of code that logs which of two number variables is larger.
//* Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
//* If the two numbers are equal, log: 'The numbers are equal.'
let x = 7
let y = 20
if (x < y) {
    console.log('The greater number of 7 and 20 is ' + y)
}
else console.log('The numbers are equal')

//3. Create a string variable with a language code (e.g. "english", "spanish", "german"). 
//Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages. 
//It should default to logging English.
let english = 'Hello world'
let spanish = 'Hola mundo'
let german = 'Hallo welt'
let greeting = ""
if (greeting = english) {
    console.log (english)
}
else if (greeting !== english) {
    console.log(spanish)
}
else (german)