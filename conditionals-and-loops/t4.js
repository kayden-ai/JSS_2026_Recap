const score = parseInt(prompt('Enter your score (0-100):'));
let grade = 0;
if (score >= 88) grade = 5;
else if (score >= 76) grade = 4;
else if (score >= 64) grade = 3;
else if (score >= 52) grade = 2;
else if (score >= 40) grade = 1;
document.getElementById('target').innerHTML = `Your grade is ${grade}.`;
