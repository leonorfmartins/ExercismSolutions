//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    var trimmed = input.trim(), answer;
    if (testUpperCase(trimmed)) {
        answer = yell(input);
    }
    else if (trimmed[trimmed.length-1] === "?") {
        answer = answerToQuestion(input);
    } else if (testUpperCase(trimmed)) {
        answer = answerToQuestion(input);
    } else if (trimmed === "") {
        answer = silence(input);
    } else  {
        answer = defaultAnswer(input);
    }
    return answer;
};

function testUpperCase (input) {
    var regex = /[A-Za-z\u00C0-\u017F]/;
    var onlyCharacters = regex.exec(input) || "";
    var hasUpperCase = false;
    if (onlyCharacters.length === 0) {
        return hasUpperCase;
    } else if (onlyCharacters.input === onlyCharacters.input.toUpperCase()) {
        hasUpperCase = true;
    }
        return hasUpperCase;
}

function answerToQuestion(answer) {
    return "Sure.";
}
function yell(answer) {
    return "Whoa, chill out!";
}

function defaultAnswer(answer) {
    return "Whatever.";
}

function silence(answer) {
    return "Fine. Be that way!";
}
module.exports = Bob;
