# Conditional Exercises
js ```
//Conditional Exercises - Rinat Tregerman
//1
let var1 = "hi"
let var2 = "hello"
if (var1===var2) {
  console.log(var1+" equals "+var2)
} else {
  console.log("variables are not equal")
}
//2
let num1 = 4
let num2 = 5
if (num1>num2) {
  console.log("The greater number of "+num1+" and "+num2+" is "+num1)
} else if (num2>num1) {
  console.log("The greater number of "+num1+" and "+num2+" is "+num2)
} else {
  console.log("The numbers are equal")
}
//3
let language = "Spanish";
if (language==="Spanish") {
  console.log("Hola Mundo");
} else if (language==="Italian") {
  console.log("Ciao Mondo");
} else if (language==="Russian") {
  console.log("Привет мир");
} else {
  console.log("Hello World")
}
//4
let language2 = "spanish";
switch (language2) {
  case "spanish":
    console.log("Hola Mundo");
    break;
  case "Italian":
    console.log("Ciao Mondo");
    break;
  case "Russian":
    console.log("Привет мир");
    break;
  default:
  console.log("Hello World")
}
//5
let numGrade = 85;
let letterGrade = "";
if (numGrade >= 90) {
  letterGrade = "A";
} else if (numGrade >= 80) {
  letterGrade = "B";
} else if (numGrade >= 70) {
  letterGrade = "C";
} else if (numGrade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F"
}
console.log(letterGrade)
//6 - assuming you don't have a negative number of animals.... hopefully.
let animalName = "cat";
let numberOfAnimals = 0;
if (numberOfAnimals > 1 || numberOfAnimals === 0) {
  console.log(numberOfAnimals +" "+ animalName + "s")
} else {
  console.log(numberOfAnimals +" "+ animalName)
}
//7
let myNum = -4;
if (myNum%2 === 0) {
  console.log(myNum+" is even");
} else {
  console.log(myNum+" is odd");
}
//8
let isEven = 4;
isEven%2===0 ? console.log(isEven+" is even"):console.log(isEven+" is odd")
//9
let givenNum = -2;
if (givenNum>0) {
  console.log(givenNum+" is positive");
} else if (givenNum<0) {
  console.log(givenNum+" is negative");
} else {
  console.log(givenNum+"is 0");
}
```
