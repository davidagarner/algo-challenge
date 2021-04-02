/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(str) {
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

palindromeChecker("str")



module.exports = palindromeChecker;