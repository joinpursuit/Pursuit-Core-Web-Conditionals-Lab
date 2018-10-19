# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

```js

if(num1 === num2){
  console.log(`${num1} and ${num2} are equal.`)
}else{
  console.log(`${num1} and ${num2} are not equal.`)
}

```

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

```js

let num1 = 8
let num2 = 8

if(num1 > num2){
  console.log(`The greater number of ${num1} and ${num2} is ${num1}`)
}else if(num2 > num1){
  console.log(`The greater number of ${num2} and ${num1} is ${num2}`)
}else{
    console.log(`The numbers are equal.`)
  }

```

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

```js

let greetingLanguage = ""

if(greetingLanguage === "spanish"){
  console.log(`Hola, Mundo!`)
}else if(greetingLanguage === "swahili"){
  console.log(`Salamu, Dunia`)
}else if(greetingLanguage === "german"){
  console.log(`Hallo, Welt`)
}else{
  console.log(`Hello, World`)
}

```
4. Do question 3 again but this time use a `switch` statement.

```js

let greetingLanguage = "";
switch (greetingLanguage){
  case "spanish":
  console.log(`Hola, Mundo!`);
  break;
  case "german":
  console.log("Hallo, Welt");
  break;
  case "swahili":
  console.log("Salamu, Dunia");
  break;
  default:
  console.log("Hello, World");
}

```
5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

```js

let numGrade = 90

if(numGrade >= 93){
  console.log('A')
}else if(numGrade <= 92 && numGrade >= 85){
  console.log('B')
}else if(numGrade <= 84 && numGrade >= 75){
  console.log('C')
}else if(numGrade <= 74 && numGrade >=65){
  console.log('D')
}else{
  console.log('F')
}


```

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

```js

let animalName = 'koala bear'
let numberOfAnimals = 7

if(numberOfAnimals > 1){
  console.log(`${numberOfAnimals} ${animalName}s`)
}else if{
  console.log(`${numberOfAnimals} ${animalName}`)
}

```
Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

```js

let animalName = 'koala bear'
let numberOfAnimals = 7

if(numberOfAnimals > 1){
  console.log(`${numberOfAnimals} ${animalName}s`)
}else if(numberOfAnimals < 2){
  console.log(`${numberOfAnimals} ${animalName}`)
}else if(animalName === "goose" && numberOfAnimals > 1){
  console.log(`${numberOfAnimals} geese`)
}else(animalName === "geese" && numberOfAnimals < 2){
  console.log(`${numberOfAnimals} goose`)
}


```

7. Write a block of code that logs whether a given number is even or odd.

```js

num = -17

if(num % 2 === 0){
  console.log(`${num} is even.`)
}else{
  console.log(`${num} is odd.`)
}

```
8. Do question 7 again but use a ternary.

```js

num = 6

num % 2 === 0 ? (`${num} is even`) : (`${num} is odd.`)

```

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

```js

num = 7

if(num < 0) {
  console.log(`${num} is negative.`)
}else if(num > 0){
  console.log(`${num} is positive.`)
}else{
  console.log(`${num} is equal to 0.`)
}

```
