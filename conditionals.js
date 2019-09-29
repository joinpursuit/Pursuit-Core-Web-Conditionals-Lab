//Problem1


let x = 2
let y = 2

if (x > y){
    console.log("Sorry but " + y + " is not greater than " + x);
}else if ( x === y){
    console.log("Ok, both of these numbers are equal")
}else {
    console.log("Sorry but " + x + " is not greater than" + y);
}


//Problem2 

let A = 7
let B = 3

if (A > B) {
  console.log("The greater number of " + A + " and " + B + " is " + A);
}else if (A < B) {
    console.log("The lesser numner of " + A + " and " + B + " is " + B);
}else { 
    console.log("Both numbers are equal");
}

//Problem3

let hey = "Hello";

if (hey === "hallo"){ 
console.log("Hallo Welt");
} else if (hey === "hola"){
    console.log("Hola, Mundo");
} else {
    console.log("Hello World");
}


//Problem4

switch ("German") {
 case "English":
console.log("Hello");
// code block 
break;
case "Spanish":
console.log("Hola");
// code block 
break;
case "German":
console.log("Hallo");
// code block 
break; 
default:
     console.log("No Language")
     // code block 
    }


    //Problem5

    let number = 83

    if (number > 90){
        console.log("A Grade");
    } else if (number > 79 < 90){
        console.log("B Grade")
    } else if (number > 69 < 80){
        console.log("C Grade");
    } else if (number > 59 < 70){
        console.log("D Grade");
    } else if (number < 60){
        console.log("F! Fail!");
    }


    //Problem6

    let animalName = "cat"
    let numberOfAnimals = 0
    if(numberOfAnimals === 1) {
        console.log("You have " + numberOfAnimals + " " + animalName + ".");
    } else if (numberOfAnimals > 1){
        console.log("You have " + numberOfAnimals + " " + animalName + "s.");
    } else {
        console.log("You have no " + animalName);
    }


    //Problem7

let k = 28

if (k%2 === 0) {
    console.log("Even Number!");
} else {
        console.log("Odd Number!");
}



//Problem8

k%2 === 0 ? console.log("Even Number!") : console.log("Odd Number!")


//Problem9

let numbeR = 0

if (numbeR > 0) {
    console.log("Positive Number!");
} else if (numbeR < 0) {
    console.log("Negative Number!"); 
} else {
    console.log("Issa 0");
}