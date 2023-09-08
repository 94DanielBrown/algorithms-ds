// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n: number) => {
    let newNums: string[] = []

    let arr = String(n).split("")
    if (arr[0] === "-") {
        arr = arr.slice(1);
    }

    const newNum: number = Number(arr.reverse().join(""));
    return newNum
}

const app = () => {
    console.log(reverseInt(-54))
    console.log(reverseInt(500))
    // reverseInt(12)
}

app();

module.exports = reverseInt;
