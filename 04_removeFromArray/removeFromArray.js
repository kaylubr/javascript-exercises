const removeFromArray = function(arrayInput, value, ...moreArgs) {
    moreArgs.push(value);
    const sortedArgs = moreArgs.sort();
    
    if (arguments.length > 2) {
        for (let i = 0; i < sortedArgs.length; i++) {
            for (let j = 0; j < arrayInput.length; j++) {
                if (sortedArgs[i] === arrayInput[j]) {
                    arrayInput.splice(j, 1);
                    j = 0;
                }
            }
          }

        return arrayInput;
    }

    for (let index = 0; index < arrayInput.length; index++) {
      if (arrayInput[index] === value) {
        arrayInput.splice(index, 1);
        index = 0;
      }
    }

    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
