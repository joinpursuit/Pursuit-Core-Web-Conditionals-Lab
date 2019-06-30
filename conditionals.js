//1. Write a block of code that checks and logs whether variables are equal or not.

let luffysAge = 17;
let zorosAge = 19;
let sanjisAge = 19;

if (luffysAge === sanjisAge) {
  console.log("You're the same age");
} else {
  console.log("You're a different aga");
}

//2. Write a block of code that logs which of two number variables is larger.
if (luffysAge > zorosAge) {
  console.log(luffysAge + ' is greater then ' + zorosAge);
} else if (luffysAge === zorosAge) {
  console.log(luffysAge + ' is the equal to ' + zorosAge);
}  else {
  console.log(luffysAge + ' is younger then ' + zorosAge);
}

//3. Create a string variable with a language code (e.g. "english", "spanish", "german").
let language = 'Japanese';

if (language === 'Korean') {
  console.log('annyeong sesang');
} else if (language === 'Japanese') {
  console.log("Kon'nichiwa sekai");
} else if (language === 'French') {
  console.log('Bonjour le monde');
} else if (language === 'Meroitic') {
  console.log("Can't translate");
} else {
  console.log('Hello World');
}

//4. Do question 3 again but this time use a `switch` statement.
switch (language === 'Meroitic') {
  case 'Japanese':
    console.log("Kon'nichiwa sekai");
    break;
  case 'Korean':
    console.log("Kon'nichiwa sekai");
    break;
  case 'French':
    console.log('Bonjour le monde');
    break;
  case 'Meroitic':
    console.log("Can't translate");
    break;
  default:
    console.log('Hello World');
}

//5. Create a variable numGrade that will contain a numeric grade (out of 100).

let numGrade = 110;

if (numGrade >= 90) {
  console.log('You get an A');
} else if (numGrade >= 80) {
  console.log('You get an B');
} else if (numGrade >= 70) {
  console.log('You get an C');
} else if (numGrade >= 60) {
  console.log('You get an D');
} else {
  console.log('You get an F');
}

//6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
let creature1 = 'Dog';
let numberOfCreature1 = 0;
let creature2 = 'Dragon';
let numberOfCreature2 = 0;
let creature3 = 'Sheep';
let numberOfCreature3 = 0;
let creature4 = 'Geese';
let numberOfCreature4 = 0;

if (creature1 === 'Dog') {
  numberOfCreature1 += 1;
  console.log('There is ' + numberOfCreature1 + ' Dog');
} else {
  console.log('We do not collect that creature');
}

if (creature2 === 'Dragon') {
  numberOfCreature2 += 1;
  console.log('There is ' + numberOfCreature2 + ' Dragon');
} else {
  console.log('We do not collect that creature');
}

if (creature3 === 'Sheep') {
  numberOfCreature3 += 100;
  console.log('There are ' + numberOfCreature3 + ' Sheep');
} else {
  console.log('We do not collect that creature');
}

if (creature4 === 'Geese') {
  numberOfCreature4 += 1;
  if (numberOfCreature4 > 1 || numberOfCreature4 < 1) {
    console.log('There are ' + numberOfCreature4 + ' Geese');
  } else {
    console.log('There is ' + numberOfCreature4 + ' Goose');
  }
}

//7. Write a block of code that logs whether a given number is even or odd.
let num = 50;
let evenCheck =  num % 2;

if (evenCheck === 0) {
  console.log(num + ' is even ');
} else {
  console.log(num + ' is odd ');
}

//8. Do question 7 again but use a ternary.

evenCheck === 0 ? console.log(num + ' is even ') :   console.log(num + ' is odd ');

//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let myNum = 0;
if (myNum > 0) {
  console.log('positive');
} else if (myNum < 0) {
  console.log('negative');
} else {
  console.log('Eqaul to 0');
}
