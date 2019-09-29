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