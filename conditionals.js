//1

let x = 1;
let y = 2;

if (x === y) {
  console.log("the variables are equal");
} else {
  console.log("the variables are not equal");
}

//2
if (x < y) {
  console.log("the greater number of " + x + " and " + y + " is " + y);
} else if (y < x) {
  console.log("the greater number of " + x + " and " + y + " is " + x);
} else if (x === y) {
  console.log("the numbers are equal");
}

//3
let language = "english";

if ((language === "english")) {
  console.log("Hello world");
} else if ((language === "spanish")) {
  console.log("Hola Mundo");
} else if ((language === "german")) {
  console.log("Hallo Welt");
}

//4

let lang = "spanish"
switch (lang) {
  case "spanish":
    console.log("Hola Mundo");
    break;
  case "german":
    console.log("Hallo Welt");
    break;

  default: console.log("hello world");

    break;
}

//5

let numGrade = 99

if (numGrade >= 90) {
  console.log("A");
} else if (numGrade < 90 && numGrade > 79) {
  console.log("B");

} else if (numGrade < 80 && numGrade > 69) {
  console.log("C");

} else if (numGrade < 70 && numGrade > 59) {
  console.log("D");

} else if (numGrade <= 59) {
  console.log("F");

}

//6

let animal = "elephant"
let number = 100

if (number === 1) {
  console.log(number + " " + animal);
} else if (number > 1) {
  console.log(number + " " + animal + "s");
}