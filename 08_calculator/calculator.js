const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((acc, currItem) => {
    return acc + currItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((acc, currItem) => {
    return acc * currItem;
  });
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
  if (num <= 1) {
    return 1;
  } else {
    let sum = num;

    for (let i = (num - 1); i >= 1; i--) {
    sum *= i;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
