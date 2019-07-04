




//1. Write a block of code that checks and logs whether variables are equal or not.

// let car1 = 'lexus'
// let car2 = 'honda'
// if (car1 === car2){
//   console.log('These cars are the same')
// }else{
//   console.log('We do not have the same car')
// }





/*2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'*/

  /*let x = 5
  let y = 5
  if (x > y){
    console.log('The greater number of' + ' x' + ' and' + ' y' +  'is x')
  } else if (x < y){
    console.log('The greater number of' + ' x' + ' and' + ' y' +  ' is y')
  } else {
    console.log('The numbers are equal')
  }*/


  /*3. Create a string variable with a language code (e.g. "english", "spanish", "german").
  Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
  It should default to logging English.*/

  /*let lang = 'Spanish'
  if(lang === 'English') {
    console.log('Hello, World')
  }else if (lang === 'Spanish') {
    console.log('Hola, Mundo')
  }else if (lang === 'French') {
    console.log('Bonjour, le Monde')
  }else {
    console.log('Hello, World')
  }*/


  //4. Do question 3 again but this time use a `switch` statement.

/*  let lang = 'Spanish'
  switch (lang) {
    case 'English':
      console.log('Hello, World');
      break;
    case 'Spanish':
      console.log('Hola, Mundo');
      break;
    case 'French':
      console.log('Bounjour, le Monde');
      break;
    default:
      console.log('Hello World')
  }*/


  //5. Create a variable numGrade that will contain a numeric grade (out of 100).
  //Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

/*let numGrade = 64
if (numGrade >= 90){
  console.log('You received an A')
}else if (numGrade <= 89 && numGrade >= 80) {
  console.log('You received a B')
}else if (numGrade <= 79 && numGrade >= 70) {
  console.log('You received a C')
}else if (numGrade <= 69 && numGrade >= 60) {
  console.log('You received a D')
}else {
  console.log('You failed with a capitol F')
}*/




/*6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".*/


// let animalName = 'horse'
//
// let numberOfAnimals = 2
// if (numberOfAnimals > 1) {
//   console.log(numberOfAnimals + ' ' + animalName + 's')
// }else {
//   console.log(numberOfAnimals + ' '+ animalName)
// }
// BONUS Answer
let animalName = 'goose'
let numberOfAnimals = 1
if(numberOfAnimals > 1) {
    if(animalName === 'goose')
    console.log(numberOfAnimals + ' geese')
  }else {
  console.log(numberOfAnimals + ' ' + animalName)
}


//**********DO NOT CHECK THIS .....PERSONAL PROJECT*******************//
// let animalName = 'goose'
// let numberOfAnimals = 3
// if(numberOfAnimals > 1){
//   console.log(numberOfAnimals + ' ' + animalName + 's')
// }else if(numberOfAnimals > 1) {
//   if(animalName === 'goose')
//   console.log(numberOfAnimals + ' geese')
//   }else {
//   console.log(numberOfAnimals + ' ' + animalName)
// }






//7. Write a block of code that logs whether a given number is even or odd.

/*let num = 6

if (num % 2 === 0 ) {
  console.log('This number is even')
}else{
  console.log('This number is odd')
}*/



//8. Do question 7 again but use a ternary.

/*let num = 11
num % 2 === 0 ? console.log('This number us even') : console.log('This number is odd')*/



//9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

/*let num = -82782462764
if(num > 0) {
  console.log('The number is positive')
}else if (num < 0) {
  console.log('The number is negative')
}else {
  console.log('This number equals to 0')
}*/
