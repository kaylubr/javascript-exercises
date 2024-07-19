const reverseString = function(word) {
    let reversedWord = "";
    for (let index = word.length; index > 0; index--) {
        reversedWord += word[index - 1];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
