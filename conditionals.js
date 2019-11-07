// For this exercises we are going to create a file called conditionals.js.Copy the description of the exercise as a comment into the file and underneath write your JavaScript code.

// Note: Remember to fork this repo, clone your copy, modify conditionals.js with your answers.Lastly git add your changes, git commit and git push

// Write a block of code that checks and logs whether variables are equal or not.
let fruitOne = "mango"
let fruitTwo = "mango"

if (fruitOne === fruitTwo) {
    console.log("they are both the same")
} else {
    console.log("its not the same")
}
// Write a block of code that logs which of two number variables is larger.
// Your output should look like this( in this example
//     for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
// If the two numbers are equal, log: 'The numbers are equal.'
let x = 96;
let y = 30;

if (x > y) {
    console.log(`The greater number of ${x} and ${y} is ${x}'`)
} else if (x === y) {
    console.log(`The numbers are equal`)
} else {
    console.log(`${y} is the largest`)
}