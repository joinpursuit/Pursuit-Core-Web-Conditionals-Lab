//Problem 1
let number = 1
let number2 = 1
if (number === number2) {
    console.log("we are equal");
}
    else{ console.log('we are not equal')
}

//Problem 2
// if (number > number2) {
//     console.log('The greater number of ' + number +" and " + number2 + ' is ' + number);
// }
//     else{ console.log('The greater number of ' + number +" and " + number2 + ' is ' + number2)
// }

if (number > number2) {
    console.log(number + 'is greater')
}
    else if(number2 > number) {
        console.log( number2 + "is greater")
    }
    else if (number === number2) {
        console.log('we are equal')
    }

//Problem 3
let lang1 = "Spanish"
if (lang1 === "English") {
    console.log("Hello, world")
} else if (lang1 === "Spanish") {
    console.log("Hola, Mundo")
} else if (lang1 === "German") {
    console.log("Hallo, Welt")
} else {
    console.log("Hello, wolrd")
}

switch ("English") {
    case "English":
        console.log("Hello, World!");
    break;
    case "Spanish":
        console.log("Hola, Mundo")
    break;
    case "German":
        console.log("Hello, Welt")
    break;
    default:
        console.log("no Lang");
}

//Problem 4


//Problem 5
let numGrade = 73
if (numGrade <= 100 && numGrade >= 91 ) {
    console.log("A")
} else if (numGrade <= 90 && numGrade >= 81) {
    console.log("B") 
} else if (numGrade <= 80 && numGrade >= 76 ) {
    console.log ("C")
} else if (numGrade <= 75 && numGrade >= 60) {
    console.log("D")
} else {(numGrade <= 59 && numGrade >= 0) 
    console.log("F")
}

//Problem 6
let animalName = "dog" 
let numberOfAnimals = 1

if (numberOfAnimals > 1) {
    console.log("I have " + numberOfAnimals + " " + animalName + "s")
} else {
    console.log("I have " + numberOfAnimals + " " + animalName)
}


