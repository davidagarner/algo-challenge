/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let longest = '';
    text.split(' ').forEach(word => {
        if (word.length > longest.length)
            longest = word;
    })
    return longest;
}
// longestWord()
// function palindromeChecker(str) {
//     const reverseStr = str.split('').reverse().join('')
//     return str === reverseStr
// }


module.exports = longestWord