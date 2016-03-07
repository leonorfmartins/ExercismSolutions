module.exports = function(input1, input2) {
    return difference(input1,input2);
};
var difference = function(string1, string2) {
    if (string1.length !== string2.length) {
        throw new Error ('DNA strands must be of equal length.');
    }
    var differentChars = 0;
    for (var i=0; i <= string1.length; i++) {
        if (string1[i] !== string2[i]) {
            differentChars ++;
        }
    }
    return differentChars;
};
