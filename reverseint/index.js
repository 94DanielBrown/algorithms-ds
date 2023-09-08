// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
var reverseInt = function (n) {
    var newNums = [];
    var arr = String(n).split("");
    if (arr[0] === "-") {
        arr = arr.slice(1);
        arr.push("-");
    }
    var newNum = Number(arr.reverse().join(""));
    return newNum;
};
var app = function () {
    console.log(reverseInt(-54));
    console.log(reverseInt(500));
    // reverseInt(12)
};
app();
module.exports = reverseInt;
