# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.

```js
let name = "Isa"
let student = "Isa"
if (name === student) {
  console.log("Your student " + name + " is the same " + student + " that I know.");
};

```

2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'

```js
let firstNum = 15;
let secondNum = 30;
if (firstNum > secondNum){
  console.log("The first number (" + firstNum + ") is larger than the second number ("+ secondNum + ").");
}else{
  console.log("The second number (" + secondNum + ") is larger than the first number ("+ firstNum + ").");
};
```

3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.

```js
let language = "German";

if(language === "English"){
  console.log("Hello, World");
}else if (language === "Spanish"){
  console.log("Hola, Mundo");
} else if(language !== "English" && language !== "Spanish"){
  console.log("Hallo, Welt");
};
```
```js
let language = "German";

if(language === "German"){
  console.log("Hallo, Welt");
}else if (language === "Spanish"){
  console.log("Hola, Mundo");
} else {
  console.log("Hello, World");
};

```
4. Do question 3 again but this time use a `switch` statement.

```js
let language = "spanish";

switch (language) {
  case "german":
    console.log("Hallo, Welt");
    break;
  case "spanish":
    console.log("Hola, Mundo");
    break;
  default:
    console.log("Hello, World");  
};
```

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".

```js
let numGrade = 50;

if (numGrade >= 90) {
  console.log("You have an A");
}else if (numGrade < 90 && numGrade >= 80) {
  console.log("You have a B");
}else if (numGrade < 80 && numGrade >= 70) {
  console.log("You have a C");
}else if (numGrade < 70 && numGrade >= 60) {
  console.log("You have a D");
}else if (numGrade < 60) {
  console.log("You have a F");
};
```
6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

```js
let animalName = "cat";
let numberOfAnimals = 3;

if (numberOfAnimals === 1) {
  console.log(numberOfAnimals + " " + animalName);
}else if(numberOfAnimals > 1){
  console.log(numberOfAnimals + " " + animalName + "s")
};

// or if is single add "s"

if (animalName[animalName.length - 1] !== "s") {
  console.log(numberOfAnimals + " " + animalName + "s");
};

```

Bonus: Make it handle a few collective nouns like "sheep" and "geese".

```js
let numberOfAnimals = 5;

if(numberOfAnimals === 1){
  console.log("You have "  + numberOfAnimals + " cat.");
}else if(numberOfAnimals === 2){
  console.log("You have " + numberOfAnimals + " sheeps.");
}else if(numberOfAnimals === 3){
 console.log("You have " + numberOfAnimals + " geese.");
}else if(numberOfAnimals === 4){
  console.log("You have " + numberOfAnimals + " rabbits.");
}else if(numberOfAnimals !== 1 && numberOfAnimals !== 2 && numberOfAnimals !== 3 && numberOfAnimals !== 4){
  console.log("You have " + numberOfAnimals + " pets in your house.");
};
```

7. Write a block of code that logs whether a given number is even or odd.

```js
let num = 5;

  if (num%2 == 0){
    console.log(num + " is even.");
  }else{
    console.log(num + " is odd.");
  };

```

8. Do question 7 again but use a ternary.

```js
let num = 5;

  let num  = (num%2 === 0) ? " is even." : " is odd."
```

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.

```js
let num = -2;

if (num > 0){
  console.log("This num " + num + " is positive");
}else if(num <= 0){
  console.log("This num " + num + " is negative");  
};
```
