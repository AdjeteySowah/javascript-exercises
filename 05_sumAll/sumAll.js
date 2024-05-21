const sumAll = function(par1, par2) {
    let sum = 0;

    for (let i = par1; i <= par2; i++) {
            sum += i;
    }

    for (let j = par1; j >= par2; j--) {
        sum += j;
    }

    if (par1 < 0 || typeof(par1) !== "number" || par2 < 0 || typeof(par2) !== "number") {
        return "ERROR";
    } else {
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
