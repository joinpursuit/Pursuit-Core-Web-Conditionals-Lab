/**
 * Takes in two values and returns if they are equal or not
 * @param {*} a - The first element.
 * @param {*} b - The second element.
 * @returns {boolean} - Is a equal to b.
 */

const isEqual = (a, b) => a === b;

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The larger number.
 */

const findLarger = (num1, num2) => (num1 > num2 ? num1 : num2);

/**
 * Takes in two numbers and returns the larger number
 * Returns the string "tie" if both numbers are the same
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number|string } - The larger number or string "tie"
 */
function findLargerOrTie(num1, num2) {
  if (num1 === num2) {
    return "tie";
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

/**
 * Takes in a number and returns whether that number is positive, negative, or equal to 0.
 * @param {number} num - The number.
 * @returns {string} - "Positive, Negative, "Zero""
 */

// which is the preferred way of writing this code?
function positiveNegativeOrZero(num) {
  if (num === 0) {
    return "Zero";
  } else if (Math.sign(num) === -1) {
    return "Negative";
  } else if (Math.sign(num) === 1) {
    return "Positive";
  }
}

// function positiveNegativeOrZero (num) {
//   if (num === 0) {
//     return "Zero";
//   } else if (num < 0) {
//     return "Negative";
//   } else if (num > 0) {
//     return "Positive";
//   }
// };

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
function aroundTheWorldGreeting(language = "english") {
  if (language === "english") {
    return "Hello World";
  } else if (language === "spanish") {
    return "Hola Mundo";
  } else if (language === "german") {
    return "Hallo Welt";
  }
}

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
function aroundTheWorldGreetingWithSwitch(language) { ////////////////// practice more switches
  switch (language) {
    case "german":
      return "Hallo Welt";
    case "spanish":
      return "Hola Mundo";
    default:
      return "Hello World";
  }
}

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
function calculateLetterGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

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

const animalCounts = (animal, numberOfAnimals) =>
  numberOfAnimals === 1
    ? `${numberOfAnimals} ${animal}`
    : `${numberOfAnimals} ${animal}s`;

// const animalCounts = (animal, numberOfAnimals) => {
//   if (numberOfAnimals > 1) {
//     if (animal === "geese") {
//       return `${numberOfAnimals} ${animal}s is a gaggle`;
//     } else if (animal === "sheep") {
//       return `${numberOfAnimals} ${animal}s is a flock`;
//     }
//     return `${numberOfAnimals} ${animal}s`;
//   } else if (numberOfAnimals === 1) {
//     return `${numberOfAnimals} ${animal}`;
//   }
// };

/**
 * Takes in a number and returns whether that number is even or odd
 * @param {number} num - The number.
 * @returns {string} - "Even or Odd"
 */

const evenOrOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

/**
 * Takes in a number and returns whether that number is even or odd
 * Uses a ternary in its implementation
 * @param {number} num - The number.
 * @returns {string} - "Even or Odd"
 */

const evenOrOddWithTernary = (num) => (num % 2 === 0 ? "Even" : "Odd");

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * Uses a ternary in its implementation
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The larger number.
 */
const findLargerTernary = (num1, num2) => (num1 > num2 ? num1 : num2);

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
