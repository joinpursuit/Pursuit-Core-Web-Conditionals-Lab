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