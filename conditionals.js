//Problem 1
let a
let b

if(a === b){
    console.log("The variables are equal to eachother.");

}else{
    console.log("The variables aren't equal to eachother.");
}

//Problem 2
let c = 5
let d = 10

if(c > d){
    console.log("The greater number of " + c + " and " + d + " is " + c + ".");
}else if(d > c){
    console.log("The greater number of " + c + " and " + d + " is " + d + ".");
}else{
    console.log("The numbers are equal to eachother!");
}
//Problem 3

let english = "Hello World"
let spanish = "Hola Mundo"
let german = "Hallo Welt"
let givenLanguage = "German"

if(givenLanguage === "Spanish"){
    console.log(spanish);
} else if(givenLanguage === "German"){
    console.log(german);
} else {
    console.log(english);
}
//Problem 4

var givenLanguage2 = "German"
switch(givenLanguage2){
    case "Spanish" :
    console.log("Hola Mundo");
    break;
    case "German":
    console.log("Hallo Welt");
    break;
    default:
        console.log("Hello World");
}
//Problem 5

// 5. Create a variable numGrade that will contain a numeric grade (out of 100). 
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

numGrade = 2


if(numGrade >=90 && numGrade <= 100){
    console.log("The student receives an A");
} else if(numGrade >= 80 && numGrade <= 89){
    console.log("The student receives an B");
}else if(numGrade >= 70 && numGrade <= 79){
    console.log("The student receives an C");
}else if(numGrade >= 60 && numGrade <= 69){
    console.log("The student receives an D");
}else if(numGrade <= 59){
    console.log("The student receives an F");
}