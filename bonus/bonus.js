/**
 * Takes in color and returns whether or not the color is a primary color.
 * The primary colors are "Red", "Yellow", and "Blue"
 * @param {string} color - The color.
 * @returns {boolean} - Whether the color is a primary color
 */
function isPrimaryColor(color) 
{
    switch (color)
    {
      case color = 'red' : return true
      break;

      case color = 'yellow' : return true
      break;

      case color = 'blue' : return true
      break;

      default : return false
      break;

    }
}

console.log(isPrimaryColor('red'))



/**
 * Takes in color and returns whether or not the color is a primary color.
 * Uses exactly one if statement in its definition
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
function isPrimaryColorOneIf(color)
{

    if (color === 'red' || color === 'blue' || color === 'yellow') 
    {
      return true
    }else 
    {
      return false
    }
}

console.log(isPrimaryColorOneIf('blue'))

/**
 * Takes in two words and returns the word that comes first in lexicographical order.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The word that is smaller in lexicographical order
 */
function lexicographicalOrder(word1, word2) 
{
  if (word1 < word2)
  {
      return word1 
  }else 
  {
      return word2
  }
}

console.log(lexicographicalOrder('orange','oracle'))



/**
 * Takes in a word and returns "large" if its length is 5 character or more.
 * Otherwise returns "small"
 * @param {string} word
 * @returns {string} - "large" or "small"
 */
function largeOrSmall(word)
{
    if (word.length >= 5)
    {
      return 'large'
    }else
    {
      return 'small'
    }

}

console.log(largeOrSmall('acapulco'))

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The longer word
 */
function longerWord(word1, word2) 
{
    if( word1.length > word2.length)
    {
      return word1
    }else
    {
      return word2
    }
}

console.log(longerWord('taco','cheesecake'))

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The second word.
 * @returns {string} - The shortest word
 */
function shortestWord(word1, word2, word3) 
{
    if (( word1.length <= word2.length) && (word1.length < word3.length))
    {
      return word1
    }else if (word2.length < word3.length )
    {
      return word2
    }else
    {

        return word3
    }
}

console.log(shortestWord('pizza','pizza','tomato'))

module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  lexicographicalOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
