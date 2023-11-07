const removeFromArray = function(array, ...valsToRemove) {
    return array.filter(val => !valsToRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
