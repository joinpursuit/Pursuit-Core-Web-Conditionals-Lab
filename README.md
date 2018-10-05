# Conditional Exercises

1. Write a block of code that checks and logs whether variables are equal or not.
```
let num = 3
let bar = 10
if ( num === bar){
console.log('Yes')
}else
{
console.log('No')
}
```
2. Write a block of code that logs which of two number variables is larger.
  * Your output should look like this (in this example for the numbers x = 5 and y = 10): 'The greater number of 5 and 10 is 10'
  * If the two numbers are equal, log: 'The numbers are equal.'
```
let num = 10
let bar = 1
if (num > bar){
  console.log('The greater number of ' + num + ' and ' + bar + ' is ' + num  )
} else if (num < bar){
  console.log('The greater number of ' + num + ' and ' + bar + ' is ' + bar  )
} else {
  console.log('They are equal')
}
 ```
3. Create a string variable with a language code (e.g. "english", "spanish", "german").
Use an if - else if - else statement to log "Hello, World" in the given language, for at least 3 languages.
It should default to logging English.
```
let language = 'English'

if (language === 'German'){
  console.log('Hallo Welt')
} else if (language === 'Spanish'){
  console.log('Hola Mundo')
} else if (language === 'English'){
  console.log('Hello World')
} else {
  console.log('Done checking')
}
```

4. Do question 3 again but this time use a `switch` statement.
```
switch (language = 'English'){

case 'German':
  console.log('Hallo Welt')
  break;
case 'Spanish':
  console.log('Hola Mundo')
  break;
case 'English':
  console.log('Hello World')
  break;
default:
  console.log('Done checking')

}
```

5. Create a variable numGrade that will contain a numeric grade (out of 100).
Use an if - else if ... - else statement to log the corresponding letter grade, either "A", "B", "C", "D", or "F".
```
let grade = 100

if (grade > 90) {
  console.log('A')
} else if (grade > 80 ) {
  console.log('B')
} else if (grade > 70){
  console.log('C')
} else if (grade > 60){
  console.log('D')
} else {
  console.log('F')
}
```

6. Create two variables: animalName ('cat', 'dog', etc.) , and numberOfAnimals.

Use an if - else statement to log:

  * the number

  * either in single or plural form. Exp: "5 cats" or "1 dog".

Bonus: Make it handle a few collective nouns like "sheep" and "geese".
```
let typeOfAnimal = ' cat'
let numberOfAnimals =12

if (numberOfAnimals === 1){
  console.log(numberOfAnimals + typeOfAnimal)
} else {
  console.log(numberOfAnimals + typeOfAnimal + 's')
}
```

7. Write a block of code that logs whether a given number is even or odd.
```
let weather = 99

if (weather % 2 === 0) {
  console.log('Even')
} else {
  console.log('Odd')
}
```
8. Do question 7 again but use a ternary.
```
let weather =100

weather % 2 === 0 ? console.log('Even'): console.log('Odd')
```

9. Write a block of code that checks and logs whether a given number is positive, negative, or equal to 0.
```
let num = 10

if (num > 0){
  console.log('Positive')
} else if (num < 0){
  console.log('Negative')
} else {
  console.log("Equal")
}
```
