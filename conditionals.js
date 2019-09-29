// Problem One

let numOne = 20
let numTwo = 25
if (numOne === numTwo){
    console.log("Variables are equal to each other")
} else {
    console.log("Variables are not equal to each other")
}

// Problem Two

let numX = 5
let numY = 10

if (numX > numY){
console.log ("The greater number of " + numX +" and " + numY +" is " +numX)

}else if (numY > numX){

console.log ("The greater number of " + numX +" and " + numY +" is " +numY)
} else {
console.log ("The numbers are equal")
}

//Problem 3a

let language = "English"

if (language === "Spanish"){
    console.log("Hola al mundo")
} else if (language === "German"){
    console.log("Hallo Welt")
} else {
    console.log("Hello World")
}

// Problem 5

let numGrade = 70

if ( numGrade >= 90){
console.log ("A")
} else if ( numGrade >= 80){
console.log ("B")
}else if (numGrade >=70) {
console.log ("C")
}else if (numGrade >= 65){
console.log ("D")
}else{
console.log ("F")
}

// Problem 6
let animalName = "sheep"
let numberOfAnimals = 100


if (animalName === "sheep") {
console.log(numberOfAnimals + " " + animalName)
}
else if(animalName === "goose" && numberOfAnimals > 1  )
{
console.log(numberOfAnimals + " " + "geese")
}
else if (numberOfAnimals > 1) {
console.log(numberOfAnimals + " " + animalName + "s")
} else {
console.log(numberOfAnimals + " " + animalName)
} 