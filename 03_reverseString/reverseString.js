const reverseString = function(text) {
    let arr = text.split(''); // convert to array
    arr.reverse();
    let reversedText = arr.join('');
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
