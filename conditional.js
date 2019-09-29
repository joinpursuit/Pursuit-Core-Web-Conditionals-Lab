
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


//Problem Six

let animalName = 'dog'
let numberofAnimals = 4

if (numberofAnimals === 1) {
  console.log(numberofAnimals + " " + animalName)
} else {
   console.log(numberofAnimals + " " + animalName +'s')
}

//Problem Seven
 
let number = 4

if (number % 2 === 0) {
    console.log(number + " is even")
} else {
    console.log(number + 'is odd')
}

//Problem Eight

let twoNum = 4; (twoNum %2===0) ? console.log(twoNum + " is even"): console.log(twoNum  + ' is odd')