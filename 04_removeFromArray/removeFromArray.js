const removeFromArray = function(array, par2, par3, par4, par5) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === par2 || array[i] === par3 || array[i] === par4 || array[i] === par5) {
            let filteredArray = array.filter(element => element === par2 || element === par3 || element === par4 || element === par5);
            var newArray = array.filter(element => !filteredArray.includes(element));
        }
    }

    if (array.includes(par2) || array.includes(par3) || array.includes(par4) || array.includes(par5)) {
        return newArray;
    } else {
        return array;  
    }
};

// Do not edit below this line
module.exports = removeFromArray;
