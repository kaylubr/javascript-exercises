const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }

    let emptyWord = "";
    for (let i = 0; i < num; i++) {
        emptyWord += word;
    }

    return emptyWord;
};

// Do not edit below this line
module.exports = repeatString;
