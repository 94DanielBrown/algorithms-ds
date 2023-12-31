// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
    var arr = str.split("");
    arr.reverse();
    return arr.join("");
}
// @ts-ignore
module.exports = reverse;
var app = function () {
    console.log(reverse("hello"));
};
app();
