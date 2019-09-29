//1
//function check(num1, num2){
    let num1 = 1
    let num2 = 3
    if (num1 === num2){
    return console.log("They are equal")
    } else console.log("Not Equal")
//}
//console.log(check(1,3));

//2
//function numLarger (num1, num2){

    if(num1 > num2){
        console.log("The greater number of "+num1+" and "+num2+" is " +num1)
    } else console.log("The greater number of "+num1+" and "+num2+" is " +num2)
//}
//console.log(numLarger(1,3));

//3
let language = "english"
if(language === "english"){
    console.log("Hello World")
} else if(language === "spanish"){
    console.log("Hola Mundo")
} else console.log("Bonjour le monde")

//4
language = "spanish"
switch(language) {
    case 'english':  
    console.log("Hello World")
      break;
  
    case "spanish":  
    console.log("Hola Mundo")
      break;
  
    default:
        console.log("Bonjour le monde")
}

//5
let numGrade = 77

if(numGrade >= 90 ){
    console.log("A")
} else if(numGrade >= 80){
    console.log("B")
} else if(numGrade >= 70 ){
    console.log("C")
} else 
console.log("D")

//6 
let animalName = "cat"
let numOfAnimal =1

if(numOfAnimal > 1){
    console.log(animalName + "s")
} else console.log(animalName)

//7
num = 4
if(num % 2 === 0){
    console.log("even");
    
}
else console.log("odd");

//8 
num % 2 === 0? console.log("even") : console.log("odd");

//9

number = 00000;
if(number < 0){
    console.log("Negative");
    
}else if( number === 0 ){
    console.log("equal to 0");
    
}else console.log("Positive");



