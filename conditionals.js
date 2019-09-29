// Problem 1

let Pokemon = '150';
if (Pokemon === '150') {
    console.log("You've caught them all");
} else {
    console.log("Keep trying");
}

// This is problem #2

let num1 = ""
let num2 = 12

if (num1 > num2) {
    console.log("Number 1 is larger!")
} else if (num2 > num1) {
    console.log("Number 2 is larger")
} else if (num1 === num2) {
    console.log("The numbers are equal")
} else {
    console.log("Please input a number")
}


// Problem 3


let language = 'Spanish';

if (language === 'English') {
    console.log('Hello, World')
} else if (language === 'Spanish') {
    console.log ('Hola, Mundo') 
} else if (language === 'German') {
    console.log ('Hallo, Welt')
} else {
    console.log ('Not a recognized language')
}



// This is Problem #5

let numGrade = 76

if (numGrade <= 50) {
    console.log("F")
} else if (numGrade > 51 && numGrade <= 65) {
    console.log("D")
} else if (numGrade > 65 && numGrade <= 75) {
    console.log("C") 
} else if (numGrade > 75 && numGrade <= 85) {
    console.log("B")
} else { 
    console.log("A")
}
