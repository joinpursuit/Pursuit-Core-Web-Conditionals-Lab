
//Problem One

let var1 = "blue"
let var2 = "blue"

if (var1 === var2) {
    console.log('Variables are equal')
} else {
    console.log('Variables are not equal')
}


//Problem Two
let num1 = 34
let num2 = 27
if (num1 > num2){
   console.log("The greater number of " + num1 + " and " + num2 + " is " +num1)
} else if (num1 < num2) {
   console.log("The greater number of " + num1 + " and "+ num2 + " is " + num2)
} else{
   console.log("The numbers are equal.")
}


//Problem Three
let code = 'spanish'

if (code === 'spanish') {
  console.log('Hola, Mundo')
} else if(code === 'german' ) {
  console.log('Hallo, Welt')
} else if (code === 'portugese'){
  console.log('Ola, Mundo')
} else {
  console.log('Hello, World')
}

//Problem Five
let numGrade = 96

if (numGrade<=65){
    console.log("F")
} else if (numGrade<=70){
    console.log("D")
} else if (numGrade <= 80){
    console.log("C")
} else if (numGrade <= 90){
    console.log("B")
} else {
    console.log("A")
}