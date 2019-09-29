// problem 1
let sample = 13
let sample2 = 15
if (sample > sample2) {
    console.log("Greater than");
} else {
    console.log("Less than");
}

// problem 2
let x = 5
let y = 10
if (x < y) {
    console.log("The greater number of " + x + " and " + y + " is " + y + ".");
} else if (x > y) {
    console.log("The greater number of " + x + " and " + y + " is " + x + ".");
} else if (x === y)  {
console.log("The numbers are equal");
}
  else {
      console.log("done checking");
  }


//   problem 3
let english = "Hello world!" 
let spanish = "Hola mundo!"
let french = "Bonjour le monde!"
let language = english
if (language === spanish) {
    console.log(spanish);
} else if (language === french) {
    console.log(french);
} else {
    console.log(english)
}


// problem 4

switch (language) {
case spanish:
    console.log("Hola mundo!")
    // code block
break;
case french:
    console.log("Bonjour le monde!")
    // code block
break;
case english:
    console.log("Hello world!")
    //  code block
break;
default:
    console.log("Not a recognized language.")
}


// problem 5

let numgrade = 77
if (numgrade >= 90){
    console.log("A");
}
else if (numgrade >= 80 && numgrade < 90){
    console.log("B");
}
else if (numgrade >= 70 && numgrade < 80){
    console.log("C");
}
else if (numgrade >= 60 && numgrade< 70){
    console.log("D");
}
else {
    console.log("F");
}


// problem 6
let animalName = "cat"
let numberOfAnimals = 5
if (numberOfAnimals > 7) {
    console.log("more than 7 cats")
} else if (numberOfAnimals < 4) {
    console.log("less 4 cats")
} else {
    console.log("5 cats")
}



// problem 7
let num = 4
if (num % 2 === 0){
    console.log("number is even");
}
else { 
    console.log("number is odd");
}



// problem 8
let num1 = 8
num1 % 2 ? console.log("odd") : console.log("even");




//problem 9
let numm = 10
if (numm < 0) {
    console.log("number is negative");
} else if (numm > 0){ 
    console.log("number is positive");
} else {
    console.log("equal to 0 ");
}