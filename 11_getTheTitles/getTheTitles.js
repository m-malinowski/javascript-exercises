const getTheTitles = function(arr) {
    let titles = []
    arr.forEach((dict) => titles.push(dict["title"]))
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
