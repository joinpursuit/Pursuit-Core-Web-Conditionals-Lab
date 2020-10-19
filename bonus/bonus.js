/**
 * Takes in color and returns whether or not the color is a primary color.
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
function isPrimaryColor(color) {
  return color === "red" || color === "yellow" ||  color === "blue"
}
/**
 * Takes in color and returns whether or not the color is a primary color.
 * Must only use the word if one time
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
function isPrimaryColorOneIf(color) {
  if (color === "red" || color === "yellow" ||  color === "blue") {
    return true
  } else {
    return false
  }
}
/**
 * Takes in two words and returns the word that is alphabetically smaller.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string}
 */
function alphabetOrder(word1, word2) {
  return word1 < word2 ? word1 : word2
}
/**
 * Takes in a word and returns large if it's length is 5 character or more.
 * othewise it should return small
 * You'll need to use the .length propery on the string
 * @param {string} word
 * @returns {string}
 */
function largeOrSmall(word) {
  return word.length >= 5 ? "large" : "small"
}

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string}
 */
function longerWord(word1, word2) {
  return word1.length > word2.length ? word1 : word2
}

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The second word.
 * @returns {string}
 */
function shortestWord(word1, word2, word3) {
  let minWord = word1
  if (word2.length < minWord.length) {
    minWord = word2
  }
  if (word3.length < minWord.length) {
    minWord = word3
  }
  return minWord
}

module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  alphabetOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
