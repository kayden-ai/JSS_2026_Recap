const a = parseFloat(prompt('Enter side 1:'));
const b = parseFloat(prompt('Enter side 2:'));
const c = parseFloat(prompt('Enter side 3:'));
let type = 'scalene';
if (a === b && b === c) type = 'equilateral';
else if (a === b || b === c || a === c) type = 'isosceles';
document.getElementById('target').innerHTML = `The triangle is ${type}.`;
