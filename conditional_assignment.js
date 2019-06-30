  //Question 1
  let num  = 4
  let num2 = 4

  if (num === num2){
    console.log('They are equal');
  } else {
    console.log('They are not');
  }

  //Question 2
  if (num > num2){
    console.log('The greater number of ' + num + 'and ' + num2 + 'is ' + num);
  }
  else if (num < num2){
    console.log('The greater number of ' + num + 'and ' + num2 + 'is ' + num2 );
  }
  else{
    console.log('They are equal');
  }

  //Question 3
  let eng = 'Hello World';
  let ger = 'Hallo Welt';
  let spa = 'hola Mundo';
  let lang = 'english';

  if (lang === 'english'){
    console.log(eng);
  }
  else if (lang === 'german'){
    console.log(ger);
  }
  else{
    console.log(spa);
  }

  //Question 4
  switch(lang){
    case 'english':
    console.log(eng);
    break;

    case 'german':
    console.log(ger);
    break;

    case 'spanish':
    console.log(spa);
    default:

    console.log('Huh?');
    break;
  }
  //Question 5
  let numGrade = 73;

  if(numGrade >= 90){
    console.log('You got an A');
  }
  else if (numGrade >= 80){
    console.log('You got a B');
  }
  else if (numGrade >= 70){
    console.log('You got a C');
  }
  else if (numGrade >= 60){
    console.log('You received a D');
  }
  else if (numGrade < 60){
    console.log('You got an F and failed the course');
  }
  else{
    console.log('We lost your grades');
  }

  //Question 6
  let animalName;
  let numberOfAnimals;
  numberOfAnimals = 4;
  animalName = 'snake';
  if(numberOfAnimals === 1){
    console.log('There is 1 ' + animalName);
  }
  else {
    console.log('There are ' + numberOfAnimals + ' ' + animalName + 's');
  }

  //Question 7
  let num8 = 5;
  if (num8 % 2 === 0){
    console.log("It's an even number");
  }
  else {
    console.log("It's an odd number");
  }

  num8 = 4
  num8 % 2 === 0 ? console.log("Its and even number") : console.log('Its an odd number');

  let num9 = -1;
  if (num9 === 0){
    console.log('It is equal 0');
  }
  else if (num9 > 0){
    console.log(num9,'is positive');
  }
  else {
    console.log(num9,'is negative');
  }
