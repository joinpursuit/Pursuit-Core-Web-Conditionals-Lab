/**
 * Takes in two values and returns if they are equal or not
 * @param {*} a - The first element.
 * @param {*} b - The second element.
 * @returns {boolean} - Is a equal to b.
 */
function isEqual(a, b) {
  return a === b; {
    if (a !== b) {
      return "Not equal";
    } else {
      return "They are equal"
    }
  }
} 
console.log(isEqual());

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
function findLarger(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
}
console.log(findLarger());

/**
 * Takes in two numbers and returns the larger number
 * Returns the string "tie" if both numbers are the same
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string } - The larger number or string "tie"
 */
function findLargerOrTie(a, b) {
  if ( a > b) {
      return a;
      } else if (b > a){
        return b; 
    } else {
      return "tie"
    }
}
console.log(findLargerOrTie());

/**
 * Takes in a number and returns whether that number is positive, negative, or equal to 0.
 * @param {number} a - The number.
 * @returns {string} - "Positive, Negative, "Zero""
 */
 function positiveNegativeOrZero(a) {
    if (Math.sign(a < 0)) {
      return "Negative"
    } else if (Math.sign(a > 0)) {
      return "Positive" 
    } else {
      return "Zero"
    } 
  }
console.log(positiveNegativeOrZero(1));
console.log(positiveNegativeOrZero(0));
console.log(positiveNegativeOrZero(-1));


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
function aroundTheWorldGreeting(language) {
  if (language === "english") {
    return "Hello World"
  } else if (language === "spanish") {
    return "Hola Mundo"
  } else if (language === "german") {
    return "Hallo Welt"
  } else {
    return "Hello World"
  }
}
console.log(aroundTheWorldGreeting("english"));
console.log(aroundTheWorldGreeting("spanish"));
console.log(aroundTheWorldGreeting("german"));

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
function aroundTheWorldGreetingWithSwitch(language) {
  switch (language) {
      case "english":
        return "Hello World"
      case "spanish":
        return "Hola Mundo"
      case "german":
        return "Hallo Welt"
        default:
        return "Hello World"

  }
}
console.log(aroundTheWorldGreetingWithSwitch("spanish"));
console.log(aroundTheWorldGreetingWithSwitch("german"));
console.log(aroundTheWorldGreetingWithSwitch("english"));

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
  if (grade >=90){
    return "A"
  } else if (grade >=80) {
    return "B"
  } else if (grade >=70) {
    return "C"
  } else if (grade >=60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(calculateLetterGrade());
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
function animalCounts(animal, numberOfAnimals) {
  if (numberOfAnimals === 1) {
    return numberOfAnimals +" "+ animal 
  } else if (numberOfAnimals > 1){
    return numberOfAnimals +" "+ animal + "s"
  }
}
console.log(animalCounts());

/**
 * Takes in a number and returns whether that number is even or odd
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
function evenOrOdd(a) {
  if (a % 2 === 0){
    return "Even"
  } else {
    return "Odd"
  }
}
console.log(evenOrOdd(10));
console.log(evenOrOdd(11));

/**
 * Takes in a number and returns whether that number is even or odd
 * Uses a ternary in its implementation
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
function evenOrOddWithTernary(a) {
  return a % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOddWithTernary());
/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * Uses a ternary in its implementation
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
function findLargerTernary(a, b) {
  return a > b ? a : b
}
console.log(findLargerTernary());


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
