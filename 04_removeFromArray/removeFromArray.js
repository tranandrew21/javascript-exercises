const removeFromArray = function(array, ...arg) {
    const newArray = [];
    array.forEach((i) => {
        if(!arg.includes(i)) 
        {
            newArray.push(i);
        }

    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
