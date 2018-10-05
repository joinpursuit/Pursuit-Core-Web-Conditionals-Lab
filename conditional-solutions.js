// 1)

let a = 1;
let b = 2;

if (a === b) {
  console.log('equal');
} else {
  console.log('not equal');
};

// 2)

let c = 1;
let d = 2;

if (c > d) {
  console.log(c + ' variable c is greater');
} else if (d > c) {
  console.log(d + ' variable d is greater');
} else {
  console.log('The numbers are equal');
}

// 3)

let language = 'english';

if (language === 'german') {
  console.log('Hallo Welt');
} else if (language === 'spanish') {
  console.log('Hola mundo');
} else {
  console.log('Hello, World');
}

// 4)

let language = 'english';

switch (language) {
  case 'german':
    console.log('Hallo Welt');
    break;
  case 'spanish':
    console.log('Hola mundo');
    break;
  default:
    console.log('Hello, World');
}

// 5)

let numGrade = 92;

if (numGrade === 100) {
  console.log('A');
} else if (numGrade >= 90) {
  console.log('B');
} else if (numGrade >= 80) {
  console.log('C');
} else if (numGrade >= 70) {
  console.log('D');
} else {
  console.log('F');
}

// 6)

let animalName = 'goose';
let numberOfAnimals = 1;

if (animalName === 'sheep') {
  console.log(numberOfAnimals + " " + animalName);
} else if (animalName === "goose" && numberOfAnimals === 1) {
  console.log(numberOfAnimals + " " + animalName);
} else if (animalName === "goose" && numberOfAnimals > 1) {
  console.log(numberOfAnimals + " " + 'geese');
} else if (numberOfAnimals === 1) {
  console.log(numberOfAnimals + " " + animalName);
} else if (numberOfAnimals > 1) {
  console.log(numberOfAnimals + " " + animalName + "s");
}


// 7)

let number = 16;

if (number % 2 === 0){
  console.log(number + " is an even number");
} else if (number % 2 === 1) {
  console.log(number + " is an odd number");
};

// 8)

17 % 2 === 0 ? "even number" : "odd number"

// 9)

let thisNumber = 0;

if (thisNumber > 0) {
  console.log( thisNumber + " is positive");
} else if (thisNumber < 0) {
  console.log( thisNumber + " is negative");
} else {
  console.log( thisNumber + " is equal to 0");
};
