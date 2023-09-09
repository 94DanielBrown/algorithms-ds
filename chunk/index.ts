// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
    const n: number = (array.length / size)
    let x: number = 0;
    const newArray = [];

    console.log(n)
    for (let i=0; i < array.length; i += size){
        newArray[x] = array.slice(i, i + size)
        console.log(newArray)
        x += 1;
    }

    return newArray;
}

const app = () => {
    console.log(chunk([1,2,3,4], 2))
}

app();

module.exports = chunk;
