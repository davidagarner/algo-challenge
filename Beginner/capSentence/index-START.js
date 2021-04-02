/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // Code goes here
  let arrayOfWords = text.toLowerCase().split(' ')
  let arrayCaps = arrayOfWords.map(word=>{
    return word [0].toUpperCase()+ word.slice(1)
  })
capSentence;
  return arrayCaps.join(' ')
}


module.exports = capSentence