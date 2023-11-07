const removeFromArray = function(array, ...theArgs) {
    const valsToRemove = theArgs;
    for (let i=0; i < valsToRemove.length; i++){
        let val = valsToRemove[i]
        const index = array.indexOf(val);
        if (index > -1) { // only splice array when item is found
            array.splice(index, 1); // 2nd parameter means remove one item only
          }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
