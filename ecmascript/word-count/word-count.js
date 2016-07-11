export default class words {
  count(input) {
    let splittedWords = this.splitWords(input);
    let mappedWords = splittedWords.reduce((mappedWords, word) => {
        let wordCounter = mappedWords[word]
        if (mappedWords.hasOwnProperty(word)) {
          mappedWords[word] =  wordCounter + 1;
        } else {
          mappedWords[word] = 1;
        }
      return mappedWords;
    }, {});
    return mappedWords;
  }

  splitWords(input) {
     return input.replace(/\s+/g, ' ').trim().split(' ');
  }

}

