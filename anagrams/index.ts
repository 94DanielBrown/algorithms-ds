// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA: string, stringB: string): boolean => {
    const charMapA = buildCharMap(stringA);

    console.log(charMapA)


    return true
}

const buildCharMap = (string: string): {[key:string]: number} => {
    const charMap: {[key: string]: number} = {}

    for(let char of string.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
};

const app = () => {
    console.log(anagrams("railsafety", "fairytales"))
    console.log(anagrams("rail  safety", "fairy tales"))
}

app();

module.exports = anagrams;
