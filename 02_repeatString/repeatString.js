const repeatString = function(textToRepeat, num) {
    if (num < 0){
        return 'ERROR'
    }
    let fullText = ''
    for (let i=0; i < num; i++) {
        fullText += textToRepeat
    }
    return fullText
};

// Do not edit below this line
module.exports = repeatString;
