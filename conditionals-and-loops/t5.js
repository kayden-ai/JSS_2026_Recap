const num = parseInt(prompt('Enter a positive integer:'));
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
document.getElementById('target').innerHTML =
  `The sum of natural numbers up to ${num} is ${sum}.`;
