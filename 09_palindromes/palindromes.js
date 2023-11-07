function removePunctuation(text) {
    var punctuation = /[\.,?! ]/g;
    var newText = text.replace(punctuation, "");
    newText = newText.toLowerCase();
    return newText;
  }

const palindromes = function (string) {
    string = removePunctuation(string)
    const arr = string.split('')
    arr.reverse()
    stringReversed = arr.join('')
    console.log(string, stringReversed)
    return (string == stringReversed)
};

// Do not edit below this line
module.exports = palindromes;
