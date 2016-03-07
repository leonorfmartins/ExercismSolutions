class Bob {

  hey(message) {
    let trimmed = message.trim(), answer;
    if (this.testUpperCase(trimmed)) {
        answer = this.yell(message);
    }
    else if (trimmed[trimmed.length-1] === "?") {
      answer = this.answerToQuestion(message);
    } else if (this.testUpperCase(trimmed)) {
        answer = this.answerToQuestion(message);
    } else if (trimmed === "") {
        answer = this.silence(message);
    } else  {
        answer = this.defaultAnswer(message);
    }
    return answer;
  }

  testUpperCase(input) {
    let regex = /[A-Za-z\u00C0-\u017F]/;
    let onlyCharacters = regex.exec(input) || "";
    let hasUpperCase = false;
    if (onlyCharacters.length === 0) {
        return hasUpperCase;
    } else if (onlyCharacters.input === onlyCharacters.input.toUpperCase()) {
        hasUpperCase = true;
    }
    return hasUpperCase;
  }

  answerToQuestion(answer) {
    return "Sure.";
  }

  yell(answer) {
    return "Whoa, chill out!";
  }

  defaultAnswer(answer) {
    return "Whatever.";
  }

  silence(answer) {
    return "Fine. Be that way!";
  }
}

export default Bob;
