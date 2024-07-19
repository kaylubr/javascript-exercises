const convertToCelsius = function(temperature) {
  const temp = parseFloat(((temperature - 32) * (5/9)).toFixed(1));
  return temp;
};

const convertToFahrenheit = function(temperature) {
  const temp = parseFloat((temperature * (9/5) + 32).toFixed(1));
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
