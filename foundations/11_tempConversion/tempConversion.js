const convertToCelsius = function(farhrenheit) {
  let result = (farhrenheit - 32) / 1.8;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let result = celsius * 1.8 + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
