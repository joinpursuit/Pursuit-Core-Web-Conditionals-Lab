// Question 1:

let a = "cat";
let b = "dog";

if (a === b) {
  console.log('Variables are equal.');
} else {
      console.log('Variables not equal.');
    }


// Question 2:

let t = 37;
let j = 27;

if (t > j) {
console.log('The greater number of ' + t + ' and ' + j + ' is ' + t + '.');
} else if (j > t) {
  console.log('The greater number of ' + j + ' and ' + t + ' is ' + j + '.');
} else {
  console.log('The numbers are equal.');
}

// Question 3:

let language = 'Hindu';

if (language === 'span') {
  console.log('Hola Mundo!');
} else if (language === 'ger') {
  console.log('Hallo Welt!');
} else if (language === 'jap') {
  console.log("Kon\'nichiwa sekai!")
} else {
  console.log('Hello World!');
}


// Question 4:

let language2 = 'ger';

switch (language2) {
  case 'span':
  console.log('Hola Mundo!');
  break;
  case 'ger':
  console.log('Hallo Welt!');
  break;
  case 'jap':
  console.log("Kon\'nichiwa sekai!");
  break;
  default:
  console.log('Hello World!');
}

// Question 5:

let numGrade = 92;

if (numGrade >= 90) {
  console.log('A');
} else if (numGrade < 90 && numGrade > 79) {
  console.log('B');
} else if (numGrade < 80 && numGrade > 69) {
  console.log('C');
} else if (numGrade < 70 && numGrade > 59) {
  console.log('D');
} else {
  console.log('F');
}

// Question 6:
  // Think I'm misunderstanding what the question is asking, but...

  let animalName = 'cat';
  let numberOfAnimals = 3;

  if ('cat') {
    animalName+="'s";
    console.log('There are ' + numberOfAnimals + ' ' + animalName);
  } else {
    console.log('I guess there are dogs?');
  }



// Question 7:

for (let t = 0; t <= 25; t++) {
  if (t % 2 === 0) {
    console.log(t +  'is even.');
  } else {
    console.log(t + 'is odd.');
  }
}

// Question 8:

for (let i = 0; i <= 25; i++) {
  (i % 2 === 0) ? console.log(i + ' is even.') : console.log(i + ' is odd.');
}

// Question 9:

for (let j = -15; j <= 15; j++) {
  if (j >= -15 && j < 0) {
    console.log(j + ' is negative.');
  } else {
    if (j > 0 && j <= 15) {
      console.log(j + ' is positive.');
    } else {
      if (j === 0) {
        console.log(j + ' is equal to 0.');
      }
    }
  }
}
