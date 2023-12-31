// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
var chunk = function (array, size) {
    var n = (array.length / size);
    var x = 0;
    var newArray = [];
    console.log(n);
    for (var i = 0; i < array.length; i += size) {
        newArray[x] = array.slice(i, i + size);
        console.log(newArray);
        x += 1;
    }
    return newArray;
};
var app = function () {
    console.log(chunk([1, 2, 3, 4], 2));
};
app();
module.exports = chunk;
