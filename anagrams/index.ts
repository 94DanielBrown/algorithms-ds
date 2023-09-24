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
    const charArrayA = stringA.split("");
    const charArrayB = stringB.split("");
    console.log(charArrayA)

    for (let char of charArrayA) {
        console.log(char)
       if (charArrayB.includes(char)) {
           console.log("found character")
           let index = charArrayB.indexOf(char)
           charArrayB.splice(index,1)
       } else {
           return false
       }
    }

    return true
}

const app = () => {
    console.log(anagrams("railsafety", "fairytales"))
    console.log(anagrams("rail  safety", "fairy tales"))
}

app();

module.exports = anagrams;
