const c = parseFloat(prompt('Enter temperature in Celsius:'));
const f = (c * 9) / 5 + 32;
const k = c + 273.15;
document.getElementById('target').innerHTML =
  `${c} Celsius is ${f} Fahrenheit and ${k} Kelvin.`;
