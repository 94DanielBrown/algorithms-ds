// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str: string): string {
    const arr: string[] = str.split("");
    arr.reverse();
    return arr.join("")
}

function withoutReverse(str: string): string {
    let reversed = "";

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

// @ts-ignore
module.exports = reverse;


const app = () => {
    console.log(reverse("hello"))
    console.log(withoutReverse("hello"))
}

app()
