const convertToCelsius = function(degreesFahrenheit) {
  let convertedValue = (degreesFahrenheit - 32) * 5/9;

  if (convertedValue % 1 !== 0) {
    return parseFloat(convertedValue.toFixed(1));
  } else {
    return convertedValue;
  }
};

const convertToFahrenheit = function(degreesCelsius) {
  let convertedValue = (degreesCelsius * 9/5) + 32;
  
  if (convertedValue % 1 !== 0) {
    return parseFloat(convertedValue.toFixed(1));
  } else {
    return convertedValue;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

 