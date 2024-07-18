const fibonacci = function(items) {
    let fibonacciArray = [1, 1];

    if (items < 0) {
        return "OOPS";
    } else if (items == 0) {
        return 0;
    } else if (items == 1) {
        return 1;
    } else {
        for (let i = 0; i < (items - 2); i++) {
            let nextItem = fibonacciArray[i] + fibonacciArray[i + 1];
            fibonacciArray.push(nextItem);
        }

        return fibonacciArray[items - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
