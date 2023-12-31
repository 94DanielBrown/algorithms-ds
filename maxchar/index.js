// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
var maxChar = function (str) {
    var chars = {};
    var max = 0;
    var maxChar = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (!chars[char]) {
            chars[char] = 1;
        }
        else {
            chars[char]++;
        }
    }
    for (var key in chars) {
        if (chars[key] > max) {
            max = chars[key];
            maxChar = key;
        }
    }
    return maxChar;
};
var app = function () {
    console.log(maxChar("aabbaa"));
};
app();
module.exports = maxChar;
