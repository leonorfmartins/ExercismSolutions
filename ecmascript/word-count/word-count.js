export default class words {
  count(input) {
    let splittedWords = this.splitWords(input);
    let mappedWords = splittedWords.reduce((mappedWords, word) => {
        let wordCounter = mappedWords.get(word);
        if (wordCounter) {
          mappedWords.set(word, wordCounter + 1)
      } else {
          mappedWords.set(word, 1);
      }
      return mappedWords;
    }, new Map());
    return this.mapToObject(mappedWords);
  }

  splitWords(input) {
     return input.replace(/\s+/g, ' ').trim().split(' ');
  }

  mapToObject(mappedWords) {
    let countedWordObject = {};
    mappedWords.forEach((value, key) => {
        countedWordObject[key] = value
    });
    return countedWordObject;
  }
}

