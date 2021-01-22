/**
 * Takes in color and returns whether or not the color is a primary color.
 * The primary colors are "Red", "Yellow", and "Blue"
 * @param {string} color - The color.
 * @returns {boolean} - Whether the color is a primary color
 */
// function isPrimaryColor() {}

const isPrimaryColor = (color) => { // ES6+ ternary
  return color === "red" || color === "blue" || color === "yellow" ? true : false;
}

// const isPrimaryColor = (color) => { ES6+
//   if (color === "red" || color === "blue" || color === "yellow") {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPrimaryColor("red"))
// console.log(isPrimaryColor("blue"))
// console.log(isPrimaryColor("black"))
// console.log(isPrimaryColor("yellow"))

/**
 * Takes in color and returns whether or not the color is a primary color.
 * Uses exactly one if statement in its definition
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
// function isPrimaryColorOneIf() {} // ES5

// const isPrimaryColorOneIf = (color) => { // ES6+
//   if (color === "red" || "blue" || "yellow") {
//     return true;
//   } else return false;
// };

const isPrimaryColorOneIf = (color) => {
  return (color === "red" || "blue" || "yellow") ? true : false;
}

// console.log(isPrimaryColor("red"))
// console.log(isPrimaryColor("blue"))
// console.log(isPrimaryColor("black"))
// console.log(isPrimaryColor("yellow"))

/**
 * Takes in two words and returns the word that comes first in lexicographical order.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The word that is smaller in lexicographical order
 */
// function lexicographicalOrder() {} ES5

// const lexicographicalOrder = (word1, word2) => { // ES6+
//   if (word1 < word2) {
//     return word1;
//   } else {
//     return word2;
//   }
// };

const lexicographicalOrder = (word1, word2) => {
  return word1 < word2 ? word1 : word2;
}

// console.log(lexicographicalOrder("Coreen", "Thompson"));
// console.log(lexicographicalOrder("Zaria", "Miguel"));

/**
 * Takes in a word and returns "large" if its length is 5 character or more.
 * Otherwise returns "small"
 * @param {string} word
 * @returns {string} - "large" or "small"
 */
function largeOrSmall() {}

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The longer word
 */
function longerWord() {}

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The second word.
 * @returns {string} - The shortest word
 */
function shortestWord() {}

// const shortestWord = () => {

// }

module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  lexicographicalOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
