/**
 * Takes in two values and returns if they are equal or not
 * @param {*} a - The first element.
 * @param {*} b - The second element.
 * @returns {boolean} - Is a equal to b.
 */
// function isEqual() {} // ES5

// const isEqual = (num1, num2) => { // ES6+
//   if (num1 === num2) {
//     return num1 === num2;
//   } else return false;
// }

const isEqual =(num1, num2) => { // ES6+ ternary operator
 return num1 === num2 ? true : false
}
// console.log(isEqual(2,3))
// console.log(isEqual(3,3))
/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */

// function findLarger(num1, num2) { // ES5
//   if(num1 > num2) {
//     return num1
//   } else if (num1 < num2) {
//     return num2
//   } else return false
// }

const findLarger = (num1, num2) => { // ES6+ ternary operator
  return num1 > num2 ? num1 : num2
}

// console.log(findLarger(5, 2))
// console.log(findLarger(2, 5))
// console.log(findLarger(5, 5))

/**
 * Takes in two numbers and returns the larger number
 * Returns the string "tie" if both numbers are the same
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string } - The larger number or string "tie"
 */
// function findLargerOrTie() {} // ES5

const findLargerOrTie = (num1, num2) => { // ES6+
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else if (num1 === num2) {
    return "tie"
  }
}

// const findLargerOrTie = (num1, num2) => { // ES6+ switch - revisit ???????????????????????????
//   switch (true) { 
//     case num1 > num2:
//       return num1;
//       break;
//     case num1 < num2:
//       return num2;
//       break;
//     case num1 === num2:
//       return "tie";
//       break;
//       }
// }

// console.log(findLargerOrTie(7,7))
// console.log(findLargerOrTie(2,5))
// console.log(findLargerOrTie(5,2))


/**
 * Takes in a number and returns whether that number is positive, negative, or equal to 0.
 * @param {number} a - The number.
 * @returns {string} - "Positive, Negative, "Zero""
 */
// function positiveNegativeOrZero() {} // ES5

const positiveNegativeOrZero = (num) => { // ES6+
  if (num === 0) {
    return "Zero"
  } else if (num < 0) {
      return "Negative"
  } else if (num > 0) {
      return "Positive"
  }
}

// const positiveNegativeOrZero = (num) => { // ES6+ switch - revisit ???????????????????????????????
//   switch (true) {
//     case num === 0:
//       return "Zero";
//     case num > 0:
//       return "Positive";
//     case num < 0:
//       return "Negative";
//   }
// }

// console.log(positiveNegativeOrZero(3))
// console.log(positiveNegativeOrZero(-3))
// console.log(positiveNegativeOrZero(0))

/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */
// function aroundTheWorldGreeting() {} // ES5

const aroundTheWorldGreeting = (language) => { //ES6+
  if(language === "english") {
    return "Hello World";
  } else if (language === "spanish") {
    return "Hola Mundo"
  } else if (language === "german") {
    return "Hallo Welt"; 
  } else return "Hello World";
}

// console.log(aroundTheWorldGreeting("english"))
// console.log(aroundTheWorldGreeting("spanish"))
// console.log(aroundTheWorldGreeting("german"))
// console.log(aroundTheWorldGreeting())
// console.log(aroundTheWorldGreeting("cat"))


/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * Uses a switch statement in its implementation
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */
// function aroundTheWorldGreetingWithSwitch() {} ES5

const aroundTheWorldGreetingWithSwitch = (language) => { // ES6+ switch
  switch (language) {
    case "spanish":
      return "Hola Mundo";
    case "german":
      return "Hallo Welt";
    default:
      return "Hello World"
  }
}

// console.log(aroundTheWorldGreetingWithSwitch("english"))
// console.log(aroundTheWorldGreetingWithSwitch("spanish"))
// console.log(aroundTheWorldGreetingWithSwitch("german"))
// console.log(aroundTheWorldGreetingWithSwitch())
// console.log(aroundTheWorldGreetingWithSwitch("cat"))

/**
 * Takes in a number and returns the letter grade corresponding to that number.
 * Letter grades consist of "A", "B", "C", "D", or "F"
 * 90 and above is an A
 * 80 and above is a B
 * 70 and above is a C
 * 60 and above is a D
 * Anything lower than 60 is an F
 * @param {number} grade - The numeric grade.
 * @returns {string} - The letter grade corresponding to the numeric grade.
 */
// function calculateLetterGrade() {} ES5

// const calculateLetterGrade = (grade) => { //ES6+ switch
//   switch (true) {
//     case grade >= 90:
//       return "A";
//     case grade >= 80:
//       return "B";
//     case grade >= 70:
//       return "C";
//     case grade >= 60:
//       return "D";
//     case grade < 60:
//       return "F"
//   }
// }

// console.log(calculateLetterGrade(99))
// console.log(calculateLetterGrade(82))
// console.log(calculateLetterGrade(76))
// console.log(calculateLetterGrade(66))
// console.log(calculateLetterGrade(59))
// console.log(calculateLetterGrade())


const calculateLetterGrade = (grade) => { //ES6+
  if(grade >= 90) {
    return "A";
  } else if(grade >= 80) {
    return "B";
  } else if(grade >= 70) {
    return "C";
  } else if(grade >= 60) {
    return "D";
  } else return "F";
}

// console.log(calculateLetterGrade(99))
// console.log(calculateLetterGrade(82))
// console.log(calculateLetterGrade(76))
// console.log(calculateLetterGrade(66))
// console.log(calculateLetterGrade(59))
// console.log(calculateLetterGrade())

/**
 * Takes in two variables: animal ('cat', 'dog', etc.) and numberOfAnimals.
 * Use an if - else to statement to return the
 * number and animal (in either single or plural form)
 * Exp: "5 cats" or "1 dog"
 * Bonus: Make it handle a few collecting nouns like "sheep" and "geese"
 * @param {string} animal - The type of animal.
 * @param {number} numberOfAnimals - The number of animals.
 * @returns {string} - the number and animal (in either single or plural form)
 */
// function animalCounts() {} // ES5

const animalCounts = (animal, numberOfAnimals) => { // ES6+
  if(numberOfAnimals > 1) {
    if(animal === "geese") {
      return "Gaggle";
    } else if(animal === "sheep") {
        return "flock";
    }
    return `${numberOfAnimals} ${animal}s`
  } else if(numberOfAnimals === 1) {
      return `${numberOfAnimals} ${animal}`
  }
}

// console.log(animalCounts("cat", 3))
// console.log(animalCounts("cat", 1))
// console.log(animalCounts("sheep", 3))
// console.log(animalCounts("geese", 3))
// console.log(animalCounts("geese", 1))
// console.log(animalCounts("sheep", 1))

/**
 * Takes in a number and returns whether that number is even or odd
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
// function evenOrOdd() {} // ES5

const evenOrOdd = (num) => { // ES6+
  if(num % 2 === 0) {
    return "Even";
  } else return "Odd"
}

// console.log(evenOrOdd(13))
// console.log(evenOrOdd(10))
// console.log(evenOrOdd(0))
// console.log(evenOrOdd(-1))


/**
 * Takes in a number and returns whether that number is even or odd
 * Uses a ternary in its implementation
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
// function evenOrOddWithTernary() {}

const evenOrOddWithTernary = (num) => { // ES6+ ternary
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(13))
console.log(evenOrOdd(10))
console.log(evenOrOdd(0))
console.log(evenOrOdd(-1))

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * Uses a ternary in its implementation
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
function findLargerTernary() {}



module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
  findLargerTernary,
};