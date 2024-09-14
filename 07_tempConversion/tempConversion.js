const convertToCelsius = function(num) {
  var celsius = (num - 32) * 5/9;
  return Math.round(celsius);
};

const convertToFahrenheit = function(num) {
  var fah = (num * 9/5) + 32;
  return Math.round9(fah);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
