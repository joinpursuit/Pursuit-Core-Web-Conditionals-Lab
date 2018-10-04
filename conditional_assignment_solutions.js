// Question 1
let var1 = "cat",
  var2 = "dog";
if (var1 === var2) console.log("CATS ARE DOGS?!");
else console.log("Cats and Dogs are not the same");

//Question 2
let num1 = 6,
  num2 = 66;
if (num1 === num2) console.log("The numbers are equal");
else if (num1 > num2)
  console.log("The greater number of " + num1 + " and" + num2 + " is " + num1);
else if (num1 < num2)
  console.log("The greater number of " + num1 + " and" + num2 + " is " + num2);

//Question 3
let language = "english";
if (language === "french") console.log("Bonjour le monde");
else if (language === "english") console.log("Hello world");
else if (language === "swedish") console.log("Hej världen");

//Question 4
let language = "english";
switch (language) {
  case "french":
    console.log("Bonjour le monde");
    break;
  case "english":
    console.log("Hello world");
    break;
  case "swedish":
    console.log("Hej världen");
    break;
}

//Question 5
let numGrade = 65;
if (numGrade >= 90 && numGrade <= 100) console.log("A");
else if (numGrade >= 80 && numGrade < 90) console.log("B");
else if (numGrade >= 70 && numGrade < 80) console.log("C");
else if (numGrade >= 65 && numGrade < 70) console.log("D");
else if (numGrade < 65) console.log("F");

//Question 6
let animalName = "koala",
  numberOfAnimals = 7;
if (numberOfAnimals > 1) console.log(numberOfAnimals + " " + animalName + "s");
else if (numberOfAnimals === 1) console.log(1 + " " + animalName);

//Question 7
let number = 7;
if (number % 2 === 0) console.log(number + " is even");
else if (number % 2 === 1) console.log(number + " is odd");

//Question 8
let number = 7;
number % 2 === 0
  ? console.log(number + " is even")
  : console.log(number + " is odd");

//Question 9
let number2 = -10;
if (number2 === 0) console.log("The number is 0");
else if (number2 < 0) console.log("The number is negative");
else console.log("The number is positive");
