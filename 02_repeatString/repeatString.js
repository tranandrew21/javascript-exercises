const repeatString = function(string, num) {
    var count = 0;
    var newStrg = "";
    while(count != num) {
        newStrg += string;
        ++count;
    }
    return newStrg;
};

// Do not edit below this line
module.exports = repeatString;
