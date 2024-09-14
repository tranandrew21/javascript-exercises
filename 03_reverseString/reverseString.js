const reverseString = function(word) {
    const string = word;
    const reverseWord = string.split("").reverse().join("");

    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
