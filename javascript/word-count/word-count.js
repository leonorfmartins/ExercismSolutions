var words = function(input) {
    return countWords(input);
};
var countedWords = {};
function countWords(input) {
    return (
      countedWords[input] ?
      countedWords = {input: countedWords[input] + 1 }:
      countedWords = {input: 1}
    );
  }
module.exports = words;
