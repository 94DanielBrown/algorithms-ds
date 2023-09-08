// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str: string) => {
    const chars: {[key: string]: number} = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (!chars[char]) {
            chars[char] = 1;
        }
        else {
            chars[char]++;
        }
    }


    for (let key in chars) {
        if (chars[key] > max){
            max = chars[key];
            maxChar = key
        }
    }

    return maxChar;
}

const app = () => {
    console.log(maxChar("aabbaa"));
}

app();

module.exports = maxChar;
