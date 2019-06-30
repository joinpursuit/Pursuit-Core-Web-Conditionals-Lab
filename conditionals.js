//1. Write a block of code that checks and logs whether variables are equal or not.

let x = 2;
let y = 2;

if(x == y){
	console.log('x is equal to y');
}
else{
	console.log('x is not equal to y')
}


// 2. Write a block of code that logs which of two number variables is larger.

if(x > y) {
	console.log('The greater number of ' + x + ' and ' + y + ' is ' + x);
}
else if(x < y) {
	console.log('The greater number of ' + x + ' and ' + y + ' is ' + y);
}
else {
	console.log('The numbers are equal')
}

//3. Create a string variable with a language code (e.g. "english", "spanish", "german"). Use an if - else if - else 
//statement to log "Hello, World" in the given language, for at least 3 languages. It should default to logging English.

const lang = 'Igbdo';

if(lang === 'Spanish') {
	console.log('Hola Mundo!')
}
else if(lang === 'German'){
	console.log('Hallo Welt! ')
}
else if(lang === 'Igbo'){
	console.log('Ndewo Uwa!')
}
else{
	console.log('Hello World!')
}


//4. Do question 3 again but this time use a switch statement.

switch(lang){
	case 'Spanish': 
	console.log('Hola Mundo!');
	break;

	case 'German': 
	console.log('Hallo Welt!');
	break;

	case 'Igbo': 
	console.log('Ndewo Uwa!');
	break;

	default:
	console.log('Hello World!');
}

//5. Create a variable numGrade that will contain a numeric grade (out of 100).
// Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

let score = 35;

if(score < 60){
	console.log('F');
}
else if(score < 70) {
	console.log('D');
}
else if(score < 80) {
	console.log('C');
}
else if (score < 90) {
	console.log('B');
}
else if(score < 101) {
	console.log('A');
}
else{
	console.log('Impossible, no one can be this smart');
}

// Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.
// Use an if - else statement to log:

// the number

// either in single or plural form. Exp: "5 cats" or "1 dog".

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
let animal = 'goose' 
let number = 3 

if(number > 1 || number == 0) {
	if(animal === 'sheep'){
		console.log(number + ' ' + animal)
	}
	else if(animal === 'goose'){
		console.log(number + ' ' + 'geese')
	}
	else
	console.log(number + " " + animal + "s")
}
else {
	console.log(number + ' ' + animal);
}

//7. Write a block of code that logs whether a given number is even or odd.

let num = 80;

if(num % 2 === 0) {
	console.log('This num is even');
}
else{
	console.log('This number is odd')
}

//8. Do question 7 again but use a ternary.
num % 2 === 0 ? console.log('This num is even'): console.log('This num is odd');

// 9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

let randomNumber = 28282828;
if(randomNumber < 0) {
	console.log('This num is negative');
}
if(randomNumber === 0) {
	console.log('This num is equal to 0');
}
if(randomNumber > 0) {
	console.log('This num is positive');
}